export const vue = {
  rules: {
    "vue/eqeqeq": "off",
    "vue/valid-v-slot": "off",
    "vue/valid-v-for": "off",
    "vue/require-v-for-key": "off",
    "vue/no-mutating-props": "off",
    "vue/no-v-text-v-html-on-component": "off",
    "vue/component-name-in-template-casing": [
      "error",
      "kebab-case",
      {
        registeredComponentsOnly: true,
        ignores: [],
      },
    ],

    "vue/valid-template-root": "off",

    "vue/singleline-html-element-content-newline": "off",
    "vue/no-unused-vars": [
      "error",
      {
        ignorePattern: "^_",
      },
    ],

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
      2,
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
    "vue/component-definition-name-casing": "off",
  },
};
