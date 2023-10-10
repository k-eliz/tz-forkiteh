<template>
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <img src="../assets/Logo.png" alt="tele2" class="img" />
        <div class="info">
          <div class="location">
            <img src="../assets/SearchCopy.svg" alt="" />
            <h6>Москва и область</h6>
          </div>
          <div
            :class="{ 'icon-wrapper': !isClick, 'stop-wrapper': isClick }"
            @click="isClicked"
            data-number="1"
          >
            <img
              src="../assets//Notification-Bell.svg"
              alt=""
              :class="{ 'bell-icon': !isClick, 'stop-bell': isClick }"
            />
          </div>
          <img @click="unfold" src="../assets/navbar.svg" alt="menu" class="burger-menu">
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(['toggleHeader']);
let isClick = ref(false);
function isClicked() {
  isClick.value = true;
}
function unfold(){
  emit('toggleHeader');
}
</script>

<style lang="scss" scoped>
.header {
  background: #1F2229;
  padding: 10px;
}

.icon-wrapper {
  width: 30px;
  height: 30px;
  position: relative;
  cursor: pointer;
}
.icon-wrapper::after {
  content: attr(data-number);
  width: 8px;
  height: 8px;
  background-color: aqua;
  color: aqua;
  font-size: 1px;
  display: grid;
  place-content: center;
  border-radius: 50%;
  position: absolute;
  top: 6px;
  right: 8px;
  opacity: 1;
  transform: translateY(0px);
}

.bell-icon {
  width: 30px;
  height: 30px;
}

.icon-wrapper .bell-icon {
  animation: shake 1s infinite;
}

@keyframes shake {
  10% {
    transform: rotate(15deg);
  }
  20% {
    transform: rotate(-15deg);
  }
  30% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(0deg);
  }
}

.stop-bell {
  width: 30px;
  height: 30px;
}

.stop-wrapper .stop-bell {
  animation: none;
}

.header-inner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
}

.info {
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
}

.location {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: #7c8792;
}

.burger-menu{
  display: none;
}
@media (max-width: 675px) {
    .burger-menu{
      display: block;
    }
    .location{
      display: none;
    }

    .info{
      gap: 18px;
    }
  }
</style>
