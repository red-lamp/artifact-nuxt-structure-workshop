<template>
  <div
    :class="[
      'table-custom', {
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <table>
      <slot />
    </table>
  </div>
</template>

<script>
  export default {
    name: 'Table',

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

  .table-custom {
    /* Parent style   ------------------------------ */
    /* Children style ------------------------------ */
    table {
      width: 100%;
    }

    thead {}

    tbody {
      &:before {
        content: "";
        display: block;
        height: 10px;
      }
    }

    tr {
      &:nth-child(even) {
        background-color: $color-gray-2;
      }
    }

    th {
      padding: 0 10px 13px;
      border-bottom: 1px solid $color-gray-2;
    }

    td {
      height: 48px;
      padding: 6px 10px;
      vertical-align: middle;

      &:first-child {
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
      }

      &:last-child {
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
      }
    }

    .table-custom-text {
      &.is-th {
        @include typography-primary-bold-16;
        color: $color-black;
      }

      &.is-td {
        @include typography-primary-14;
        color: $color-black;
      }
    }

    /* Other component style ----------------------- */
    /* Modifier style ------------------------------ */
    &.is-our-services {
      th, td {

        &.is-service-name {
          width: 245px;
        }

        &.is-description {}

        &.is-actions {
          width: 180px;
          text-align: center;
        }
      }
    }
  }
</style>
