import E from 'wangeditor';

const { BtnMenu } = E;
export default class AlertMenu extends BtnMenu {
  constructor(editor) {
    const $elem = E.$(
      `<div class="w-e-menu" data-title="Alert">
          alert
        </div>`,
    );
    super($elem, editor);
  }

  clickHandler() {
    console.log('this', this);
    alert('hello world');
  }

  tryChangeActive() {
    this.active();
  }
}
