<template>
  <div class="list">
    <h5 class="list__title">{{title}}</h5>
    <p class="list__text">{{top}}</p>
    <p class="list__text">{{center}}</p>
    <p class="list__text">{{bottom}}</p>

    <div class="inner">
      <slot />  
    </div>

  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    title: {
      type: String,
      default: ''
    },
    top: {
      type: String,
      default: ''
    },
    center: {
      type: String,
      default: ''
    },
    bottom: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  &__title {
    @extend %btn;
    text-transform: uppercase;
    color: $dark-grey-color;
    margin-bottom: 12px
  }
  &__text {
    @extend %p-small;
    text-transform: uppercase;
    color: $white-color;

    & + & {
      margin-top: 8px;
    }
  }
}
</style>
