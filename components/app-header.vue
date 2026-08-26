<template>
  <header class="header">
    <div class="header__logo">
      <NuxtLink to="/">
        <img src="/logo.png" alt="11b" />
      </NuxtLink>
    </div>

    <div class="header__actions">
      <button type="button" class="btn btn--register" @click="$emit('register')">
        Registrar
      </button>
      <button type="button" class="btn btn--login" @click="$emit('login')"
        Entrar
      </button>
    </div>
  </header>
</template>

<script setup>
defineEmits(['register', 'login'])
</script>