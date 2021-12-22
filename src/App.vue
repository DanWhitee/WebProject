<template>
  <section id="app" class="app">
    <Header
      @open="activeSidebar = true"
    />
    <Sidebar
      @hide="activeSidebar = false"
      :active="activeSidebar"
    />
    <router-view/>
    <Footer/>
  </section>
</template>

<script>
import Header from '@/components/layout/RefHeader'
import Sidebar from '@/components/layout/RefSidebar'
import Footer from '@/components/layout/RefFooter'

import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'App',
  components: { Header, Sidebar, Footer},
  data () {
    return {
      activeSidebar: false
    }
  },
  created () {
    AOS.init()
  }
}
</script>

<style lang="scss" scoped />
