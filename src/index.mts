import Identifier from "quantumjs/game/util/Identifier.mjs";
import Logger from "quantumjs/game/log/Logger.mjs";
import LoggerFactory from "quantumjs/game/log/LoggerFactory.mjs";

import PlayerEvents from "quantumjs/game/events/PlayerEvents.mjs";
import BlockEvents from "quantumjs/game/events/BlockEvents.mjs";

import {registerVanilla} from "./events.mjs";
import Block from "quantumjs/game/block/Block.mjs";

export const MOD_ID = "modid";

const logger: Logger = LoggerFactory.getLogger(MOD_ID);

export function id(path: string): Identifier {
    return new Identifier(MOD_ID, path);
}

export default function (): void {
    logger.info("QuantumJS API loaded");
}

