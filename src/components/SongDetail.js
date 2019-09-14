import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  return <div>{song ? song.title : 'none'}</div>;
};

const mapStateToProps = state => {
  return {
    song: state.selectedSong
  };
};

export default connect(
  mapStateToProps,
  null
)(SongDetail);
