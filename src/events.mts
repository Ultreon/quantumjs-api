import Event from "quantumjs/corelibs/events/v1/Event.mjs";
import HashMap from "quantumjs/jutil/HashMap.mjs";
import HashSet from "quantumjs/jutil/HashSet.mjs";
import Map from "quantumjs/jutil/Map.mjs"
import Set from "quantumjs/jutil/Set.mjs"
import Iterator from "quantumjs/jutil/Iterator.mjs"
import PlayerEvents from "quantumjs/game/events/PlayerEvents.mjs";
import BlockEvents from "quantumjs/game/events/BlockEvents.mjs";

class EventObject {
    private listeners: Set<(...args: any[]) => void> = new HashSet();

    emit(...args: any[]): void {
        const iterator: Iterator<(...args: any[]) => void> = this.listeners.iterator();
        while (iterator.hasNext()) {
            const listener: (...args: any[]) => void = iterator.next();
            listener(...args);
        }
    }

    subscribe(listener: (...args: any[]) => void): void {
        this.listeners.add(listener);
    }

    unsubscribe(listener: (...args: any[]) => void): void {
        this.listeners.remove(listener);
    }
}

const EVENTS: Map<string, EventObject> = new HashMap();

export class EventError extends Error {
    constructor(message: string) {
        super(message);
    }
}

export function emit(event: string, ...args: any[]): void {
    const event$: EventObject = EVENTS.get(event);
    if (event$) {
        event$.emit(...args);
    } else {
        throw new EventError(`Event ${event} not found.`);
    }
}

export function on(event: string, listener: (...args: any[]) => void): void {
    const event$: EventObject = EVENTS.get(event);
    if (event$) {
        event$.subscribe(listener);
    } else {
        throw new EventError(`Event ${event} not found.`);
    }
}

export function registerVanilla<T extends Event<any>>(event: T, name: string): T {
    EVENTS.put(name, new EventObject());
    event.listen((...args: any[]) => {
        emit(name, ...args);
    });

    return event;
}

export const onPlayerJoin = registerVanilla(PlayerEvents.PLAYER_JOINED, "player.joined").subscribe
export const onPlayerLeft = registerVanilla(PlayerEvents.PLAYER_LEFT, "player.left").subscribe
export const onPlayerSpawn = registerVanilla(PlayerEvents.PLAYER_SPAWNED, "player.spawned").subscribe

export const onBlockPlaced = registerVanilla(BlockEvents.BLOCK_PLACED, "block.break").subscribe
export const onBlockRemoved = registerVanilla(BlockEvents.BLOCK_REMOVED, "block.place").subscribe
export const onBreakBlock = registerVanilla(BlockEvents.BREAK_BLOCK, "block.break").subscribe
export const onSetBlock = registerVanilla(BlockEvents.SET_BLOCK, "block.set").subscribe
export const onAttemptBlockPlacement = registerVanilla(BlockEvents.ATTEMPT_BLOCK_PLACEMENT, "block.attemptPlace").subscribe
export const onAttemptBlockRemoval = registerVanilla(BlockEvents.ATTEMPT_BLOCK_REMOVAL, "block.attemptRemove").subscribe
