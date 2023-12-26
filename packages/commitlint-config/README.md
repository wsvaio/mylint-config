# @wsvaio/commitlint-config

[![Size](https://img.shields.io/bundlephobia/minzip/@wsvaio/commitlint-config/latest)](https://www.npmjs.com/package/@wsvaio/commitlint-config) [![Version](https://img.shields.io/npm/v/@wsvaio/commitlint-config)](https://www.npmjs.com/package/@wsvaio/commitlint-config) [![Languages](https://img.shields.io/github/languages/top/wsvaio/mylint-config)](https://www.npmjs.com/package/@wsvaio/commitlint-config) [![License](https://img.shields.io/npm/l/@wsvaio/commitlint-config)](https://www.npmjs.com/package/@wsvaio/commitlint-config) [![Star](https://img.shields.io/github/stars/wsvaio/mylint-config)](https://github.com/wsvaio/mylint-config) [![Download](https://img.shields.io/npm/dm/@wsvaio/commitlint-config)](https://www.npmjs.com/package/@wsvaio/commitlint-config)

一个commitlint配置，配合czg可以以命令行形式书写commit信息

## 安装

```bash
pnpm i -D commitlint @wsvaio/commitlint-config czg
```

## 配置

在项目根目录下新建.commitlintrc.json

```json
{
  "root": true,
  "extends": ["@wsvaio"]
}
```

## 使用

提交代码时执行，替代git commit

```bash
$ pnpm dlx czg
# 你将会看到
? 选择你要提交的类型 : Use arrow keys or type to search
❯ feat:       增加新功能
  fix:        修复问题/BUG
  style:      代码风格相关无影响运行结果的
  perf:       优化/性能提升
  refactor:   代码重构
  revert:     撤销修改
  test:       测试相关
```
