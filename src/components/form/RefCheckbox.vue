<template>
  <label class="label">
    <input
      class="label__input"
      type="checkbox"
      @input="$emit('input', $event.target.checked)"
      :disabled="disabled"
    >
    <span class="label__fake" />
    <p class="label__text">
      <slot/>
    </p>
  </label>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    /*
    *  disabled checkbox
    */
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.label {
  display: flex;
  align-items: center;
  cursor: pointer;

  &__fake {
    width: 24px;
    height: 24px;

    border: 1px solid $grey-color;
    border-radius: 5px;
    cursor: pointer;

    position: relative;

    &::after {
      content: "";

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      background: url('../../assets/images/landing-page/static/like.svg') no-repeat center, $blue-color;

      opacity: 0;

      width: 100%;
      height: 100%;

      transition: opacity .3s;
    }
  }

  &__input {
    display: none;

    &:checked + .label__fake::after {
      opacity: 1;
    }
  }

  &__text {
    color: $grey-color;
    @extend %p-small;
  }
}
</style>
