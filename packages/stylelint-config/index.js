const generate = require("./generate");
const options = generate();

module.exports = {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-order"],
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts"],
  customSyntax: "postcss-html",
  overrides: [
    {
      files: ["*.vue", "**/*.vue", "*.html", "**/*.html"],
    },
    {
      files: ["*.less", "**/*.less"],
      customSyntax: "postcss-less",
    },
    {
      files: ["*.scss", "**/*.scss"],
      customSyntax: "postcss-scss",
    },
  ],
  rules: {
    "order/order": [
      "custom-properties",
      "dollar-variables",
      "at-variables",
      "declarations",
      "rules",
      "at-rules",
      "less-mixins",
    ],
    "order/properties-order": [options],
    "selector-class-pattern": "^[a-z_-\\d]+$",
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["/^deep/"],
      },
    ],
    "function-no-unknown": [
      true,
      {
        ignoreFunctions: ["/^v-/"],
      },
    ],
    "value-keyword-case": [
      "lower",
      {
        ignoreFunctions: ["/^v-/"],
      },
    ],
    "no-empty-source": null,
  },
};
