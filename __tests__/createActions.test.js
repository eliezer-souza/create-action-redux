import createActions from "../lib";

describe("Create actions redux", () => {
  it("should be create actions default request", () => {
    const { Actions } = createActions({
      options: { prefix: "test" },
      defaultActions: true
    });

    expect(Actions.testRequest()).toEqual({
      payload: {},
      type: "TEST_TESTREQUEST"
    });
  });

  it("should be create actions default success", () => {
    const { Actions } = createActions({
      options: { prefix: "test" },
      defaultActions: true
    });

    expect(Actions.testSuccess()).toEqual({
      payload: {},
      type: "TEST_TESTSUCCESS"
    });
  });

  it("should be create actions default error", () => {
    const { Actions } = createActions({
      options: { prefix: "test" },
      defaultActions: true
    });

    expect(Actions.testError()).toEqual({
      payload: {},
      type: "TEST_TESTERROR"
    });
  });

  it("should be create actions with parameters null", () => {
    const { Actions } = createActions({
      options: { prefix: "test" },
      actions: {
        testAction: null
      }
    });

    expect(Actions.testAction()).toEqual({ type: "TEST_TESTACTION" });
  });

  it("should be create actions with parameters array", () => {
    const { Actions } = createActions({
      options: { prefix: "test" },
      actions: {
        testAction: ["text"]
      }
    });

    expect(Actions.testAction("text")).toEqual({
      payload: { text: "text" },
      type: "TEST_TESTACTION"
    });
  });

  it("should be create actions with parameters object", () => {
    const { Actions } = createActions({
      options: { prefix: "test" },
      actions: {
        testAction: { text: "default", name: "eliezersouza" }
      }
    });

    expect(Actions.testAction({ text: "test", send: true })).toEqual({
      payload: { text: "test", name: "eliezersouza", send: true },
      type: "TEST_TESTACTION"
    });
  });

  it("should be create actions with parameters function", () => {
    const { Actions } = createActions({
      options: { prefix: "test" },
      actions: {
        testAction: (text = "test") => ({
          type: "TEST_ACTION",
          payload: { text }
        })
      }
    });

    expect(Actions.testAction()).toEqual({
      payload: { text: "test" },
      type: "TEST_ACTION"
    });
  });
});
