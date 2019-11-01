// import textStyle from 'textStyle.js'
// Vue.directive('text', textStyle)
// Vue.directive('textd', {
  
// })
var app = new Vue({
  el: '#app',

  data() {
    return {
      text: '',
      textOut: '',
      textArg: [],
      textPos: ''
    }
  },
  // data: {

  //   text: '',
  //   textOut: '',
  //   textArg: [],
  //   textPos: ''
  // },
  // props: [textArg],

  methods: {
    saveText() {
      this.textOut = this.text
    },
    textStyle(style, event) {
      if (this.textArg.indexOf(style) == -1) {
        this.textArg.push(style)
      }
      else {
        let pos = this.textArg.indexOf(style)
        this.textArg.splice(pos, 1)
      }
    },
    textStylePos(style, event) {
      this.textPos = style
    }
  },
  computed: {
    //  classes

  },
  // props: [textArg],
  directive: {
    txtd: {
      bind: function(el, bindings, vnode) {
        const arg = bindings.arg
        const style = bindings.modifiers['align']
        const align = bindings.modifiers['style']
        if (align) {
          el.style.textAlign = textPos
        }
        if (style) {
          textArg.forEach(function (item, index, array) {
            if (item == 'bold') {
              el.style.fontWeight = item
            }
            else if (item == 'italic') {
              el.style.fontStyle = item
            }
            else if (item == 'underline') {
              el.style.textDecoration = item
            }
          })
        }
        el.style[arg] = bindings.value
        console.log(arg)
      }

    }
  }


})