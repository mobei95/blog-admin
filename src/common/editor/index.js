import E from 'wangeditor';
import config from './config';
import menus from './menus';
import tooltips from './tooltip';

class Editor {
  constructor({ toolbarSelector }) {
    this.editor = new E(toolbarSelector);
    this.init();
  }

  init() {
    this.config();
    this.registerMenu();
    tooltips(this.editor);
    this.created();
  }

  config() {
    Object.keys(config).forEach((current) => {
      this.editor.config[current] = config[current];
    });
  }

  registerMenu() {
    Object.keys(menus).forEach((menu) => {
      this.editor.menus.extend(menu, menus[menu]);
      this.editor.config.menus = this.editor.config.menus.concat(menu);
    });
  }

  created() {
    this.editor.create();
  }

  destroy() {
    this.editor.destroy();
  }
}

export default Editor;
