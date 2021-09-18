import React from "react";
import { connect } from "react-redux";
class SongDetails extends React.Component {
  render() {
    return (
      <div style={{padding: "10px"}}>
        <h2>Song Details</h2>
        <h3>Title: {this.props.title}</h3>
        <h3>Duration: {this.props.duration}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state.selectedSong };
};
export default connect(mapStateToProps)(SongDetails);
