module.exports = {
  extends: ["@antfu/eslint-config"],
  rules: {
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: { delimiter: "semi", requireLast: true },
        singleline: { delimiter: "semi", requireLast: false },
        multilineDetection: "brackets",
      },
    ],
    "vue/eqeqeq": "off",
    "vue/valid-v-slot": "off",
    "vue/valid-v-for": "off",
    "vue/require-v-for-key": "off",
    "vue/no-mutating-props": "off",
    "vue/component-name-in-template-casing": [
      "error",
      "kebab-case",
      {
        registeredComponentsOnly: true,
        ignores: [],
      },
    ],

    "antfu/if-newline": "off",
    "eqeqeq": "off",
    "prefer-const": "off",
    "no-console": "off",
    "vue/valid-template-root": "off",

    "vue/singleline-html-element-content-newline": "off",
    "vue/no-unused-vars": [
      "error",
      {
        ignorePattern: "^_",
      },
    ],
    "antfu/top-level-function": "off",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "always",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    "vue/html-indent": [
      "error",
      "tab",
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: false,
        ignores: [],
      },
    ],
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 4,
        multiline: 4,
      },
    ],
    "vue/first-attribute-linebreak": [
      "error",
      {
        singleline: "beside",
        multiline: "below",
      },
    ],
    "no-tabs": "off",
    "@typescript-eslint/indent": ["error", "tab"],
    "arrow-parens": ["error", "as-needed"],
    "@typescript-eslint/comma-dangle": "off",
    "no-mixed-operators": "off",

    // 若导入的模块变量未使用，自动移除
		"unused-imports/no-unused-imports": "error"
		
  },
};
