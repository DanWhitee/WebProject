<template>
  <div class="advantage">
    <div class="container">
      <div class="advantage__body">

        <div
          v-for="(item, index) in info"
          :key="index"
          class="advantage__item"
          v-html="item.text"
          @click="asd"
        >
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Advantage',
  data () {
    return {
      info: [
        {
          text: 'Flexible <br> Pricing'
        },
        {
          text: 'RELIABLE <br> PLATFORM'
        },
        {
          text: 'WORLD CLASS <br> SERVICE'
        },
        {
          text: 'Security and <br /> Compliance'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.advantage {
  background: linear-gradient(90deg, rgba(0, 119, 226, 0.63) 15.73%, rgba(204, 0, 255, 0.2772) 100%);
  backdrop-filter: blur(27px);

  &__body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media screen and (max-width: $medium) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: $extra-small) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__item {
    padding: 18px 30px;
    border-left: 1px dashed $blue-color;
    border-right: 1px dashed $blue-color;

    text-align: center;
    text-transform: uppercase;
    @extend %p-rare;
    color: $white-color;

    @media screen and (max-width: $extra-large) {
      font-size: 20px;
      padding: 18px 20px;
    }

    @media screen and (max-width: $medium) {
      border: 1px dashed $blue-color;
    }
  }
}
</style>
