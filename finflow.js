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
    path: "Wallet rail → Payout ready",
    instruction: "USD → PHP · Wallet payout",
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
    path: "Bank rail → Settlement ready",
    instruction: "EUR → NGN · Bank payout",
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
    path: "Cash payout rail → Pickup path ready",
    instruction: "USD → MXN · Cash pickup",
    tracePath: "Pickup network path prepared",
    traceNext: "Cash pickup confirmation"
  }
};

const inspectorSteps = {
  receive: {
    index: "01",
    title: "Receive the payout instruction.",
    body: "The journey starts with one transaction request from the MTO or PSP. FinFlow keeps the original intent visible before any routing decision is made.",
    note: "Operators can orient themselves before the routing layer makes a decision."
  },
  analyze: {
    index: "02",
    title: "Read the transaction context.",
    body: "FinFlow analyzes the transaction context and identifies the settlement options that can serve the payout destination.",
    note: "The page explains the decision inputs without pretending to reveal proprietary production rules."
  },
  orchestrate: {
    index: "03",
    title: "Bring eligible rails into one control plane.",
    body: "Instead of forcing operators to reason about separate payment paths, FinFlow presents the eligible settlement rails inside one orchestration layer.",
    note: "This is the core mental model: many rails, one understandable operating layer.",
    showRails: true
  },
  route: {
    index: "04",
    title: "Select an appropriate available rail.",
    body: "The routing layer chooses a path that matches the transaction context and keeps the selected rail visible to the operator.",
    note: "The design prioritizes route transparency over vague claims about 'smart' automation.",
    showRails: true
  },
  settle: {
    index: "05",
    title: "Execute settlement through the selected path.",
    body: "Once a rail is selected, the transaction moves into settlement while its state remains part of the visible transaction story.",
    note: "A visible current stage reduces the feeling of funds disappearing into a black box."
  },
  payout: {
    index: "06",
    title: "Complete the destination payout.",
    body: "The journey closes at the recipient destination — bank, wallet, card, stablecoin or cash payout — with a clear final handoff.",
    note: "The end state reinforces the campaign promise: a clearer path from instruction to payout."
  }
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const scenarioTabs = $$("[data-scenario]");
const routePaths = $$("[data-route]");
const railNodes = $$("[data-rail]");
const receiveNode = $('[data-stage="receive"]');
const engineNode = $('[data-stage="analyze"]');
const signalReadout = $('[data-stage="signals"]');
const stageFooter = $('[data-stage="settle"]');
const statusEl = $("#demo-status");
const settlementState = $("#settlement-state");
const routeMpath = $("#route-mpath");
const routeMotion = $("#route-motion");
let stageTimers = [];

function clearStageTimers() {
  stageTimers.forEach(window.clearTimeout);
  stageTimers = [];
}

function restartRouteMotion() {
  if (!routeMotion) return;
  try { routeMotion.beginElement(); } catch (_) {}
}

function syncTrace(data) {
  $("#trace-instruction").textContent = data.instruction;
  $("#trace-selected-title").textContent = `${data.railLabel} rail selected`;
  $("#trace-selected-meta").textContent = data.tracePath;
  $("#trace-next-meta").textContent = data.traceNext;
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

  scenarioTabs.forEach((tab) => {
    const active = tab.dataset.scenario === key;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.setAttribute("tabindex", active ? "0" : "-1");
    if (active && focus) tab.focus();
  });

  railNodes.forEach((node) => {
    const selected = node.dataset.rail === data.rail;
    node.classList.toggle("is-selected", selected);
    const state = node.querySelector(":scope > b");
    if (state) state.textContent = selected ? "Selected" : "Available";
  });

  routePaths.forEach((path) => path.classList.toggle("is-active", path.dataset.route === data.rail));
  routeMpath?.setAttribute("href", `#path-${data.rail}`);
  routeMpath?.setAttributeNS("http://www.w3.org/1999/xlink", "href", `#path-${data.rail}`);
  restartRouteMotion();
  syncTrace(data);
  runRoutingSequence();
}

function resetStages() {
  receiveNode?.classList.remove("is-live");
  engineNode?.classList.remove("is-live");
  signalReadout?.classList.remove("is-live");
  stageFooter?.classList.remove("is-complete");
  if (statusEl) statusEl.textContent = "Receiving transaction";
  if (settlementState) settlementState.textContent = "PENDING";
}

function runRoutingSequence() {
  clearStageTimers();
  resetStages();

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    receiveNode?.classList.add("is-live");
    engineNode?.classList.add("is-live");
    signalReadout?.classList.add("is-live");
    stageFooter?.classList.add("is-complete");
    if (statusEl) statusEl.textContent = "Route selected";
    if (settlementState) settlementState.textContent = "ROUTED";
    return;
  }

  receiveNode?.classList.add("is-live");
  stageTimers.push(window.setTimeout(() => {
    receiveNode?.classList.remove("is-live");
    engineNode?.classList.add("is-live");
    if (statusEl) statusEl.textContent = "Analyzing transaction";
  }, 850));
  stageTimers.push(window.setTimeout(() => {
    signalReadout?.classList.add("is-live");
    if (statusEl) statusEl.textContent = "Evaluating eligible rails";
  }, 1600));
  stageTimers.push(window.setTimeout(() => {
    engineNode?.classList.remove("is-live");
    if (statusEl) statusEl.textContent = "Route selected";
  }, 2350));
  stageTimers.push(window.setTimeout(() => {
    stageFooter?.classList.add("is-complete");
    if (settlementState) settlementState.textContent = "ROUTED";
  }, 2900));
}

