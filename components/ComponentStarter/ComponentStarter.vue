<template>
  <div
    :class="[
      'component-starter', {
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
  export default {
    name: 'ComponentStarter',

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
  .component-starter {
    /* Parent style   ------------------------------ */
    /* Children style ------------------------------ */
    /* Other component style ----------------------- */
    /* Modifier style ------------------------------ */
  }
</style>
