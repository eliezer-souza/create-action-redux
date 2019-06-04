import createActions from "../../createActions";

export const { Actions, Types } = createActions({
  options: { prefix: "saga" },
  defaultActions: true,
  actions: {
    sagaFetch: null
  }
});

export default function sagaReducer(
  state = { loading: true, data: [], error: false },
  action
) {
  switch (action.type) {
    case Types.SAGA_SAGAREQUEST:
      return { ...state, loading: true };
    case Types.SAGA_SAGASUCCESS:
      return { ...state, loading: false, data: action.payload };
    case Types.SAGA_SAGAERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
