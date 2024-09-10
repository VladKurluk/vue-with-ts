import type { InjectionKey } from "vue";
import type User from "./types/User";

// export const userInjectionKey: InjectionKey<User> = Symbol();
export const userInjectionKey = Symbol() as InjectionKey<User>
export const tooltipOptionsInjectionKey = Symbol();