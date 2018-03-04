import {
  ADD_MEMBER,
  ADD_TEAM,
  DELETE_TEAM,
  SELECT_TEAM,
  TOGGLE_TEAM_OPTIONS,
  UPDATE_MEMBER_SETTINGS,
  UPDATE_TEAM_SETTINGS,
  DELETE_MEMBER,
} from '../constants';

const actions = {
  addTeam() {
    return {
      type: ADD_TEAM,
    };
  },

  deleteTeam() {
    return {
      type: DELETE_TEAM,
    };
  },

  selectTeam(selectedTeam) {
    return {
      type: SELECT_TEAM,
      selectedTeam,
    };
  },

  toggleTeamOptions() {
    return {
      type: TOGGLE_TEAM_OPTIONS,
    };
  },

  updateTeamSettings(options) {
    return {
      type: UPDATE_TEAM_SETTINGS,
      options,
    };
  },

  addMember() {
    return {
      type: ADD_MEMBER,
    };
  },

  updateMemberSettings(options) {
    return {
      type: UPDATE_MEMBER_SETTINGS,
      options,
    };
  },

  deleteMember(memberId) {
    return {
      type: DELETE_MEMBER,
      memberId,
    };
  },
};

export default actions;
