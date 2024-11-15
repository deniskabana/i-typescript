import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {
  languageOptions: { globals: globals.browser },
  rules: {
    "react/prop-types": "off",
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-uses-react": "off",
    "react/no-array-index-key": "error",
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
    "react/prefer-stateless-function": ["error", { ignorePureComponents: false }],
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": ["error", { namedComponents: "arrow-function" }],

    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/naming-convention": [
      "error",
      { format: ["PascalCase"], selector: "typeLike" },
      { format: ["PascalCase"], selector: "enumMember" },
    ],
    "@typescript-eslint/no-empty-function": ["error", { allow: ["arrowFunctions"] }],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": ["error", { args: "after-used", argsIgnorePattern: "^_", vars: "all", varsIgnorePattern: "^_", ignoreRestSiblings: true }],

    'import/no-default-export': 'error',
    "import/no-duplicates": "error",
    "import/order": [
      "error",
      {
        groups: [["builtin", "external", "internal"]],
        pathGroups: [
          { group: "external", pattern: "react", position: "before" },
          { group: "external", pattern: "@mui/material", position: "before" },
          { group: "external", pattern: "@mui/material/**", position: "before" },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
    "sort-keys": "off",
    "sort-keys-fix/sort-keys-fix": ["error", "asc", { caseSensitive: true, natural: false }],
    "typescript-sort-keys/interface": "error",
    "typescript-sort-keys/string-enum": "error",

    "linebreak-style": ["error", "unix"],
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
    "prettier/prettier": "error",
    "spaced-comment": "error",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        vars: "all",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
    "eqeqeq": ["error", "always"],
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
  },
},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReactHooks.configs.recommended,
  prettier.configs.recommended,
];