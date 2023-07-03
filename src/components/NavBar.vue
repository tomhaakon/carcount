<template>
  <nav>
    <!-- først en div som inneholder de andre divene -->
    <!-- mobil meny -->
    <div class="flex">
      <!-- div for venstre meny knapp -->
      <div class="w-2/12 p-4 fill-slate-500" @click="toggleDrawer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26 26"
          width="26px"
          height="26px"
        >
          <path
            d="M 0 4 L 0 6 L 26 6 L 26 4 Z M 0 12 L 0 14 L 26 14 L 26 12 Z M 0 20 L 0 22 L 26 22 L 26 20 Z"
          />
        </svg>
      </div>
      <div>
        <DrawerMenu :showDrawer="showDrawer" @close-drawer="closeDrawer" />
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref } from "vue";
import DrawerMenu from "./DrawerMenu.vue";

//refs
const showDrawer = ref(false);

//functions
const toggleDrawer = () => {
  showDrawer.value = !showDrawer.value;
};
const closeDrawer = () => {
  showDrawer.value = !showDrawer.value;
};
</script>
