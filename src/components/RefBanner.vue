<template>
  <div class="banner">
    <div class="container">
      <div class="banner__body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  overflow: hidden;

  &::after {
    content: "";

    position: absolute;
    top: 0;
    right: 0;

    width: 40%;
    height: calc(740 / 900) * 100%;

    border-radius: 0% 100% 0% 100% / 0% 0% 100% 100% ;
    background-color: $light-blue-color;

    @media screen and (max-width: $medium) {
      width: 60%;
      height: calc(740 / 1200) * 100%;
    }

    @media screen and (max-width: $extra-small) {
      width: 40%;
      height: calc(340 / 2000) * 100%;
    }
  }

  &__body {
    padding: 160px 0;
    @media screen and (max-width: $extra-small) {
      padding-bottom: 0;
    }
  }
}
</style>
