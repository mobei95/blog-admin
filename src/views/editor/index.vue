<template>
  <div class="editor-page">
    <editor></editor>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import editor from './components/editor.vue';

export default defineComponent({
  name: 'editor-page',
  components: {
    editor,
  },
});
</script>
<style scoped lang="scss">
  .editor-page {}
</style>
