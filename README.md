<h1 align="center">
  <a href="https://github.com/eliezer-souza/create-action-redux"><img src="https://i.imgur.com/nfBMwl9.png" /></a>
</h1>

<p align="center">
  <a href="#-overview">Overview</a> |
  <a href="#-usage">Usage</a> |
  <a href="#-examples">Examples</a> |
  <a href="#-demo-sandbox">Demo Sandbox</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/create-action-redux">
    <img src="https://img.shields.io/npm/v/create-action-redux.svg" alt="npm version">
  </a>

  <a href="https://packagephobia.now.sh/result?p=create-action-redux">
    <img src="https://packagephobia.now.sh/badge?p=create-action-redux"
         alt="install size">
  </a>

  <a href="LICENSE.md">
    <img src="https://badgen.net/badge/license/MIT/blue" alt="">
  </a>
</p>
<hr />

## 📖 Overview

A simple middleware for create actions in redux, following as basic skeleton <a href="https://github.com/infinitered/reduxsauce">reduxsauce</a> createActions however with several changes and simpler.

## 💻 Install and Usage

Firstly, choose using your favourite package manager:

```js
$ npm install --save create-action-redux

# or

$ yarn add create-action-redux
```

Use **createActions()** to build yourself an object which contains Types and Actions.

Description of parameters

```js
options: {
  prefix: "";
}
// Assigns the value to the prefix of its actions and its types, if it is not past it is empty.
```

```js
defaultActions: false;
// By default is set false, if you pass true is added the three default actions (Request, Success, Error), it assigns the prefix in the actions and types.
```

```js
actions: {
}
// Here you will put all your actions, being able to overwrite the default or create other new actions.
```

Example of use

```js
import createActions from "create-action-redux";

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
```

Return of actions and types

```js
  {
    Actions: {
      appRequest: ƒ (),
      appSuccess: ƒ (),
      appError: ƒ (),
      changeName: ƒ (),
      changeText: ƒ (),
      decrement: ƒ (),
      increment: ƒ ()
    },
    Types: {
      APP_APPREQUEST: "APP_APPREQUEST",
      APP_APPSUCCESS: "APP_APPSUCCESS",
      APP_APPERROR: "APP_APPERROR",
      APP_CHANGENAME: "APP_CHANGENAME",
      APP_CHANGETEXT: "APP_CHANGETEXT",
      APP_DECREMENT: "APP_DECREMENT",
      APP_INCREMENT: "APP_INCREMENT",
    }
  }
```

If null is passed to the action, the type is only returned. Example:

```js
Actions.increment();
// { type: APP_INCREMENT }
```

By passing an array, they become the input parameters of the action

```js
Actions.changeText("create-action-redux");
// { type: APP_CHANGETEXT, payload: { text: "create-action-redux" } }
```

If you pass an object of `{ property: defaultValue }`, the default values are applied.

```js
Actions.changeName({ name: "Redux" });
// { type: APP_CHANGENAME, payload: { message: "Hello", name: "Redux" } }
```

If you want to pass other parameters, just add that they will also be passed

```js
Actions.changeName({ name: "Redux", send: true });
// { type: APP_CHANGENAME, payload: { message: "Hello", name: "Redux", send: true } }
```

To pass the input parameters **defaultActions** follows the same pattern. By default they are passed objects as parameters so just pass any object value which it understands as input parameter.

## 🗃 Examples

- **[basic](https://github.com/eliezer-souza/create-action-redux/tree/master/src/examples/simple)**
- **[redux-saga](https://github.com/eliezer-souza/create-action-redux/tree/master/src/examples/saga)**

## 👀 Demo Sandbox

https://codesandbox.io/s/github/eliezer-souza/create-action-redux

<br />
<br />

`MIT license, Copyright (c) 2019 Eliezer Souza.`
