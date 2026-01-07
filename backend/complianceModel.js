/**
 * complianceModel.js
 * -------------------
 * Rule-based compliance evaluation logic.
 * This file represents the "MODEL" in the MVP.
 * Can be replaced with an ML model in future.
 */

function evaluateCompliance(caseItem) {
  const violations = [];

  // Rule 1: Limit number of follow-ups per case
  if (caseItem.follow_up_count > 3) {
    violations.push("Exceeded maximum follow-up limit");
  }

  // Rule 2: Restrict contact after working hours (after 6 PM)
  if (caseItem.last_contact_hour > 18) {
    violations.push("Contacted customer outside allowed hours");
  }

  // Final compliance decision
  return {
    compliant: violations.length === 0,
    violations: violations
  };
}

// Export model function
module.exports = evaluateCompliance;
