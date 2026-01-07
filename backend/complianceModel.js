function evaluateCompliance(caseItem) {
  let issues = [];

  if (caseItem.follow_up_count > 3) {
    issues.push("Too many follow-ups");
  }
  if (caseItem.last_contact_hour > 18) {
    issues.push("After-hours contact");
  }

  return {
    compliant: issues.length === 0,
    issues
  };
}

module.exports = evaluateCompliance;
