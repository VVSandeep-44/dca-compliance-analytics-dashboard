function runCompliance() {
  document.getElementById("loading").style.display = "block";

  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    showResults();
  }, 1200);
}

const evaluationTime = new Date().toLocaleString();

function showResults() {
  const results = [
    {
      case_id: "C001",
      agent: "Agent A",
      compliant: true,
      violations: [],
    },
    {
      case_id: "C002",
      agent: "Agent B",
      compliant: false,
      violations: [
        {
          rule: "Exceeded maximum follow-up limit",
          severity: "High",
          impact: "Customer harassment risk",
        },
        {
          rule: "Contacted customer outside permitted hours",
          severity: "Medium",
          impact: "Regulatory time-window violation",
        },
      ],
    },
  ];

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
}
