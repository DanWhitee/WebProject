<template>
  <div class="accordion__item main">
    <div class="header" @click="toggleClicked">
      <div class="title main">
        {{ title }}
      </div>

      <div class="header__wrapepr">
        <slot name="header-input"></slot>
        <img class="arrow" :class="{up: isOpen}" src="@/assets/images/landing-page/header/arrow.svg" alt="">
      </div>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-enter="beforeEnter"
      @before-leave="start"
      @after-leave="end"
    >
      <div v-show="isOpen" class="accordion__content">
        <div class="accordion__content__inner">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AccordionDetails',
  props: {
    /**
     * Открыть или скрыть аккордион
     */
    value: {
      type: Boolean,
      default: false
    },
    /**
     * Заголовок
     */
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isOpen: this.value
    }
  },
  methods: {
    beforeEnter (el) {
      el.style.height = '0'
    },
    start (el) {
      el.style.height = `${el.scrollHeight}px`
    },
    end (el) {
      el.style.height = ''
    },
    toggleClicked () {
      this.isOpen = !this.isOpen
      this.$emit('input', this.isOpen)
    }
  },
  watch: {
    value (value) {
      this.isOpen = value
    }
  }
}
</script>

<style lang="scss" scoped>
  .accordion__item {
    border-radius: 10px;
    background-color: #fff;
  }

  .accordion__item.inner + .accordion__item.inner {
    margin-top: 14px;
  }

  .accordion__item.main + .accordion__item.main {
    border-top: 0;
  }

  .header {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    padding: 24px;
    border-radius: 10px;
    background-color: #fff;
  }

  .header__wrapepr {
    display: flex;
    align-items: center;
  }

  .title {
    flex: 1;
    color: #000;
    line-height: 112%;
  }

  .title.inner {
    font-size: 10px;
    line-height: 139.9%;
    text-transform: uppercase;
  }

  .arrow {
    flex: 0;
  }

  .arrow.up {
    transform: rotate(180deg) translateY(-1px);
  }

  .accordion__content__inner {
    padding: 24px;
    background-color: #fff;
    border-top: 1px solid #ebebeb;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .accordion-enter-active,
  .accordion-leave-active {
    will-change: height;
    transition: height 0.6s cubic-bezier(0.25, 0.8, 0.5, 1);
    overflow: hidden;
  }

  .accordion-enter,
  .accordion-leave-to {
    height: 0 !important;
  }

  @media all and (max-width: 720px) {
    .accordion__content__inner {
      padding: 24px 14px;
    }
  }
</style>
