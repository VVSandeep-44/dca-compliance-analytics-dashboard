let auditLog = [];
function runCompliance() {
  document.getElementById("loading").style.display = "block";

  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    showResults();
  }, 1200);
}

const evaluationTime = new Date().toLocaleString();

function showResults() {
  fetch("../data/cases.json")
    .then(res => res.json())
    .then(results => {
      renderResults(results);
    });
}

function renderResults(results) {
  const resultsDiv = document.getElementById("results");
  const content = document.getElementById("results-content");
  content.innerHTML = "";

  const filterOn = document.getElementById("filterToggle")?.checked;

  content.innerHTML = `<p><em>Last evaluated: ${evaluationTime}</em></p>`;
  results.forEach((r) => {
    if (filterOn && r.compliant) return;

    const badgeClass = r.compliant ? "green" : "red";
    const badgeText = r.compliant ? "Compliant" : "Non-Compliant";

    let violationsHtml = "";
    if (!r.compliant) {
      violationsHtml = `
          <ul class="violations">
            ${r.violations
              .map(
                (v) => `
  <li>
    <strong>${v.rule}</strong>
    <br>
    Severity: <strong>${v.severity}</strong> — ${v.impact}
  </li>
`,
              )
              .join("")}

          </ul>
        `;
    }

    content.innerHTML += `
        <div class="case">
          <strong>${r.case_id}</strong> — ${r.agent}
          <span class="badge ${badgeClass}">${badgeText}</span>
          ${violationsHtml}
        </div>
      `;
  });

  resultsDiv.style.display = "block";

  const violationCount = results.reduce(
  (count, r) => count + r.violations.length,
  0
);

auditLog.push({
  timestamp: new Date().toLocaleString(),
  totalCases: results.length,
  totalViolations: violationCount
});

renderAuditLog();

}

function renderAuditLog() {
  const logElement = document.getElementById("audit-log");
  logElement.innerHTML = "";

  auditLog.forEach(entry => {
    logElement.innerHTML += `
      <li>
        ${entry.timestamp} — 
        Cases: ${entry.totalCases}, 
        Violations: ${entry.totalViolations}
      </li>
    `;
  });
}

