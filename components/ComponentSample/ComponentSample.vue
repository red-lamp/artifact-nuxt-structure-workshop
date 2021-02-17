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
    <div>Component sample</div>
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
      isActive: {
        type: Boolean,
      },
      isFocus: {
        type: Boolean,
      },
      inlineStyles: {
        type: Object,
        default: function() {
          return {
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
          };
        },
      },
      isShowTitle: {
        type: Boolean,
        default: true,
      },
      title: {
        type: String,
        default: 'Title',
      },
      isShowDescription: {
        type: Boolean,
        default: true,
      },
      description: {
        type: String,
        default: 'Description',
      },
    },

    mounted() {
      // Something
    },

    data() {
      return {
        // Something
      };
    },

    methods: {
      function_name () {
        // Function
      },
    },
  };
</script>

<style lang="scss">
</style>
