<template>
  <div class="container">
    <div class="btn" @click="refreshData()">初始化棋盘</div>
    <RouterLink @click="isInit()" class="btn" to="/leader">队长入口</RouterLink>
    <RouterLink @click="isInit()" class="btn" to="/player">队员入口</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useDataStore } from "../stores/gameData";
const gameData = useDataStore();
function refreshData() {
  gameData.init();
  alert("初始化棋盘完成，请队长和队员就位");
}
function isInit() {
  if (!gameData.initFlag) {
    alert("将自动为您初始化棋盘");
    gameData.init();
  }
}
</script>

<style scoped lang="scss">
.container {
  height: 100vh;
  width: 80%;
  margin: auto;
  .btn {
    &:hover {
      background: yellow;
      color: black;
    }
    cursor: pointer;
    width: 200px;
    height: 80px;
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    color: white;
  }
}
</style>
