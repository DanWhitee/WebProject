<template>
  <section class="main">
    <Btn white>
      Click Me
    </Btn>
    <Checkbox>
      Жопа
    </Checkbox>
    <Accordion title="send">
      Loremmmmmmmmmmmm
    </Accordion>
  </section>
</template>

<script>
import Btn from '@/components/form/RefBtn.vue'
import Checkbox from '@/components/form/RefCheckbox.vue'
import Accordion from '@/components/RefAccordion.vue'

export default {
  name: 'Main',
  components: {Btn, Checkbox, Accordion},
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
