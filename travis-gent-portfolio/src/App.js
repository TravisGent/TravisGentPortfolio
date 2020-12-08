import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { fetchData } from "./actions/rootActions";
import './App.css';

const App = (props) => {
  return (
    <div className="App">
      {props.isLoading && <p>Loading...</p>}
      {props.error && <p>Uh-oh, something happened... {props.error}</p>}
      {props.fetchedData.length > 0}
      <header className="App-header">
        <h1 className="intro">
          I am
          <br />
          Travis Gent
        </h1>
      </header>
      <nav>
        <ul className="links">
          <li>Home</li>
          <li>About Me</li>
          <li>Projects</li>
        </ul>
        <ul className="icons">
          <li>Twitter</li>
          <li>Linkedin</li>
          <li>Github</li>
        </ul>
      </nav>
      <div id="main"></div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    fetchedData: state.fetchedData,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchData }
)(App);
