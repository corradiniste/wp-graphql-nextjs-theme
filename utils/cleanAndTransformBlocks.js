import { v4 as uuid } from "uuid";

export const cleanAndTransformBlocks = (blocksJSON) => {
    const blocks = JSON.parse(blocksJSON);

    const assignID = (b) => {
        b.forEach((block) => {
            block.id = uuid();
            if (block.innerBlocks?.leght) {
                assignID(block.innerBlocks);
            }
        });
    };

    assignID(blocks);

    return blocks;
};