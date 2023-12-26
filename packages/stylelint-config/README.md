# @wsvaio/stylelint-config

[![Size](https://img.shields.io/bundlephobia/minzip/@wsvaio/stylelint-config/latest)](https://www.npmjs.com/package/@wsvaio/stylelint-config) [![Version](https://img.shields.io/npm/v/@wsvaio/stylelint-config)](https://www.npmjs.com/package/@wsvaio/stylelint-config) [![Languages](https://img.shields.io/github/languages/top/wsvaio/mylint-config)](https://www.npmjs.com/package/@wsvaio/stylelint-config) [![License](https://img.shields.io/npm/l/@wsvaio/stylelint-config)](https://www.npmjs.com/package/@wsvaio/stylelint-config) [![Star](https://img.shields.io/github/stars/wsvaio/mylint-config)](https://github.com/wsvaio/mylint-config) [![Download](https://img.shields.io/npm/dm/@wsvaio/stylelint-config)](https://www.npmjs.com/package/@wsvaio/stylelint-config)

一个stylelint配置

- 兼容less、scss、vue、html
- 属性排序

## 安装

```bash
pnpm i -D stylelint @wsvaio/stylelint-config
```

## 配置

在根目录下新建.stylelintrc.json

```json
{
  "root": true,
  "extends": ["@wsvaio/stylelint-config"],
  "rules": {
    // 可重写一些规则
  }
}
```
