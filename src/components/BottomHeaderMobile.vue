<template>
  <div class="header">
    <router-link
      class="link"
      v-for="link in menu"
      :to="link.to"
      :key="link.title"
      >{{ link.title }}</router-link
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useMenuStore } from "../store/menu.js";
const menuStore = useMenuStore();
const menu = ref(menuStore.menu);
</script>

<style lang="scss" scoped>
.header {
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.link {
  position: relative;
  padding-top: 15px;
  color: #959597;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
}
.link::after {
  content: "";
  position: absolute;
  background: #ededed;
  left: 0;
  bottom: -8px;
  width: 100%;
  height: 1px;
}


</style>
