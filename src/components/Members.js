import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { getSelectedTeam } from '../helpers';

const Members = ({ selectedTeam, updateMemberSettings }) => (
  <div className="container">
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th />
          <th>Days off every sprint</th>
          <th>Days off this sprint</th>
        </tr>
      </thead>
      <tbody className="">
        {selectedTeam.members.map(member => (
          <tr key={member.memberId}>
            <td>
              <input
                className="memberName form-control"
                type="text"
                placeholder={member.name}
                onChange={(event) => {
                  updateMemberSettings({
                    memberId: member.memberId,
                    name: event.target.value,
                  });
                }}
              />
            </td>
            <td>
              <button className="btn btn-info">Delete</button>
            </td>
            <td>
              <div className="">
                <input className="form-control" type="number" placeholder="0" step=".5" min="0" max="10" />
              </div>
            </td>
            <td>
              <div className="">
                <input className="form-control" type="number" placeholder="0" step=".5" min="0" max="10" />
              </div>
            </td>
          </tr>
      ))}
      </tbody>
    </table>
  </div>
);

function mapStateToProps(state) {
  return {
    selectedTeam: getSelectedTeam(state),
    // selectedMember: getSelectedMember(state),
  };
}

const mapDispatchToProps = dispatch => ({
  toggleTeamOptions() {
    dispatch(actions.toggleTeamOptions());
  },
  updateMemberSettings(options) {
    dispatch(actions.updateMemberSettings(options));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Members);
