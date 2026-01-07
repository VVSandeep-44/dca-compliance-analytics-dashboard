/**
 * workflow.js
 * ------------
 * Data processing pipeline:
 * Input Data → Compliance Model → Processed Output
 */

const cases = require("../data/sample_cases.json");
const evaluateCompliance = require("../backend/complianceModel");

// Run compliance evaluation for all cases
function runPipeline() {
  return cases.map((c) => {

    // Apply compliance rules to each case
    const complianceResult = evaluateCompliance(c);

    // Return structured output for analytics / UI
    return {
      case_id: c.case_id,
      agent: c.agent,
      status: c.status,
      compliant: complianceResult.compliant,
      violations: complianceResult.violations
    };
  });
}

// Export pipeline function
module.exports = runPipeline;
