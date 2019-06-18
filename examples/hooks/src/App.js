import React, { useState, useReducer } from "react";
import rootReducer, { initialState, Actions } from "./reducer";

function AppHooks() {
  const [textInput, setTextInput] = useState();
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const { counter, message, name, text } = state;
  const { increment, decrement, changeText, changeName } = Actions;

  return (
    <React.Fragment>
      <h1>Test with hooks useReducer</h1>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <hr />
      <input onChange={e => setTextInput(e.target.value)} />
      <button onClick={() => dispatch(changeText(textInput))}>
        Change text
      </button>
      <h3>{text}</h3>
      <hr />
      <input onChange={e => setTextInput(e.target.value)} />
      <button onClick={() => dispatch(changeName({ name: textInput }))}>
        Insert name
      </button>
      <h3>{`${message} ${name}`}</h3>
      <hr />
    </React.Fragment>
  );
}

export default AppHooks;
