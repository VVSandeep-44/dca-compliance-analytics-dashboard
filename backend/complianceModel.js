/**
 * Rule-based compliance model
 * Acts as the "MODEL" for MVP
 */

function evaluateCompliance(caseItem) {
  const violations = [];

  if (caseItem.follow_up_count > 3) {
    violations.push("Exceeded maximum follow-up limit");
  }

  if (caseItem.last_contact_hour > 18) {
    violations.push("Contacted customer outside allowed hours");
  }

  return {
    compliant: violations.length === 0,
    violations: violations
  };
}

module.exports = evaluateCompliance;

