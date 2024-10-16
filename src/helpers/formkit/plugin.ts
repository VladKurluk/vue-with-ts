import type { FormKitNode } from "@formkit/core";

export const castRangeToNumber = (node: FormKitNode): void => {
  // We add a check to add the cast only to range inputs
  if (node.props.type !== 'range') return;

  node.hook.input((value: string, next: (value: number) => void) => next(Number(value)));
}
  
export const updateAttributesPlugin = (node: FormKitNode) => {
  const CHARACTER_BASE_STATS: Record<string, any> = {
    Warrior: {
      strength: 9,
      skill: 1,
    },
    Mage: {
      strength: 5,
      skill: 10,
    },
    Assassin: {
      strength: 5,
      skill: 4,
    },
  };

  node.on('commit', ({ payload }: { payload: string }) => {
    // Get the sibling attributes using at()
    const attributeNode = node.at('attributes');
    if (attributeNode && CHARACTER_BASE_STATS[payload])
      attributeNode.input(CHARACTER_BASE_STATS[payload])
  })
}