<template>
  <div
    :class="[
      'panel-custom', {
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <slot />
  </div>
</template>

<script>
  // import COMPONENT from "./../COMPONENT/index.js";

  export default {
    name: 'Panel',

    // components: {
    //   COMPONENT: COMPONENT.COMPONENT,
    // },

    // Props types: String, Number, Boolean, Array, Object, Function, Promise
    props: {
      className: {
        type: String,
      },
      inlineStyles: {
        type: Object,
        default: function() {},
      },
    },

    mounted() {},

    data() {
      return {};
    },

    methods: {
      function_name () {},
    },
  };
</script>

<style lang="scss">
  @import "~assets/styleguides/styleguides";

  .panel-custom {
    /* Parent style   ------------------------------ */
    padding: 25px 30px 30px;
    border-color: $color-white;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    /* Children style ------------------------------ */
    /* Other component style ----------------------- */
    /* Modifier style ------------------------------ */
  }
</style>
