// eslint.config.js
import antfu from "@antfu/eslint-config";

export default (...overwrites) => antfu({
  rules: {
    // 双引号
    "style/quotes": ["error", "double"],
    // 尾分号
    "style/semi": ["error", "always"],
    "style/member-delimiter-style": [
      "error",
      {
        multiline: { delimiter: "semi", requireLast: true },
        singleline: { delimiter: "semi", requireLast: false },
        multilineDetection: "brackets",
      },
    ],
    "style/no-tabs": "off",
    "style/comma-dangle": "off",
    "style/arrow-parens": ["error", "as-needed"],
    "style/no-mixed-operators": "off",
    // "antfu/if-newline": "off",
    "eqeqeq": "off",
    // "prefer-const": "off",
    "no-console": "off",
    // "antfu/top-level-function": "off",
    // 若导入的模块变量未使用，自动移除
    "unused-imports/no-unused-imports": "error",

    // 禁止 {}
    "ts/ban-types": "off"
  },
}, ...overwrites);
