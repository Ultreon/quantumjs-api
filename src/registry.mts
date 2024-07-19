import RegistryKey from "quantumjs/game/registry/RegistryKey.mjs";
import Registries from "quantumjs/game/registry/Registries.mjs";
import Registry from "quantumjs/game/registry/Registry.mjs";

export function getRegistry<T extends Registry<any>>(key: RegistryKey<T>) {
    return Registries.REGISTRY.get(key);
}
