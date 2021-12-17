<template>
  <button
    type="button"
    class="btn"
    :class="{
      'btn--blue': blue === true,
      'btn--white': white === true
    }"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'RefBtn',
  props: {
    /*
    *  blue style btn
    */
    blue: {
      type: Boolean,
      default: true
    },
    /*
    *  white style btn
    */
    white: {
      type: Boolean,
      default: false
    },
    /*
    *  disabled btn
    */
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  padding: 15px 10px;
  border: 2px solid $blue-color;
  transition: all .3s;
  width: 100%;

  &--blue {
    color: $white-color;
    background: $blue-color;
    border-radius: 5px;
    @extend %btn;

    @media (any-hover: hover) {
      &:hover {
        background: $white-color;
        color: $blue-color;
      }
    }

    &:active {
      background: $blue-active-color;
      color: $white-color;
    }

    &:disabled {
      opacity: 0.4;
      pointer-events: none;
    }
  }

  &--white {
    color: $blue-color;
    background: $white-color;
    border-radius: 5px;
    @extend %btn;

    @media (any-hover: hover) {
      &:hover {
        background: $blue-color;
        color: $white-color;
      }
    }

    &:active {
      background: $white-color;
      color: $blue-active-color;
    }

    &:disabled {
      opacity: 0.4;
      pointer-events: none;
    }
  }
}
</style>
