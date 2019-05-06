/**
 * Copyright (c) 2018-present, SF, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

// Inspired by https://github.com/airbnb/javascript but less opinionated.

// We use eslint-loader so even warnings are very visible.
// This is why we only use "WARNING" level for potential errors,
// and we don"t use "ERROR" level at all.

// In the future, we might create a separate list of rules for production.
// It would probably be more strict.

// The ESLint browser environment defines all browser globals as valid,
// even though most people don"t know some of them exist (e.g. `name` or `status`).
// This is dangerous as it hides accidentally undefined variables.
// We blacklist the globals that we deem potentially confusing.
// To use them, explicitly reference them, e.g. `window.name` or `window.status`.
module.exports = {
  root: true,

  parser: "babel-eslint",

  extends: ["eslint:recommended", "plugin:jsx-a11y/recommended", "plugin:react/recommended", "plugin:prettier/recommended"],

  plugins: ["jsx-a11y", "react", "prettier"],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: "detect",
    },
  },

  rules: {
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 打包时禁止debugger
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 打包时禁止console
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 打包时禁止console
    "react/forbid-foreign-prop-types": ["warn", { allowInPropTypes: true }],
    "react/jsx-pascal-case": [
      "warn",
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    "react/no-typos": "error",
    "react/prop-types": "off",
    "react/style-prop-object": "warn",
    "react/no-multi-comp": "warn",
    "react/prefer-es6-class": ["warn", "always"],
    "react/no-this-in-sfc": "error",
    "react/self-closing-comp": "error",
    "react/sort-comp": "error",
    "react/jsx-boolean-value": "warn",
    "react/jsx-indent": ["warn", 2],
    "react/jsx-indent-props": "warn",
    "react/jsx-closing-bracket-location": "warn",
    "react/jsx-closing-tag-location": "warn",
    "react/jsx-curly-spacing": ["error", {"when": "never", "children": true}],
    "react/void-dom-elements-no-children": "error",
    "react/jsx-equals-spacing": ["error", "never"],
    "react/jsx-no-bind": ["warn", {"allowArrowFunctions": true, "allowFunctions": true }],
    "react/jsx-max-props-per-line": ["error", { "maximum": 3, "when": "always" }],
    //https://github.com/evcohen/eslint-plugin-jsx-a11y 
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/nteractive-supports-focus": "off",
    "jsx-a11y/no-interactive-element-to-noninteractive-role": "warn",
    "jsx-a11y/no-noninteractive-element-to-interactive-role": "warn",
    "jsx-a11y/media-has-caption": "off",
    "jsx-a11y/mouse-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/no-onchange": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/no-access-key": "off",
    "jsx-a11y/anchor-has-content": "warn",
    // https://github.com/gajus/eslint-plugin-flowtype
  },
};
