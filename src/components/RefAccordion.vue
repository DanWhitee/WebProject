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
      <div
        v-show="isOpen"
        :class="desktop ? 'accordion__content desktop' : 'accordion__content'"
      >
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
    },
    /**
     * Тип устройства
     */
    desktop: {
      type: Boolean,
      default: false
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
.main {
  position: relative;
}

// Desktop версия аккордеон
.accordion__content.desktop {
  position: absolute;
  top: 35px;
  left: -10px;
  box-shadow: 0px 12px 30px -5px rgba(40, 43, 99, 0.08);
  .accordion__content__inner {
    background: #FFFFFF;
    border-radius: 10px;
    padding: 20px;
    min-width: 210px;
  }
}
// Modile версия аккордеон
.accordion__content__inner {
  background: #FFFFFF;
}

.accordion__item.inner + .accordion__item.inner {
  margin-top: 14px;
}

.header {
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
}

.header__wrapepr {
  display: flex;
  align-items: center;
}

.title {
  flex: 1;
  background-color: transparent;
  color: $black-color;
  @extend %p-big;
}

.title.inner {
  font-size: 10px;
  line-height: 139.9%;
  text-transform: uppercase;
}

.arrow {
  flex: 0;
  margin-left: 10px;
  transition: transform .3s;
}

.arrow.up {
  transform: rotate(180deg);
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
</style>
