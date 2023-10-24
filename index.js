module.exports = {
  root: true,
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@angular-eslint/recommended",
    "plugin:@angular-eslint/template/process-inline-templates",
    "plugin:@typescript-eslint/recommended",
    // Keep this plugin last in the list
    // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    "plugin:prettier/recommended",
  ],
  env: {
    node: true,
  },
  rules: {
    "prettier/arrow-parens": "avoid",
    "prettier/bracket-same-line": true,
    "prettier/bracket-spacing": true,
    "prettier/print-width": ["error", { code: 120 }],
    "prettier/semi": true,
    "prettier/single-quote": true,
    "prettier/tab-width": 2,
    "prettier/trailing-comma": "es5",
    "prettier/use-tabs": false,
  },
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: ["tsconfig.json"],
        createDefaultProgram: true,
      },
      extends: [
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
      ],
      rules: {
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            prefix: "app",
            style: "camelCase",
          },
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            prefix: "app",
            style: "kebab-case",
          },
        ],
      },
    },
    {
      files: ["*.html"],
      extends: ["plugin:@angular-eslint/template/recommended"],
      rules: {
        "prettier/single-quote": false,
        "prettier/html-whitespace-sensitivity": "ignore",
      },
    },
    {
      files: ["**/*.yml"],
      rules: {
        "single-quote": false,
      },
    },
  ],
};
