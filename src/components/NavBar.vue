<template>
  <nav>
    <!-- først en div som inneholder de andre divene -->
    <!-- mobil meny -->
    <div class="flex">
      <!-- div for venstre meny knapp -->
      <div class="w-2/12 p-4 fill-slate-500">
        <label for="my-drawer">
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
        </label>
      </div>

      <div class="w-2/12 p-4">DL</div>
    </div>
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
          <li><label for="my-drawer">Close</label></li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script></script>
