import E from 'wangeditor';

const { $, Tooltip } = E;
function createShowHideFn(editor) {
  let tooltip = Tooltip || null;

  function showLinkTooltip($node) {
    console.log('$node', $node);
    const tooltipDom = document.querySelectorAll('.w-e-tooltip');
    console.log('tooltipDom', tooltipDom);
    const config = [
      {
        $elem: $('<span>翻转</span>'),
        onClick: () => {
          console.log('反转Click', $node);
          return true;
        },
      },
      {
        $elem: $('<span>旋转</span>'),
        onClick: () => {
          const rotate = $node.selector.style.transform;
          const dom = $node.selector;
          dom.style.transform = 'rotate(90deg)';
          console.log('rotate', rotate);
          return true;
        },
      },
    ];

    tooltip = new Tooltip(editor, $node, config);
    tooltip.create();
  }

  function hideLinkTooltip() {
    console.log('tooltip', tooltip);
    if (tooltip && tooltip.remove) {
      tooltip.remove();
      tooltip = null;
    }
  }

  return {
    showLinkTooltip,
    hideLinkTooltip,
  };
}

export default (editor) => {
  const { showLinkTooltip, hideLinkTooltip } = createShowHideFn(editor);

  editor.txt.eventHooks.imgClickEvents.push(showLinkTooltip);
  // 点击其他地方，或者滚动时，隐藏 tooltip
  editor.txt.eventHooks.clickEvents.push(hideLinkTooltip);
  editor.txt.eventHooks.keyupEvents.push(hideLinkTooltip);
  editor.txt.eventHooks.toolbarClickEvents.push(hideLinkTooltip);
  editor.txt.eventHooks.menuClickEvents.push(hideLinkTooltip);
  editor.txt.eventHooks.textScrollEvents.push(hideLinkTooltip);
};
