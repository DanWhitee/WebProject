<template>
  <nav :class="desktop ? 'nav' : 'nav mobile'">
    <router-link :to="{name: 'home'}" class="rout nav__link">Ray</router-link>
    <router-link :to="{name: 'home'}" class="rout nav__link">Databases</router-link>
    <Accordion class="nav__accordion" :title="'DOCUMENTATION'" :desktop="desktop">
      <div class="nav__accordion-wrapper">
        <router-link :to="{name: 'home'}" class="rout nav__accordion-text">Ray: Get Started</router-link>
        <router-link :to="{name: 'home'}" class="rout nav__accordion-text">Databases: Get Started</router-link>
      </div>
    </Accordion>
  </nav>
</template>

<script>
import Accordion from '@/components/RefAccordion.vue'

export default {
  name: 'Nav',
  components: {Accordion},
  props: {
    desktop: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex: 0 0 calc(574 / 1300) * 100%;

  &__accordion {
    &-wrapper {
      display: flex;
      flex-direction: column
    }
    &-text {
      font-size: 16px;
      color: $black-color;
    }
  }
  &__link {
    @extend %p-big;
    color: $black-color;
  }
}

.nav.mobile {
  display: flex;
  flex-direction: column;
}  

.rout {
  transition: color .3s;

  @media (any-hover: hover) {
  &:hover {
    color: $blue-color;
    font-weight: 500;
  }

  &:active {
    color: $blue-color;
    font-weight: 500;
  }
}
}

.rout.active {
  cursor: pointer;
  color: $blue-color;
  font-weight: 500;
}
</style>
