<template>
  <!-- drawer -->
  <div class="drawer">
    <input
      id="showDrawer"
      type="checkbox"
      class="drawer-toggle"
      :checked="showDrawer"
    />

    <div class="drawer-side z-10">
      <label class="drawer-overlay"></label>

      <ul class="p-4 w-80 h-full bg-slate-900">
        <!-- Sidebar content here -->
        <router-link to="/"
          ><li class="h-10 mb-2 bg-slate-800 text-xl pt-1 pl-5 tracking-widest">
            Home
          </li></router-link
        >
        <li class="h-10 mb-2 bg-slate-800 text-xl pt-1 pl-5 tracking-widest">
          <router-link to="/Product">Products</router-link>
        </li>
        <li class="h-10 mb-2 bg-slate-800 text-xl pt-1 pl-5 tracking-widest">
          My Page
        </li>

        <li class="h-10 text-xl pt-1 pl-5 tracking-widest">
          <label for="showDrawer" @click="$emit.closeDrawer">Close</label>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
const props = defineProps({
  showDrawer: {
    type: Boolean,
    default: false,
  },
});
</script>
