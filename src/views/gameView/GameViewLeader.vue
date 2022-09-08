<script setup lang="ts">
import { useDataStore } from "../../stores/gameData";

let dataInfoStore = useDataStore();
console.log(dataInfoStore.gameData);
</script>

<template>
  <div class="container">
    <div
      class="row"
      v-for="(item, index) in dataInfoStore.gameData"
      :key="index"
    >
      <div
        class="col"
        :class="subItem.role"
        v-for="subItem in item"
        :key="subItem.name"
      >
        {{ subItem.name }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  .row {
    width: 100%;
    display: flex;
    height: 18vh;
    .col {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px black solid;
      font-size: 20px;
      font-weight: bold;
    }
  }
}

.red {
  background: red;
  color: white;
}

.blue {
  background: blue;
  color: white;
}

.black {
  background: black;
  color: white;
}
</style>
