export function getSelectedTeam(state) {
  const { selectedTeam } = state.appReducer;
  return state.appReducer.teams.filter(team => team.name === selectedTeam)[0] || {
    members: [],
  };
}

export function getPoints(selectedTeam) {
  const teamName = selectedTeam.name;
  const daysInSprint = selectedTeam.weeksPerSprint * 5;
  const potentialPoints = selectedTeam.members.length * daysInSprint * selectedTeam.ptsPerDevPerDay;

  const devAwayDays = selectedTeam.members.reduce(
    (sum, member) =>
      sum + Number(member.daysOffEverySprint) + Number(member.daysOffThisSprint),
    0,
  );
  const devAwayPoints = devAwayDays * selectedTeam.ptsPerDevPerDay;

  const meetingDays = selectedTeam.adjustmentPts;
  const meetingPoints = meetingDays * selectedTeam.ptsPerDevPerDay;

  const actualPoints = potentialPoints - devAwayPoints - meetingPoints;

  // eslint-disable-next-line
  alert(`
    ${teamName} has ${daysInSprint} days in sprint
    And ${selectedTeam.members.length} number of devs
    ${potentialPoints} potential points in sprint
    ${devAwayDays} dev away days
    ${meetingDays} meeting days
    
    *** ${actualPoints} actual points this sprint ***
    `);
}
