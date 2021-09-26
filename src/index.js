const directive = {
  install(Vue) {
    Vue.directive('no-autocomplete', {
      bind(el, { value }) {
        const isDisabled = el.disabled
        el.disabled = true
        setTimeout(() => {
          el.disabled = isDisabled
        }, 1000)
      }
    })
  }
}

export default directive