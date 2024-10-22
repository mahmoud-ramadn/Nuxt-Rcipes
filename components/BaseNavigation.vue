
<template>
  <header class="py-4 border-b">
    <nav class="flex container items-center    ">
      <RouterLink  to="/" class="flex gap-1 items-center">
        <NuxtImg width='56px' densities="x1" src="/icon-green.png" alt="" />
        <span class="text-3xl font-bold">Nuxtcipes</span>
      </RouterLink>
      <ul class="flex gap-6 ml-auto text-xl     font-bold capitalize">
        <li>
          <NuxtLink to="/" class="  ">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="hidden md:block ">about</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

