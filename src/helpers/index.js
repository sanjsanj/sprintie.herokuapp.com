export function getSelectedTeam(state) {
  const { selectedTeam } = state.appReducer;
  return state.appReducer.teams.filter(team => team.name === selectedTeam)[0] || {
    members: [],
  };
}

export const a = 1;
