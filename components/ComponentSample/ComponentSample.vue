<template>
  <div
    :class="[
      'component-sample', {
      'is-active': isActive,
      'is-focus': isFocus,
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <div
      v-if="isShowTitle"
      class="component-sample-title"
    >
      {{ title }}
    </div>
    <div
      v-if="isShowDescription"
      class="component-sample-description"
    >
      {{ description }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ComponentSample',

    // Props types: String, Number, Boolean, Array, Object, Function, Promise
    props: {
      className: {
        type: String,
      },
      inlineStyles: {
        type: Object,
        default: function() {
          return {
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
          };
        },
      },
      isActive: {
        type: Boolean,
      },
      isFocus: {
        type: Boolean,
      },
      isShowTitle: {
        type: Boolean,
        default: true,
      },
      isShowDescription: {
        type: Boolean,
        default: true,
      },
      title: {
        type: String,
        default: '-',
      },
      description: {
        type: String,
        default: '-',
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
  .component-sample {
    /* Parent style   ------------------------------ */
    padding: 10px;

    /* Children style ------------------------------ */
    .component-sample-title {
      font-size: 16px;
      font-weight: bold;
    }

    .component-sample-description {
      font-size: 16px;
    }

    /* Other component style ----------------------- */
    /* Modifier style ------------------------------ */
    &.is-active {
      background-color: #CCCCCC;
    }

    &.is-focus {
      border: 2px solid #000000;
    }
  }
</style>