scenarioTabs.forEach((tab, index) => {
  tab.setAttribute("tabindex", tab.classList.contains("is-active") ? "0" : "-1");
  tab.addEventListener("click", () => setScenario(tab.dataset.scenario));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % scenarioTabs.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + scenarioTabs.length) % scenarioTabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = scenarioTabs.length - 1;
    setScenario(scenarioTabs[nextIndex].dataset.scenario, { focus: true });
  });
});

$("[data-replay]")?.addEventListener("click", runRoutingSequence);

const stepTabs = $$("[data-step]");
function setInspectorStep(key, { focus = false } = {}) {
  const data = inspectorSteps[key];
  if (!data) return;
  $("#inspector-index").textContent = data.index;
  $("#inspector-counter").textContent = `STEP ${data.index} / 06`;
  $("#inspector-title").textContent = data.title;
  $("#inspector-body").textContent = data.body;
  $("#inspector-note").textContent = data.note;
  $("#rail-spectrum").hidden = !data.showRails;

  stepTabs.forEach((tab) => {
    const active = tab.dataset.step === key;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.setAttribute("tabindex", active ? "0" : "-1");
    if (active && focus) tab.focus();
  });
  $$("[data-mini]").forEach((node) => node.classList.toggle("is-current", node.dataset.mini === key));
}

stepTabs.forEach((tab, index) => {
  tab.setAttribute("tabindex", index === 0 ? "0" : "-1");
  tab.addEventListener("click", () => setInspectorStep(tab.dataset.step));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = index;
    if (["ArrowDown", "ArrowRight"].includes(event.key)) nextIndex = (index + 1) % stepTabs.length;
    if (["ArrowUp", "ArrowLeft"].includes(event.key)) nextIndex = (index - 1 + stepTabs.length) % stepTabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = stepTabs.length - 1;
    setInspectorStep(stepTabs[nextIndex].dataset.step, { focus: true });
  });
});

const header = $("[data-header]");
const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 28);
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

$("[data-demo-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const success = $(".form-success", form);
  success?.removeAttribute("hidden");
  const button = $('button[type="submit"]', form);
  if (!button) return;
  const original = button.innerHTML;
  button.innerHTML = 'Request staged <span aria-hidden="true">✓</span>';
  button.disabled = true;
  window.setTimeout(() => {
    button.innerHTML = original;
    button.disabled = false;
  }, 2400);
});

window.addEventListener("load", () => {
  setScenario("wallet");
  setInspectorStep("receive");
});
