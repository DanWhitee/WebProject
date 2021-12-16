<template>
  <button
    type="button"
    class="btn"
    :class="{
      'btn--blue': blue === true
    }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'RefBtn',
  props: {
    blue: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  padding: 15px 0;
  min-width: 250px;

  &--blue {
    color: #fff;
    background: #477BDF;
    border-radius: 5px;
  }
}
</style>
