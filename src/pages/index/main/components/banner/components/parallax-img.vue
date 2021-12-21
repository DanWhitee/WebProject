<template>
  <div ref="bannerImages" class="banner-img" data-relative-input="true" data-clip-relative-input="true">
    <div class="bg-1"/>
    <div class="bg-2" data-depth="0.2"/>
  </div>
</template>

<script>
import Parallax from 'parallax-js'

export default {
  name: 'Parallax-img',
  mounted () {
    if (Parallax && typeof Parallax === 'function') {
      new Parallax(this.$refs.bannerImages)
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;

  width: 957px;
  height: 100%;

  @media screen and (max-width: $extra-large-max) {
    right: -20%;
  }
  @media screen and (max-width: $large) {
    right: -50%;
  }
  @media screen and (max-width: $medium) {
    right: -70%;
  }
  @media screen and (max-width: $small) {
    right: -130%;
  }
  @media screen and (max-width: $extra-small) {
    display: none;
  }
}

.bg-1 {
  width: 100%;
  height: 100%;
  background: url('../../../../../../assets/images/landing-page/main/men.svg') no-repeat center bottom;
}

.bg-2 {
  width: 100%;
  height: 100%;
  background: url('../../../../../../assets/images/landing-page/main/technologies.svg') no-repeat center bottom;
}
</style>
