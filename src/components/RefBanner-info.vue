<template>
  <div
    data-aos="fade-right"
    data-aos-duration="2500"
    class="info slideInUp"
  >
    <h2 class="info__title">
      {{title}}
    </h2>

    <p class="info__text">
      {{text}}
    </p>
    <Btn class="info__btn">
      try for free
    </Btn>
  </div>
</template>

<script>
import Btn from '@/components/form/RefBtn.vue'

export default {
  name: 'Info' ,
  components: { Btn },
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.info {
  position: relative;
  z-index: 5;

  &__title {
    @extend %h2;
    color: $black-color;
    max-width: 646px;

    @media screen and (max-width: $large) {
      font-size: 36px;
      max-width: 481px;
    }
    @media screen and (max-width: $extra-small) {
      font-size: 32px;
      max-width: 100%;
      text-align: center;
    }
  }

  &__text {
    @extend %h5;
    color: $black-color;
    max-width: 577px;

    margin: 40px 0;

    @media screen and (max-width: $large) {
      font-size: 22px;
      max-width: 425px;
    }
    @media screen and (max-width: $extra-small) {
      font-size: 20px;
      max-width: 100%;
      text-align: center;
    }
  }

  &__btn {
    max-width: 250px;
    text-transform: uppercase;

    @media screen and (max-width: $extra-small) {
      max-width: 100%;
    }
  }
}

.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>