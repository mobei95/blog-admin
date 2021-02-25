<template>
  <nav class="nav-bar">
    <div class="nav-container">
      <div class="nav-broad">
        <img class="nav-broad-logo" src="https://blog.zhangruipeng.me/hexo-theme-icarus/img/logo.svg" alt="logo" />
      </div>
      <div class="nav-menu">
        <ul class="menu-left">
          <li class="nav-item">Article</li>
          <li class="nav-item">Column</li>
        </ul>
        <ul class="menu-right">
          <li class="nav-item">
            <i class="iconfont icon-github"></i>
          </li>
          <li class="nav-item">
            <i class="iconfont icon-search"></i>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'b-header',
});
</script>
<style scoped lang="scss">
  .nav-bar {
    width: 100%;
    height: 60px;
    background: #fff;
    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 1334px;
      height: 100%;
      margin: 0 auto;
      .nav-broad {
        display: flex;
        align-items: center;
        .nav-broad-logo {
          width: 90px;
        }
      }
      .nav-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-grow: 1;
        flex-shrink: 0;
        margin-left: 10px;
        color: #4a4a4a;
        .menu-left, .menu-right {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .nav-item {
            padding: 0 10px;
            letter-spacing: 1px;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
