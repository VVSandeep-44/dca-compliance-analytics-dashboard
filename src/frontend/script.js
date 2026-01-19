function runCompliance() {
    document.getElementById("loading").style.display = "block";

    setTimeout(() => {
      document.getElementById("loading").style.display = "none";
      showResults();
    }, 1200);
  }

  function showResults() {
    const results = [
      {
        case_id: "C001",
        agent: "Agent A",
        compliant: true,
        violations: []
      },
      {
        case_id: "C002",
        agent: "Agent B",
        compliant: false,
        violations: [
          "Exceeded maximum follow-up limit",
          "Contacted customer outside permitted hours"
        ]
      }
    ];

    const resultsDiv = document.getElementById("results");
    const content = document.getElementById("results-content");
    content.innerHTML = "";

    const filterOn = document.getElementById("filterToggle")?.checked;

results.forEach(r => {
  if (filterOn && r.compliant) return;

      const badgeClass = r.compliant ? "green" : "red";
      const badgeText = r.compliant ? "Compliant" : "Non-Compliant";

      let violationsHtml = "";
      if (!r.compliant) {
        violationsHtml = `
          <ul class="violations">
            ${r.violations.map(v => `<li>${v}</li>`).join("")}
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