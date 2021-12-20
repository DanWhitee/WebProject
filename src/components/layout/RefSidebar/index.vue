<template>
  <transition name="fade">
    <section v-show="active" class="sidebar">
      <div class="sidebar__body">
        <div class="sidebar__wrapper">
          <img
            class="sidebar__close"
            src="@/assets/images/landing-page/header/close.svg"
            alt="#"
            @click="$emit('hide')"
          >
        </div>
        <Btn class="sidebar__btn" transparent>
          SIGN IN
        </Btn>
        <Nav :desktop="false" />
      </div>
    </section>
  </transition>
</template>

<script>
import Nav from '@/components/layout/RefNav.vue'
import Btn from '@/components/form/RefBtn.vue'

export default {
  name: 'Sidebar',
  components: {Nav, Btn},
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  z-index: 50;
  top: 0;
  right: 0;

  padding: 20px;

  min-width: 290px;
  height: 100%;
  background-color: #fff;

  &__body {
    display: flex;
    flex-direction: column;

    overflow: auto;
    min-height: 100%;
  }

  &__wrapper {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-bottom: 20px;
  }

  &__btn{
    display: none;
    @media screen and (max-width: $small) {
      display: block;
      margin-bottom: 20px;
    }
  }

  &__close {
    cursor: pointer;
  }
}

//Анимация пояаления Sidebar 
.fade-enter-active,
.fade-leave-active {
  transition: all .4s ease;
}
.fade-enter-from {
  transform: translate(200px);
  opacity: 0;
}
.fade-leave-to {
  transform: translate(200px);
  opacity: 0;
}

</style>
