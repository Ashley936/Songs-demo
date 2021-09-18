import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated">
            <button
              className="ui primary button"
              onClick={() => this.props.selectSong(song)}
              /* whenever you call an action creater 
              => it is dispatched to all reducers(by connect function) 
              => it updates the state accordingly 
              => mapStateToProps is called 
              => passes the state as props to component
              => component re-renders */
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { ...state };
}; // takes data/state from redux store and convert it into props for the component

export default connect(mapStateToProps, { selectSong })(SongList);

// import connect =>  pass your component as 2nd argument => fist argument is mapStateToProps
//                =>it will take the state and pass it as props to the component i.e.the 2nd argument
// state here is the store state/info we get from provider
