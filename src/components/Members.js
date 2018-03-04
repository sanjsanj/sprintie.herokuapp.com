import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { getSelectedTeam } from '../helpers';

const Members = ({ selectedTeam }) => (
  <div className="container">
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Days off this sprint</th>
        </tr>
      </thead>
      <tbody className="">
        {selectedTeam.members.map(member => (
          <tr key={member.name}>
            <td>
              <button className="btn btn-light">{member.name}</button>
            </td>
            <td>
              <div className="">
                <input className="" type="number" placeholder="0" step=".5" min="0" max="10" />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Members);
