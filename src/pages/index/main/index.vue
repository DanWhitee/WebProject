<template>
  <section class="main">
    <Btn white>
      Click Me
    </Btn>
    <Checkbox>
      Жопа
    </Checkbox>
  </section>
</template>

<script>
import Btn from '@/components/form/RefBtn.vue'
import Checkbox from '@/components/form/RefCheckbox.vue'

export default {
  name: 'Main',
  components: {Btn, Checkbox},
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
