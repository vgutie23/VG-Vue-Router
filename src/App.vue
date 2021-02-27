<!--Vanessa Gutierrez 02/27/2021-->
<template>
  <div class="py-9 flex flex-col justify-center items-center">
    <nav class="text-gray-900 font-semibold font-serif text-2xl">
      <router-link to="/" class="hover:text-yellow-900 hover:underline"
        >Home</router-link
      >
      |
      <router-link to="/about" class="hover:text-yellow-900 hover:underline"
        >About</router-link
      >
      |
      <router-link to="/menu" class="hover:text-yellow-900 hover:underline"
        >Menu</router-link
      >
      |
      <router-link to="/contact" class="hover:text-yellow-900 hover:underline"
        >Contact</router-link
      >
    </nav>
  </div>
  <div class="flex flex-col justify-center items-center font-serif text-center">
    <header class="flex flex-col w-full container">
      <h1 class="text-7xl text-yellow-900 font-semibold">
        ☕️ Coffee Shop ☕️
      </h1>
    </header>
    <main class="container w-full mt-6">
      <router-view />
    </main>
  </div>
</template>

<script setup></script>
