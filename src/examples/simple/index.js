import React, { useState } from "react";
import { connect } from "react-redux";
import { Actions } from "./reducer";

function AppSimple(props) {
  const {
    counter,
    increment,
    decrement,
    text,
    changeText,
    message,
    name,
    changeName
  } = props;

  const [textInput, setTextInput] = useState();

  return (
    <React.Fragment>
      <h1>Test with redux</h1>
      <h3>{counter}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <hr />
      <input onChange={e => setTextInput(e.target.value)} />
      <button onClick={() => changeText(textInput)}>Change text</button>
      <h3>{text}</h3>
      <hr />
      <input onChange={e => setTextInput(e.target.value)} />
      <button onClick={() => changeName({ name: textInput })}>
        Insert name
      </button>
      <h3>{`${message} ${name}`}</h3>
      <hr />
    </React.Fragment>
  );
}

export default connect(
  state => state.simple,
  { ...Actions }
)(AppSimple);
