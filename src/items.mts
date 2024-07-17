import Block from "quantumjs/game/block/Block.mjs";
import BlockItem from "quantumjs/game/item/BlockItem.mjs";
import Item$Properties from "quantumjs/game/item/Item$Properties.mjs";
import Supplier from "quantumjs/jutil/function/Supplier.mjs";
import { ModBlocks } from "./blocks.mjs";
import Registries from "quantumjs/game/registry/Registries.mjs";
import { id } from "./index.mjs";

export class ModItems {
    public static EXAMPLE: BlockItem;

    static init() {
        ModItems.EXAMPLE = new BlockItem(new Item$Properties(), new (class extends Supplier {
            get(): Block {
                return ModBlocks.EXAMPLE;
            }
        })())

        Registries.ITEM.register(id("example"), ModItems.EXAMPLE);
    }
}