"use strict";

// import textStyle from 'textStyle.js'
// Vue.directive('text', textStyle)
// Vue.directive('textd', {
// })
var app = new Vue({
  el: '#app',
  data: function data() {
    return {
      text: '',
      textOut: '',
      textArg: [],
      textPos: ''
    };
  },
  // data: {
  //   text: '',
  //   textOut: '',
  //   textArg: [],
  //   textPos: ''
  // },
  // props: [textArg],
  methods: {
    saveText: function saveText() {
      this.textOut = this.text;
    },
    textStyle: function textStyle(style, event) {
      if (this.textArg.indexOf(style) == -1) {
        this.textArg.push(style);
      } else {
        var pos = this.textArg.indexOf(style);
        this.textArg.splice(pos, 1);
      }
    },
    textStylePos: function textStylePos(style, event) {
      this.textPos = style;
    }
  },
  computed: {//  classes
  },
  // props: [textArg],
  directive: {
    txtd: {
      bind: function bind(el, bindings, vnode) {
        var arg = bindings.arg;
        var style = bindings.modifiers['align'];
        var align = bindings.modifiers['style'];

        if (align) {
          el.style.textAlign = textPos;
        }

        if (style) {
          textArg.forEach(function (item, index, array) {
            if (item == 'bold') {
              el.style.fontWeight = item;
            } else if (item == 'italic') {
              el.style.fontStyle = item;
            } else if (item == 'underline') {
              el.style.textDecoration = item;
            }
          });
        }

        el.style[arg] = bindings.value;
        console.log(arg);
      }
    }
  }
});