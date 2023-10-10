<template>
  <div>
    <TopHeader @toggleHeader="unfoldMenu"></TopHeader>
    <BottomHeader class="bottom-header"></BottomHeader>
    <BottomHeaderMobile
      v-show="isOpen"
      class="bottom-header-mobile"
    ></BottomHeaderMobile>
    <div v-show="isOpen" class="location">
      <img src="../assets/SearchCopy.svg" alt="" />
      <h6>Москва и область</h6>
    </div>
  </div>
</template>

<script setup>
import TopHeader from "./TopHeader.vue";
import BottomHeader from "./BottomHeader.vue";
import BottomHeaderMobile from "./BottomHeaderMobile.vue";
import { ref } from "vue";
let isOpen = ref(false);

function unfoldMenu() {
  isOpen.value = !isOpen.value;
}
</script>

<style lang="scss" scoped>
.bottom-header-mobile {
  display: none;
}

.location {
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #959597;
  font-style: normal;
  font-weight: 400;
  padding: 17px 0;
  background-color: #F3F5F6;
}
@media (max-width: 675px) {
  .bottom-header-mobile {
    display: flex;
    padding-bottom: 50px;
  }
  .bottom-header {
    display: none;
  }
}
@media (min-width: 675px) {
  .location{
    display: none;
  }
}
</style>
