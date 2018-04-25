import React from 'react';
import { connect } from 'react-redux';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import actions from '../actions';
import { getSelectedTeam } from '../helpers';

function getMemberStackContribution(member) {
  return member.stackContribution === 0
    ? 0
    : member.stackContribution || 50;
}

const Members = ({
  selectedTeam, updateMemberSettings, deleteMember,
}) => (
  <div className="container">
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th />
          <th className="table-restrict-width">Back end - Front end</th>
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
              <button
                className="btn btn-info"
                // eslint-disable-next-line
                onClick={() => { if (confirm(`Delete ${member.name}?`)) { deleteMember(member.memberId); } }}
              >
                Delete
              </button>
            </td>
            <td>
              <div>
                <Slider
                  value={getMemberStackContribution(member)}
                  min={0}
                  max={100}
                  step={10}
                  onChange={(value) => {
                    updateMemberSettings({
                      memberId: member.memberId,
                      stackContribution: value,
                    });
                  }}
                />
              </div>
            </td>
            <td>
              <div className="">
                <input
                  className="form-control day-off-every-sprint"
                  type="number"
                  placeholder={member.daysOffEverySprint}
                  step=".5"
                  min="0"
                  max="10"
                  onChange={(event) => {
                    updateMemberSettings({
                      memberId: member.memberId,
                      daysOffEverySprint: event.target.value,
                    });
                  }}
                />
              </div>
            </td>
            <td>
              <div className="">
                <input
                  className="form-control day-off-this-sprint"
                  type="number"
                  placeholder={member.daysOffThisSprint}
                  step=".5"
                  min="0"
                  max="10"
                  onChange={(event) => {
                    updateMemberSettings({
                      memberId: member.memberId,
                      daysOffThisSprint: event.target.value,
                    });
                  }}
                />
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
  };
}

const mapDispatchToProps = dispatch => ({
  toggleTeamOptions() {
    dispatch(actions.toggleTeamOptions());
  },
  updateMemberSettings(options) {
    dispatch(actions.updateMemberSettings(options));
  },
  deleteMember(memberId) {
    dispatch(actions.deleteMember(memberId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Members);
