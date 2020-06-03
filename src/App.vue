<template>
    <div>
      <AppHeader />
      <div class="container">
        <router-view />
      </div>
    </div>
</template>

<script>
import AppHeader from './components/AppHeader';

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>
.container{
  padding-left: 5%;
  padding-right: 5%;
}
</style>
