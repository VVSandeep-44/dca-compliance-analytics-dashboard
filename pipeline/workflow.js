/**
 * Data processing pipeline
 * Data → Model → Output
 */

const cases = require("../data/sample_cases.json");
const evaluateCompliance = require("../backend/complianceModel");

function runPipeline() {
  return cases.map((c) => {
    const complianceResult = evaluateCompliance(c);

    return {
      case_id: c.case_id,
      agent: c.agent,
      status: c.status,
      compliant: complianceResult.compliant,
      violations: complianceResult.violations
    };
  });
}

module.exports = runPipeline;
