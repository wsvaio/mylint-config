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
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "any",
          component: "any",
        },
        svg: "always",
        math: "always",
      },
    ],
    "antfu/if-newline": "off",
    eqeqeq: "off",
    "prefer-const": "off",
    "no-console": "off",
  },
};
