const cases = require("../data/sample_cases.json");
const evaluateCompliance = require("../backend/complianceModel");

function processCases() {
  return cases.map(c => {
    const result = evaluateCompliance(c);
    return {
      case_id: c.case_id,
      compliant: result.compliant,
      issues: result.issues
    };
  });
}

module.exports = processCases;
