<template>
  <div id="editor" class="editor-com"></div>
</template>
<script>
import { defineComponent, onMounted } from 'vue';
import E from 'wangeditor';

export default defineComponent({
  name: 'editor-com',
  setup() {
    onMounted(() => {
      const editor = new E('#editor');
      console.log('editor ', editor);
      editor.create();
    });

    return {};
  },
});
</script>
<style scoped lang="scss">
  .editor-com {}
</style>
