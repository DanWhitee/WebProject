
export default {
  /**
   * install function
   * @param  {Vue} Vue
   */
  install(Vue) {
    Vue.directive('wow', {
      bind(el, binding) {
        const animateCofig = binding.value
        el.style.visibility = 'hidden'
        el.style['animation-name'] = 'none'
        const offsetTop = function (element) {
          let top = 0
          if (!element) return top
          while (element.offsetTop === 0) {
            element = element.parentNode
          }
          top = element.offsetTop
          while ((element = element.offsetParent)) {
            top += element.offsetTop
          }

          return top
        }
        const isVisible = function (el) {
          if (!el) return false
          const viewTop = window.pageYOffset
          const viewBottom = viewTop + window.innerHeight - 100
          const top = offsetTop(el)

          return top <= viewBottom
        }
        const isShow = function (el, animateCofig) {
          if (el && isVisible(el)) {
            el.style.visibility = 'visible'

            for (const property in animateCofig) {
              el.style[property] = animateCofig[property]
            }
            window.removeEventListener('scroll', handleScroll)
          }
        }
        let lastClick = Date.now()
        const handleScroll = function () {
          try {
            const rate = 100
            if (Date.now() - lastClick >= rate) {
              isShow(el, animateCofig)
              lastClick = Date.now()
            }
          } catch (e) {
            return false
          }
        }

        setTimeout(function () {
          isShow(el, animateCofig)
        }, 1)

        window.addEventListener('scroll', handleScroll)
      }
    })
  }
}
