import createActions from "../../createActions";

export const { Actions, Types } = createActions({
  options: { prefix: "app" },
  defaultActions: true,
  actions: {
    increment: null,
    decrement: null,
    changeText: ["text"],
    changeName: { message: "Hello", name: "World" }
  }
});

export default function rootReducer(
  state = { counter: 0, message: "Hello", name: "World" },
  action
) {
  switch (action.type) {
    case Types.APP_INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case Types.APP_DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case Types.APP_CHANGETEXT:
      return { ...state, text: action.payload.text };
    case Types.APP_CHANGENAME:
      return {
        ...state,
        message: action.payload.message,
        name: action.payload.name
      };
    default:
      return state;
  }
}
