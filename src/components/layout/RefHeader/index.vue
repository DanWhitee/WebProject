<template>
  <header
    data-aos="fade-down"
    class="header"
  >
    <div class="container">

      <div class="header__body">
        <img class="header__logo" src="@/assets/images/landing-page/header/header-logo.svg" alt="#">
        <Nav class="header__nav" />

        <div class="header__list-btn">
          <Btn class="header__btn" transparent>
            SIGN IN
          </Btn>
          <BgMenu
            @click="$emit('open')"
            class="header__menu"
          />
        </div>
      </div>

    </div>
  </header>
</template>

<script>
import Nav from '@/components/layout/RefNav.vue'
import BgMenu from '@/components/layout/RefHeader/components/bg-menu.vue'
import Btn from '@/components/form/RefBtn.vue'

export default {
  name: 'Header',
  components: {Nav, Btn, BgMenu}
}
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: transparent;

  &__body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 100px;
  }

  &__logo{
    padding-bottom: 20px;
  }

  &__nav {
    @media screen and (max-width: $medium) {
      display: none;
    }
  }

  &__list-btn {
    display: flex;
    align-items: center;
  }

  &__menu {
    @media screen and (min-width: $medium) {
      display: none;
    }
  }

  &__btn {
    min-width: 250px;
    @media screen and (max-width: $small) {
      display: none;
    }
  }
}
</style>
