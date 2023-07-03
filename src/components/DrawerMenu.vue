<template>
  <!-- drawer -->
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content"></div>
    <div class="drawer-side">
      <label class="drawer-overlay"></label>

      <ul class="menu p-4 w-80 h-full bg-base-200">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
        <li>
          <label for="my-drawer" @click="closeDrawer()">Close</label>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  showDrawer: {
    type: Boolean,
    default: false,
  },
});
const closeDrawer = () => {
  props.showDrawer = false;
};
</script>
