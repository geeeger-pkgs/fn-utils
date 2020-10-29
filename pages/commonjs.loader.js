(function () {
  window.require = function (name) {
    const value = window.require._module.get(name)
    console.log(value)
    return value
  }

  window.require._module = new Map()

  window.exports = {}

  window.require.onloadedEnd = function () {}

  class MyScript extends HTMLElement {
    constructor() {
      super()
    }
    async connectedCallback() {
      const attrs = this.attributes

      const list = attrs.list.value.split(';').map(item => {
        const val = item.split(',')
        return {
          name: val[0],
          src: val[1]
        }
      })

      for (let i = 0; i < list.length; i++) {
        await new Promise((resolve) => {
          const script = document.createElement('script')
          script.src = list[i].src;
          script.async = true;
          script.onload = function () {
            window.require._module.set(list[i].name, Object.assign({} , exports));
            window.exports = {};
            resolve();
          }
          document.body.appendChild(script);
        })
      }
      window.require.onloadedEnd()
    }
  }
  window.customElements.define('geeeger-loader', MyScript)
})();
