const scenarios = {
  wallet: {
    amount: "$2,840.00",
    origin: "USD",
    destination: "PHP",
    type: "Wallet",
    priority: "Fast payout",
    corridor: "US → PH",
    signalDestination: "Wallet",
    rail: "wallet",
    path: "Wallet rail selected → Payout ready"
  },
  bank: {
    amount: "€6,250.00",
    origin: "EUR",
    destination: "NGN",
    type: "Bank account",
    priority: "Reliable settlement",
    corridor: "EU → NG",
    signalDestination: "Bank",
    rail: "bank",
    path: "Bank rail selected → Settlement ready"
  },
  cash: {
    amount: "$1,180.00",
    origin: "USD",
    destination: "MXN",
    type: "Cash pickup",
    priority: "Cash access",
    corridor: "US → MX",
    signalDestination: "Cash payout",
    rail: "cash",
    path: "Cash payout rail selected → Pickup path ready"
  }
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const statusEl = $("#demo-status");
const settlementState = $("#settlement-state");
const receiveCard = $('[data-stage="receive"]');
const analyzeCard = $('[data-stage="analyze"]');
const railsGroup = $('[data-stage="route"]');
const settlementStrip = $('[data-stage="settle"]');
const connectors = $$(".connector");

let sequenceTimer = null;
let stageTimers = [];

function clearSequence() {
  stageTimers.forEach(window.clearTimeout);
  stageTimers = [];
  if (sequenceTimer) window.clearTimeout(sequenceTimer);
}

function setScenario(key) {
  const data = scenarios[key];
  if (!data) return;

  $("#tx-amount").textContent = data.amount;
  $("#tx-origin").textContent = data.origin;
  $("#tx-destination").textContent = data.destination;
  $("#tx-type").textContent = data.type;
  $("#tx-priority").textContent = data.priority;
  $("#signal-corridor").textContent = data.corridor;
  $("#signal-destination").textContent = data.signalDestination;
  $("#settlement-path").textContent = data.path;

  $$(".rail").forEach((rail) => {
    const selected = rail.dataset.rail === data.rail;
    rail.classList.toggle("is-selected", selected);
    $(".rail-state", rail).textContent = selected ? "Selected" : "Available";
  });

  runRoutingSequence();
}

function resetStages() {
  [receiveCard, analyzeCard].forEach((el) => el?.classList.remove("is-live"));
  railsGroup?.classList.remove("is-live", "is-routing");
  settlementStrip?.classList.remove("is-complete");
  connectors.forEach((el) => el.classList.remove("is-live"));
  if (statusEl) statusEl.textContent = "Receiving transaction";
  if (settlementState) settlementState.textContent = "PENDING";
}

function pulseConnector(index) {
  const connector = connectors[index];
  if (!connector) return;
  connector.classList.remove("is-live");
  void connector.offsetWidth;
  connector.classList.add("is-live");
}

function runRoutingSequence() {
  clearSequence();
  resetStages();

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    receiveCard?.classList.add("is-live");
    analyzeCard?.classList.add("is-live");
    railsGroup?.classList.add("is-live");
    settlementStrip?.classList.add("is-complete");
    if (statusEl) statusEl.textContent = "Route selected";
    if (settlementState) settlementState.textContent = "ROUTED";
    return;
  }

  receiveCard?.classList.add("is-live");

  stageTimers.push(window.setTimeout(() => {
    pulseConnector(0);
    if (statusEl) statusEl.textContent = "Analyzing transaction";
  }, 550));

  stageTimers.push(window.setTimeout(() => {
    receiveCard?.classList.remove("is-live");
    analyzeCard?.classList.add("is-live");
  }, 1100));

  stageTimers.push(window.setTimeout(() => {
    pulseConnector(1);
    railsGroup?.classList.add("is-routing");
    if (statusEl) statusEl.textContent = "Evaluating eligible rails";
  }, 1750));

  stageTimers.push(window.setTimeout(() => {
    analyzeCard?.classList.remove("is-live");
    railsGroup?.classList.remove("is-routing");
    railsGroup?.classList.add("is-live");
    if (statusEl) statusEl.textContent = "Route selected";
  }, 2500));

  stageTimers.push(window.setTimeout(() => {
    settlementStrip?.classList.add("is-complete");
    if (settlementState) settlementState.textContent = "ROUTED";
  }, 3100));
}

$$("[data-scenario]").forEach((tab) => {
  tab.addEventListener("click", () => {
    const key = tab.dataset.scenario;
    $$("[data-scenario]").forEach((item) => {
      const active = item === tab;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
    });
    setScenario(key);
  });
});

$("[data-replay]")?.addEventListener("click", runRoutingSequence);

const header = $("[data-header]");
const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 30);
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const flowMap = $(".flow-map");
if (flowMap && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });
  observer.observe(flowMap);
} else {
  flowMap?.classList.add("is-visible");
}

$("[data-demo-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const success = $(".form-success", form);
  success?.removeAttribute("hidden");

  const button = $('button[type="submit"]', form);
  if (button) {
    const original = button.innerHTML;
    button.innerHTML = "Request staged <span aria-hidden=\"true\">✓</span>";
    button.disabled = true;
    window.setTimeout(() => {
      button.innerHTML = original;
      button.disabled = false;
    }, 2600);
  }
});

window.addEventListener("load", () => {
  runRoutingSequence();
});
