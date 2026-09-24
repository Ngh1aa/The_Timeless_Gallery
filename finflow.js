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
    railLabel: "Wallet",
    instruction: "USD → PHP · Wallet payout",
    path: "Wallet rail selected → Payout ready",
    tracePath: "Settlement path prepared",
    traceNext: "Wallet destination confirmation"
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
    railLabel: "Bank",
    instruction: "EUR → NGN · Bank payout",
    path: "Bank rail selected → Settlement ready",
    tracePath: "Bank settlement path prepared",
    traceNext: "Bank destination confirmation"
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
    railLabel: "Cash payout",
    instruction: "USD → MXN · Cash pickup",
    path: "Cash payout rail selected → Pickup path ready",
    tracePath: "Pickup network path prepared",
    traceNext: "Cash pickup confirmation"
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
const scenarioTabs = $$("[data-scenario]");

const traceStops = $$(".trace-stop");
const traceInstruction = traceStops[0] ? $("small", traceStops[0]) : null;
const traceSelectedTitle = traceStops[2] ? $("strong", traceStops[2]) : null;
const traceSelectedMeta = traceStops[2] ? $("small", traceStops[2]) : null;
const traceNextMeta = traceStops[3] ? $("small", traceStops[3]) : null;

let sequenceTimer = null;
let stageTimers = [];

function clearSequence() {
  stageTimers.forEach(window.clearTimeout);
  stageTimers = [];
  if (sequenceTimer) window.clearTimeout(sequenceTimer);
}

function syncTrace(data) {
  if (traceInstruction) traceInstruction.textContent = data.instruction;
  if (traceSelectedTitle) traceSelectedTitle.textContent = `${data.railLabel} rail selected`;
  if (traceSelectedMeta) traceSelectedMeta.textContent = data.tracePath;
  if (traceNextMeta) traceNextMeta.textContent = data.traceNext;
}

function setScenario(key, { focus = false } = {}) {
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

  scenarioTabs.forEach((item) => {
    const active = item.dataset.scenario === key;
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-selected", String(active));
    item.setAttribute("tabindex", active ? "0" : "-1");
    if (active && focus) item.focus();
  });

  syncTrace(data);
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

scenarioTabs.forEach((tab, index) => {
  tab.setAttribute("tabindex", tab.classList.contains("is-active") ? "0" : "-1");

  tab.addEventListener("click", () => {
    setScenario(tab.dataset.scenario);
  });

  tab.addEventListener("keydown", (event) => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    event.preventDefault();

    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % scenarioTabs.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + scenarioTabs.length) % scenarioTabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = scenarioTabs.length - 1;

    const nextTab = scenarioTabs[nextIndex];
    setScenario(nextTab.dataset.scenario, { focus: true });
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
    button.innerHTML = 'Request staged <span aria-hidden="true">✓</span>';
    button.disabled = true;
    window.setTimeout(() => {
      button.innerHTML = original;
      button.disabled = false;
    }, 2600);
  }
});

window.addEventListener("load", () => {
  syncTrace(scenarios.wallet);
  runRoutingSequence();
});
