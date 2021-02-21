const defaults = { nonTextBehavior: 'remove' };

module.exports = function blocksToText(blocks, opts = {}) {
  const options = { ...defaults, ...opts };
  return blocks
    .map((block) => {
      if (block._type !== 'block' || !block.children) {
        return options.nonTextBehavior === 'remove'
          ? ''
          : `[${block._type} block]`;
      }

      return block.children.map((child) => child.text).join('');
    })
    .join('\n\n');
};
