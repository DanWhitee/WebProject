import Vue from "vue"
import Bowser from 'bowser'

Vue.use(Bowser)

const bowser = new Bowser({
  install: Vue => {
    Vue.prototype.$bowser = Bowser.parse(window.navigator.userAgent)
  }
})

export default bowser