import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

const TeamOptions = ({ selectedTeam }) => {
  if (selectedTeam === null) {
    return null;
  }
  return (
    <div className="container">
      <button type="button" className="btn btn-info">{selectedTeam} Options</button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    selectedTeam: state.appReducer.selectedTeam,
  };
}

const mapDispatchToProps = dispatch => ({
  addTeam: () => {
    dispatch(actions.addTeam());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamOptions);
