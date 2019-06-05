function createActionsCreators(name, extraValue, options) {
  const { prefix } = options;
  const type = `${prefix.toUpperCase()}_${name.toUpperCase()}`;

  if (!extraValue) {
    return () => ({ type });
  }

  if (Array.isArray(extraValue)) {
    return (...values) => {
      const payload = extraValue.reduce(
        (obj, parameter, i) => ({ ...obj, [parameter]: values[i] }),
        {}
      );

      return { type, payload: payload };
    };
  }

  if (typeof extraValue === "object") {
    return valueObj => {
      return { type, payload: { ...extraValue, ...valueObj } };
    };
  }
}

function transformActionCreator(actions, options) {
  const objActions = {};

  Object.keys(actions).map(key => {
    if (typeof actions[key] === "function") {
      return (objActions[key] = actions[key]);
    } else {
      return (objActions[key] = createActionsCreators(
        key,
        actions[key],
        options
      ));
    }
  });

  return objActions;
}

function transformTypes(actions, options) {
  const objTypes = {};

  Object.keys(actions).map(key => {
    const { prefix } = options;
    const type = `${prefix.toUpperCase()}_${key.toUpperCase()}`;
    return (objTypes[type] = type);
  });

  return objTypes;
}

function createDefaultActions(prefix) {
  const types = ["Request", "Success", "Error"];
  const obj = {};

  types.map(type => {
    const actionName = `${prefix}${type}`;
    return (obj[actionName] = {});
  });

  return obj;
}

export default function createActions({
  options = { prefix: "" },
  defaultActions = false,
  actions = {}
}) {
  let objDefaultActions = {};
  if (defaultActions) {
    objDefaultActions = createDefaultActions(options.prefix);
  }

  actions = { ...objDefaultActions, ...actions };

  return {
    Actions: transformActionCreator(actions, options),
    Types: transformTypes(actions, options)
  };
}
