export function install(Vue) {
  if (install.installed) {
    return
  }
  install.installed = true

  Vue.directive('no-autocomplete', {
    bind(el, { value }) {
      const isDisabled = el.disabled
      el.disabled = true

      el.style.backgroundColor = 'inherit'

      setTimeout(() => {
        el.disabled = isDisabled
      }, 1000)
    }
  })
}

const plugin = {
  install
}

let globalVue = null
if (typeof window !== 'undefined') {
  globalVue = window.Vue
} else if (typeof global !== 'undefined') {
  globalVue = global.Vue
}
if (globalVue) {
  globalVue.use(plugin)
}

export default plugin