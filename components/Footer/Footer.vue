<template>
  <div
    :class="[
      'footer-custom', {
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <span class="footer-custom-text is-copyright">Copyright ©2019-2021 HCMS2019 Co., Ltd. All right reserved by HCMS2019</span>
  </div>
</template>

<script>
  export default {
    name: 'Footer',

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

  .footer-custom {
    /* Parent style   ------------------------------ */
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60px;
    padding: 5px 15px;
    background-color: $color-primary-1;

    /* Children style ------------------------------ */
    .footer-custom-text {
      &.is-copyright {
        @include typography-primary-14;
        color: $color-white;
      }
    }

    /* Other component style ----------------------- */
    /* Modifier style ------------------------------ */
  }
</style>
