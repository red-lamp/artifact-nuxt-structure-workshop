<template>
  <div
    :class="[
      'textarea-custom-container', {
      'is-fluid': isFluid,
      'is-error': isError,
      'is-disabled': isDisabled,
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <div v-if="label" class="textarea-custom-section is-label">
      <span class="textarea-custom-text is-label">{{ label }}</span>
      <span v-if="isMandatory" class="textarea-custom-text is-mandatory">*</span>
    </div>
    <textarea
      class="textarea-custom"
      :style="[{
        width: width + 'px',
        height: height + 'px',
      }]"
      :placeholder="placeholder"
      :name="name"
      :value="value"
      :maxlength="maxLength"
      @input="$emit('input',onChangeTextarea($event))"
    />
    <div v-if="message" class="textarea-custom-section is-message">
      <span class="textarea-custom-text is-message">{{ message }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Textarea",

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
    placeholder: {
      type: String,
    },
    width: {
      type: Number,
    },
    height: {
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
      default: 1000,
    },
    label: {
      type: String,
    },
    message: {
      type: String,
    },
    onChangeTextarea: {
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

.textarea-custom-container {
  /* Parent style   ------------------------------ */
  position: relative;
  display: inline-block;

  /* Children style ------------------------------ */
  .textarea-custom {
    @include typography-primary-14;
    resize: none;
    display: block;
    width: 100%;
    padding: 5px 15px;
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

  .textarea-custom-section {
    &.is-label {
      margin: 0 0 5px;
    }

    &.is-message {
      margin: 4px 0 0;
    }
  }

  .textarea-custom-text {
    &.is-label {
      @include typography-primary-14;
      color: $color-black;
    }

    &.is-mandatory {
      @include typography-primary-14;
      margin: 0 0 0 2px;
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
    .textarea-custom {
      border-color: $color-error;
    }

    .textarea-custom-text {
      &.is-message {
        color: $color-red-1;
      }
    }
  }

  &.is-disabled {
    .textarea-custom {
      pointer-events: none;
      background-color: $color-disabled;
    }
  }
}
</style>
