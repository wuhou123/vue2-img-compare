<template>
  <div
    id="slider"
    class="beer-slider beer-ready"
    :data-beer-label="textR || null"
    :style="size"
    ref="slideRef"
  >
    <img :src="picR" alt="" />
    <div
      class="beer-reveal"
      :data-beer-label="textL || null"
      :style="{
        clip: clipStyle
      }"
    >
      <img :src="picL" alt="" />
    </div>
    <input
      type="range"
      class="beer-range"
      aria-label="Percent of revealed content"
      aria-valuemin="0"
      aria-valuemax="100"
      value="50"
      min="0"
      max="100"
      @input="handlerChange"
    />
    <div
      class="slider-box"
      :style="{
        transform: transformStyle
      }"
    >
      <span class="beer-handle"></span>
      <span class="line"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue2-img-compare',
  props: {
    w: {
      type: String,
      default: ''
    },
    h: {
      type: String,
      default: ''
    },
    picL: {
      type: String,
      default: ''
    },
    picR: {
      type: String,
      default: ''
    },
    textR: {
      type: String,
      default: ''
    },
    textL: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      process: 0.5,
      refW: 0,
      refH: 0,
      cancalDebounce:null
    }
  },
  computed: {
    isVaildPxW() {
      return isNaN(this.w)
    },
    isVaildPxH() {
      return isNaN(this.h)
    },
    size() {
      return {
        width: this.isVaildPxW ? this.w : this.w + 'px',
        height: this.isVaildPxH ? this.h : this.h + 'px'
      }
    },
    clipStyle() {
      const w = this.isVaildPxW ? this.refW : this.w
      return `rect(auto, ${this.process * w}px, auto, auto)`
    },
    transformStyle() {
      const w = this.isVaildPxW ? this.refW : this.w
      return `translate3d(${(parseFloat(this.process) - 0.5) * w}px, 0px, 0px)`
    }
  },
  mounted() {
    const debounce = (fn, delay) => {
      let timer
      return function() {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          fn()
        }, delay)
      }
    }
    this.cancalDebounce = debounce(this.initSize, 100)
    window.addEventListener('resize', this.cancalDebounce)
    this.initSize()
  },
  beforeDestory() {
    window.removeEventListener('resize', this.cancalDebounce)
  },
  methods: {
    handlerChange(e) {
      this.process = parseFloat(e.target.value) / 100
    },
    initSize() {
      if (this.isVaildPxW || this.isVaildPxH) {
        const timer = setTimeout(() => {
          this.refW = this.$refs.slideRef.offsetWidth
          this.refH = this.$refs.slideRef.offsetHeight
          clearTimeout(timer)
        }, 300)
      } else {
        this.refW = this.$refs.slideRef.offsetWidth
        this.refH = this.$refs.slideRef.offsetHeight
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.beer-slider {
  display: inline-block;
  position: relative;
  overflow: hidden;
  user-select: none;
}
.beer-slider *,
.beer-slider:before,
.beer-slider:after,
.beer-slider *:before,
.beer-slider *:after {
  box-sizing: border-box;
}
.beer-slider img {
  vertical-align: bottom;
}
.beer-slider > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.beer-reveal {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  opacity: 1;
  will-change: clip;
  user-select: none;
  clip: rect(auto, 0px, auto, auto);
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.beer-range {
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  height: 100%;
  margin: 0;
  left: -1px;
  width: calc(100% + 2px);
  cursor: pointer;
  -webkit-appearance: slider-horizontal !important;
  -moz-appearance: none;
  opacity: 0;
  -ms-touch-action: auto;
  touch-action: auto;
}
.beer-range::-webkit-slider-thumb {
  -webkit-appearance: none;
}
.beer-range::-moz-range-thumb {
  -webkit-appearance: none;
}
.beer-range::-ms-tooltip {
  display: none;
}
.slider-box {
  width: 56px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -28px;
  pointer-events: none;
  text-align: center;
  z-index: 2;
  .line {
    width: 2px;
    height: 100%;
    display: inline-block;
    background-color: #fff;
  }
}
.beer-handle {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  color: #fff;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  backdrop-filter: blur(7px);
  box-shadow: 0 0 6px transparent;
  margin: -24px 0 0 -24px;
  pointer-events: none;
  border: 2px solid #fff;
}
.beer-handle:before,
.beer-handle:after {
  content: '';
  position: absolute;
  top: 14px;
  width: 0px;
  height: 0px;
  border-top: 8px solid transparent;
  border-right: 10px solid;
  border-bottom: 8px solid transparent;
}
.beer-handle:before {
  left: 8px;
}
.beer-handle:after {
  right: 8px;
  transform: rotate(180deg);
}
.beer-slider[data-beer-label]:after,
.beer-reveal[data-beer-label]:after {
  content: attr(data-beer-label);
  position: absolute;
  top: 20px;
  line-height: 1;
  padding: 5px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.75);
}
.beer-slider[data-beer-label]:after {
  right: 20px;
}
.beer-reveal[data-beer-label]:after {
  left: 20px;
}
</style>
