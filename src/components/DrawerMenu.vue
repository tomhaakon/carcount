<template>
  <!-- drawer -->
  <div class="drawer">
    <input
      id="showDrawer"
      type="checkbox"
      class="drawer-toggle"
      :checked="showDrawer"
    />
    <div class="drawer-content"></div>
    <div class="drawer-side">
      <label class="drawer-overlay"></label>

      <ul class="menu p-4 w-80 h-full bg-base-200">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
        <li>
          <label for="showDrawer" @click="$emit.closeDrawer">Close</label>
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
</script>
