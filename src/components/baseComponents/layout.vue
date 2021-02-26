<template>
  <div class="app-layout">
    <b-header></b-header>
    <div class="app-container">
      <section class="section">
        <router-view/>
      </section>
    </div>
    <b-footer></b-footer>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import header from './header.vue';
import footer from './footer.vue';

export default defineComponent({
  name: 'b-layout',
  components: {
    BHeader: header,
    BFooter: footer,
  },
  step() {
    return {};
  },
});
</script>
<style scoped lang="scss">
  .app-layout {
    width: 100%;
    .app-container {
      padding: 40px 20px;
      .section {
        width: 1334px;
        margin: 0 auto;
      }
    }
  }
</style>
