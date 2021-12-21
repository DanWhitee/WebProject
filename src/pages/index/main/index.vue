<template>
  <section class="main">
    <Banner />
    <Advantage />
  </section>
</template>

<script>
import Banner from '@/pages/index/main/components/banner'
import Advantage from '@/pages/index/main/components/advantage.vue'

export default {
  name: 'Main',
  components: { Banner, Advantage }
}
</script>

<style lang="scss" scoped>
</style>
