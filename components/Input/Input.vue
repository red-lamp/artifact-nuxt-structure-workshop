<template>
  <div
    :class="[
      'input-custom-container', {
      'is-fluid': isFluid,
      'is-error': isError,
      'is-disabled': isDisabled,
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <div v-if="label" class="input-custom-section is-label">
      <span class="input-custom-text is-label">{{ label }}</span>
      <span v-if="isMandatory" class="input-custom-text is-mandatory">*</span>
    </div>
    <input
      class="input-custom"
      :style="[{ width: width + 'px' }]"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :value="value"
      :maxlength="maxLength"
      @input="$emit('input',onChangeInput($event))"
    />
    <div v-if="label" class="input-custom-section is-message">
      <span class="input-custom-text is-message">{{ message }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",

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
      }
    },
    isFluid: {
      type: Boolean,
    },
    isError: {
      type: Boolean,
    },
    isDisabled: {
      type: Boolean,
    },
    isMandatory: {
      type: Boolean,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
    },
    width: {
      type: Number,
    },
    name: {
      type: String,
    },
    value: {
      type: String,
      default: ""
    },
    maxLength: {
      type: Number,
      default: 255,
    },
    label: {
      type: String,
    },
    message: {
      type: String,
    },
    onChangeInput: {
      type: Function,
      default(ev) {
        return ev.target.value;
      }
    },
  }
};
</script>

<style lang="scss">
@import "~assets/styleguides/styleguides";

.input-custom-container {
  /* Parent style   ------------------------------ */
  position: relative;
  display: inline-block;

  /* Children style ------------------------------ */
  .input-custom {
    @include typography-primary-14;
    width: 100%;
    padding: 0 15px;
    height: $input-height;
    background-color: $color-white;
    border: 1px solid $color-black;
    border-radius: 4px;
    color: $color-black;

    /* Placeholder */
    &::-moz-placeholder {
      color: $color-placeholder;
      opacity: 1;
    }

    &:-ms-input-placeholder {
      color: $color-placeholder;
    }

    &::-webkit-input-placeholder {
      color: $color-placeholder;
    }

    &::placeholder {
      color: $color-placeholder;
    }

    &:focus {
      outline: none;
    }

    /* Change style from auto fill from chrome */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active  {
      -webkit-box-shadow: 0 0 0 30px transparent inset !important;
    }

    &:-webkit-autofill {
      -webkit-text-fill-color: $color-white;
    }
  }

  .input-custom-section {
    &.is-label {
      margin: 0 0 5px;
    }

    &.is-message {
      margin: 7px 0 0;
    }
  }

  .input-custom-text {
    &.is-label {
      @include typography-primary-14;
      color: $color-black;
    }

    &.is-mandatory {
      @include typography-primary-14;
      color: $color-red-1;
    }

    &.is-message {
      @include typography-primary-12;
      color: $color-black;
    }
  }

  /* Other component style ----------------------- */
  /* Modifier style ------------------------------ */
  &.is-fluid {
    width: 100%;
  }

  /* State */
  &.is-error {
    .input-custom {
      border-color: $color-error;
    }

    .input-custom-text {
      &.is-message {
        color: $color-red-1;
      }
    }
  }

  &.is-disabled {
    .input-custom {
      pointer-events: none;
      background-color: $color-disabled;
    }
  }
}
</style>
