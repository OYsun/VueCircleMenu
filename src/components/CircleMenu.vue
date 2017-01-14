<template>
  <div id='CircleMenu'>
    <div :class="type" :animate='animate'>
      <div class="oy-mask-black" v-show="MaskToggle" v-if="mask==='black'"></div>
      <div class="oy-mask-white" v-show="MaskToggle" v-if="mask==='white'"></div>
      <div class="oy-menu-group" :class="{'open':open}">
        <button class="oy-menu-btn btn-toggle pink"  :class="{'oy-menu-btn-Circle':circle}" :style='{background:BtnColor}' @click="toggle">
          <i class="icon-bars" v-if="btn"></i>
          <slot name="item_btn"></slot>
        </button>
        <div class="btn-list">
          <div  class="oy-menu-item oy-menu-item_1 yellow" :class="AnimateClass" :style='{background:Item1Color}'>
            <slot name="item_1"></slot>
          </div>      
          <div  class="oy-menu-item oy-menu-item_2 purple" :class="AnimateClass" :style='{background:Item2Color}'>
            <slot name="item_2"></slot>
          </div>
          <div  class="oy-menu-item oy-menu-item_3 green" :class="AnimateClass" :style='{background:Item3Color}'>
            <slot name="item_3"></slot>
          </div>
          <div  class="oy-menu-item oy-menu-item_4 blue" :class="AnimateClass" :style='{background:Item4Color}'>
            <slot name="item_4"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CirleMenu',
  props: {
    animate: String,
    mask: String,
    circle: Boolean,
    btn: Boolean,
    type: {
      type: String,
      required: true
    },
    colors: {
      type: Array
    }
  },
  data () {
    return {
      open: false,
      toggleAnimate: false,
      MaskToggle: false,
      BtnColor: '',
      Item1Color: '',
      Item2Color: '',
      Item3Color: '',
      Item4Color: ''
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
      this.toggleAnimate = !this.toggleAnimate
      this.MaskToggle = !this.MaskToggle
    }
  },
  computed: {
    AnimateClass () {
      return this.toggleAnimate ? this.animate : ''
    }
  },
  mounted () {
    if (this.colors) {
      for (let i = 0; i < this.colors.length; i++) {
        this.BtnColor = this.colors[0]
        this.Item1Color = this.colors[1]
        this.Item2Color = this.colors[2]
        this.Item3Color = this.colors[3]
        this.Item4Color = this.colors[4]
      }
    } else {
      return
    }
  }

}
</script>

<style lang="less">

@import '../style/index.less';

</style>