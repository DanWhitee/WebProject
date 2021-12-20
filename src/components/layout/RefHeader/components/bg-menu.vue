<template>
  <div class="btn__burger burger">
    <span class="burger__line line-1" />
    <span class="burger__line line-2" />
    <span class="burger__line line-3" />
  </div>
</template>

<script>
export default {
  name: 'Bg-Menu',
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.burger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 45px;
  height: 20px;
  margin-left: 20px;

  cursor: pointer;

  &__line {
    height: 4px;
    background:  $blue-color;
    border-radius: 10px;
    transition: all .5s;
  }
}
</style>
