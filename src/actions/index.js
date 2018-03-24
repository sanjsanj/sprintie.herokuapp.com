import {
  ADD_MEMBER,
  ADD_TEAM,
  DELETE_TEAM,
  SELECT_TEAM,
  UPDATE_MEMBER_SETTINGS,
  UPDATE_TEAM_SETTINGS,
  DELETE_MEMBER,
  RESET_SPRINT,
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

  resetSprint() {
    return {
      type: RESET_SPRINT,
    };
  },
};

export default actions;
