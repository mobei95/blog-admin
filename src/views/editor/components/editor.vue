<template>
  <div id="editor" class="editor-com"></div>
</template>
<script>
import { defineComponent, onMounted, onBeforeUnmount } from 'vue';
import Editor from '../../../common/editor/index';

export default defineComponent({
  name: 'editor-com',
  setup() {
    let editorInstance;
    onMounted(() => {
      editorInstance = new Editor({
        toolbarSelector: '#editor',
      });
      console.log('editor ', editorInstance);
    });

    onBeforeUnmount(() => {
      editorInstance.destroy();
      editorInstance = null;
    });

    return {};
  },
});
</script>
<style scoped lang="scss">
  .editor-com {}
</style>
