<template>
  <div class="networks">
    <img class="networks__img"  src="@/assets/images/landing-page/social-networks/GitHub.svg" alt="GitHub">
    <img class="networks__img" src="@/assets/images/landing-page/social-networks/in.svg" alt="In">
    <img class="networks__img" src="@/assets/images/landing-page/social-networks/twitter.svg" alt="Twitter">
    <img class="networks__img" src="@/assets/images/landing-page/social-networks/instagram.svg" alt="Instagram">
  </div>
</template>

<script>
export default {
  name: 'Networks'
}
</script>

<style lang="scss" scoped>
.networks {
  &__img {
    cursor: pointer;
    transition: transform .3s;

    @media (any-hover: hover) {
      &:hover {
        transform: scale(1.1)
      }
    }

    &:active {
      transform: scale(1.1)
    }
  }

  &__img + &__img {
    margin-left: 18px;
  }
}
</style>
