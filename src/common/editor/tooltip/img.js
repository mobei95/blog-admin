import E from 'wangeditor';

const { $, Tooltip } = E;
function createShowHideFn(editor) {
  let tooltip = Tooltip || null;

  function showLinkTooltip($link) {
    const config = [
      {
        $elem: $(`<span>
          翻转
        </span>`),
        onClick: () => {
          console.log('反转Click', $link);
          return true;
        },
      },
    ];

    tooltip = new Tooltip(editor, $link, config);
    tooltip.create();
  }

  function hideLinkTooltip() {
    if (tooltip) {
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
