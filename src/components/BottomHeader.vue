<template>
  <div class="header">
    <div class="container">
      <div class="header-inner">
        <router-link
          class="link"
          active-class="active-link"
          v-for="link in menu"
          :to="link.to"
          :key="link.title"
          >{{ link.title }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useMenuStore } from "../store/menu.js";
const menuStore = useMenuStore();
const menu = ref(menuStore.menu);
</script>

<style lang="scss" scoped>
.header-inner {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 15px;
}

.link {
  font-size: 14px;
  font-style: normal;
  color: #7c8792;
  font-weight: 400;
}

.active-link {
  color: black;
  position: relative;
  display: inline-block;
}
.active-link:after {
  content: "";
  position: absolute;
  background: rgb(0, 0, 0);
  left: 0;
  bottom: -12px;
  width: 100%;
  height: 2px;
}

</style>
