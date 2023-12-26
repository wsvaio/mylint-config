# @wsvaio/eslint-config

[![Size](https://img.shields.io/bundlephobia/minzip/@wsvaio/eslint-config/latest)](https://www.npmjs.com/package/@wsvaio/eslint-config) [![Version](https://img.shields.io/npm/v/@wsvaio/eslint-config)](https://www.npmjs.com/package/@wsvaio/eslint-config) [![Languages](https://img.shields.io/github/languages/top/wsvaio/mylint-config)](https://www.npmjs.com/package/@wsvaio/eslint-config) [![License](https://img.shields.io/npm/l/@wsvaio/eslint-config)](https://www.npmjs.com/package/@wsvaio/eslint-config) [![Star](https://img.shields.io/github/stars/wsvaio/mylint-config)](https://github.com/wsvaio/mylint-config) [![Download](https://img.shields.io/npm/dm/@wsvaio/eslint-config)](https://www.npmjs.com/package/@wsvaio/eslint-config)

在[@antfu/eslint-config](https://github.com/antfu/eslint-config)之上，加入了自己的配置

与[@antfu/eslint-config](https://github.com/antfu/eslint-config)不同的是：

- 双引号
- 尾分号
- ……

## 安装

```bash
pnpm i -D eslint @wsvaio/eslint-config
```

## 配置

使用eslint新的配置 [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new)

```javascript
// eslint.config.js
import wsvaio from "@wsvaio/eslint-config";

export default wsvaio();
```

vue相关

```javascript
// eslint.config.js
import wsvaio from "@wsvaio/eslint-config";
import { vue } from "@wsvaio/eslint-config/userConfigs";

export default wsvaio({}, vue);
```

vscode eslint插件支持

在.vscode/settings.json中

```json
{
	"eslint.experimental.useFlatConfig": true,

	"prettier.enable": false,
	"editor.formatOnSave": false,

	"editor.codeActionsOnSave": {
		"source.fixAll": "explicit",
		"source.organizeImports": "never"
	}
}
```

## 参数

参数与[@antfu/eslint-config](https://github.com/antfu/eslint-config)一致

```typescript
import type { Awaitable, FlatConfigItem, OptionsConfig, UserConfigItem } from "@antfu/eslint-config";

export default function wsvaio(
	options?: OptionsConfig & FlatConfigItem,
	...userConfigs: Awaitable<UserConfigItem | UserConfigItem[]>[]
): Promise<UserConfigItem[]>;
```

## 感谢

[@antfu/eslint-config](https://github.com/antfu/eslint-config)
