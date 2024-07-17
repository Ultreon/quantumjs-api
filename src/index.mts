import Identifier from "quantumjs/game/util/Identifier.mjs";
import Logger from "quantumjs/game/log/Logger.mjs";
import LoggerFactory from "quantumjs/game/log/LoggerFactory.mjs";
import { ModItems } from "./items.mjs";
import { ModBlocks } from "./blocks.mjs";

export const MOD_ID = "modid";

const logger: Logger = LoggerFactory.getLogger(MOD_ID);

export function id(path: string): Identifier {
    return new Identifier(MOD_ID, path);
}

export default function (): void {
    ModItems.init();
    ModBlocks.init();
}

