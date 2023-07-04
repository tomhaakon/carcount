<template>
  <div class="w-full h-screen p-5 bg-slate-900 text-white">
    <!-- top line -->
    <div>
      <!-- div for light dark -->
      <div class="w-full flex">
        <div class="w-11/12">
          <!-- her skal toggle dark light -->
        </div>
        <div class="w-1/12">DL</div>
      </div>
      <!-- div for logo and title -->
      <div class="flex">
        <!-- title div -->
        <div class="w-10/12 p-4 text-lg font-bold">
          <p>
            CarCount:<span class="text-slate-300"
              >:<span class="text-slate-400">.</span>.:<span
                class="text-slate-400"
                >.</span
              >
              ..:<span class="text-slate-400">.:.</span> ..<span
                class="text-slate-500"
                >.</span
              >. <span class="text-slate-500">.</span></span
            >
          </p>
        </div>
        <!-- logo -->
        <div class="w-2/12 pt-3"></div>
      </div>
    </div>
    <!-- navbar -->
    <div class="mb-5 h-14 rounded-xl bg-slate-800">
      <NavBar class="" />
    </div>
    <!-- Content with footer -->
    <div class="bg-slate-800 rounded-xl p-4">
      <RouterView class="min-h-[100px]"></RouterView>
      <Footer class="rounded-xl" />
    </div>
  </div>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>
<style scoped>
.flipSVG {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
</style>
