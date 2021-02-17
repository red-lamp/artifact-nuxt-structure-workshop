<template>
  <button
    :class="[
      'button-custom', {
      'is-color-primary': isColorPrimary,
      'is-color-secondary': isColorSecondary,
      'is-color-gray': isColorGray,
      'is-small': isSmall,
      'is-large': isLarge,
      'is-disabled': isDisabled,
      'is-fluid': isFluid,
      }, className,
    ]"
    :style="[
      {
        width: width + 'px',
      },
      inlineStyles,
    ]"
    @click="onClick"
  >
    <span
      v-if="isShowIconFront"
      class="button-custom-icon is-front"
    >
      <img
        class="button-custom-icon-image"
        :style="{
          top: iconFrontTop + 'px',
          left: iconFrontLeft + 'px',
          width: iconFrontWidth + 'px',
          height: iconFrontHeight + 'px',
        }"
        :src="iconFrontSrc"
        :alt="iconFrontAlt"
      >
    </span>
    <span
      class="button-custom-text"
      :style="{
        top: textTop + 'px',
      }"
    >
      <slot />
    </span>
    <span
      v-if="isShowIconBack"
      class="button-custom-icon is-back"
    >
      <img
        class="button-custom-icon-image"
        :style="{
          top: iconBackTop + 'px',
          left: iconBackLeft + 'px',
          width: iconBackWidth + 'px',
          height: iconBackHeight + 'px',
        }"
        :src="iconBackSrc"
        :alt="iconBackAlt"
      >
    </span>
  </button>
</template>

<script>
  export default {
    name: "Button",

    // Props types: String, Number, Boolean, Array, Object, Function, Promise
    props: {
      className: {
        type: String,
      },
      inlineStyles: {
        type: Object,
        default: function() {
          return {
            // Style
          };
        },
      },
      isColorPrimary: {
        type: Boolean,
      },
      isColorSecondary: {
        type: Boolean,
      },
      isColorGray: {
        type: Boolean,
      },
      isSmall: {
        type: Boolean,
      },
      isLarge: {
        type: Boolean,
      },
      isDisabled: {
        type: Boolean,
      },
      isFluid: {
        type: Boolean,
      },
      isShowIconFront: {
        type: Boolean,
        default: false,
      },
      isShowIconBack: {
        type: Boolean,
        default: false,
      },
      width: {
        type: Number,
      },
      iconFrontSrc: {
        type: String,
      },
      iconFrontTop: {
        type: Number,
      },
      iconFrontLeft: {
        type: Number,
      },
      iconFrontWidth: {
        type: Number,
      },
      iconFrontHeight: {
        type: Number,
      },
      iconFrontAlt: {
        type: String,
        default: 'Icon',
      },
      iconBackSrc: {
        type: String,
      },
      iconBackTop: {
        type: Number,
      },
      iconBackLeft: {
        type: Number,
      },
      iconBackWidth: {
        type: Number,
      },
      iconBackHeight: {
        type: Number,
      },
      iconBackAlt: {
        type: String,
        default: 'Icon',
      },
      textTop: {
        type: Number,
      },
      onClick: {
        type: Function,
        default: function() {},
      },
    },
  };
</script>

<style lang="scss">
  @import '~assets/styleguides/styleguides';

  .button-custom {
    /* Parent style   ------------------------------ */
    cursor: pointer;
    transition: $global-transition;
    display: inline-flex;
    align-items: center;
    height: $button-height;
    padding: 0 15px;
    background-color: $color-black;
    border: none;
    border-radius: 4px;

    &:focus {
      outline: none;
    }

    &:active {
      opacity: 0.75;
    }

    /* Children style ------------------------------ */
    .button-custom-icon {
      // Fix line height spacing in flex container if element is inline/inline-block display
      display: block;

      &.is-front {
        margin-right: 10px;
      }

      &.is-back {
        margin-left: 10px;
      }
    }

    .button-custom-icon-image {
      position: relative;
      // Fix line height spacing in flex container if element is inline/inline-block display
      display: block;
    }

    .button-custom-text {
      @include typography-primary-18;
      position: relative;
      top: 2px;
      color: $color-white;
    }

    /* Modifier style ------------------------------ */
    /* Color */
    &.is-color-primary {
      background: $color-primary-1;
    }

    &.is-color-secondary {
      background: $color-red-1;
    }

    &.is-color-gray {
      background: $color-primary-2;
    }

    /* Size */
    &.is-small {
      height: $button-small-height;
      border-radius: 3px;

      .button-custom-icon {
        &.is-front {
          margin-right: 7px;
        }

        &.is-back {
          margin-left: 7px;
        }
      }

      .button-custom-text {
        @include typography-primary-14;
        top: 1px;
      }
    }

    &.is-large {
      height: $button-large-height;
      border-radius: 6px;

      .button-custom-icon {
        &.is-front {
          margin-right: 15px;
        }

        &.is-back {
          margin-left: 15px;
        }
      }

      .button-custom-text {
        @include typography-primary-24;
      }
    }

    /* Other */
    &.is-disabled {
      pointer-events: none;
      opacity: 0.5;
    }

    &.is-fluid {
      width: 100%;
    }
  }
</style>
