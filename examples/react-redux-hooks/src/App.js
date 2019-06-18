import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Actions } from "./reducer";

function App() {
  const [textInput, setTextInput] = useState();
  const { increment, decrement, changeText, changeName } = Actions;
  const { counter, message, name, text } = useSelector(state => state.basic);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <h1>Test with hooks react-redux</h1>
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

export default App;
