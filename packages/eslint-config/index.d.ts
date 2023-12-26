import type { Awaitable, FlatConfigItem, OptionsConfig, UserConfigItem, } from "@antfu/eslint-config";

export default function wsvaio(options?: OptionsConfig & FlatConfigItem, ...userConfigs: Awaitable<UserConfigItem | UserConfigItem[]>[]): Promise<UserConfigItem[]>;
