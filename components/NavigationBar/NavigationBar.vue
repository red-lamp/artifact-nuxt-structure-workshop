<template>
  <div
    :class="[
      'navigation-bar', {
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <div class="navigation-bar-section is-logo">
      <NuxtLink class="nuxt-link-block" to="/">
        <img class="navigation-bar-image is-logo" src="/images/logos/logo.png" alt="Icon" />
      </NuxtLink>
    </div>
    <div class="navigation-bar-section is-menu">
      <div class="navigation-bar-lists is-menu">
        <div class="navigation-bar-list">
          <NuxtLink to="/">
            <span class="navigation-bar-text is-menu">Home</span>
          </NuxtLink>
        </div>
        <div class="navigation-bar-list">
          <NuxtLink to="/">
            <span class="navigation-bar-text is-menu">About</span>
          </NuxtLink>
        </div>
        <div class="navigation-bar-list">
          <NuxtLink to="/">
            <span class="navigation-bar-text is-menu">Services</span>
          </NuxtLink>
        </div>
        <div class="navigation-bar-list">
          <NuxtLink to="/">
            <span class="navigation-bar-text is-menu">Contact</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavigationBar',

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

  .navigation-bar {
    /* Parent style   ------------------------------ */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;

    /* Children style ------------------------------ */
    .navigation-bar-section {
      &.is-logo {}

      &.is-menu {}
    }

    .navigation-bar-lists {
      &.is-menu {
        display: flex;
        align-items: center;

        .navigation-bar-list {
          margin: 0 30px 0 0;

          &:last-child {
            margin: 0;
          }
        }
      }
    }

    .navigation-bar-text {
      &.is-menu {
        @include typography-primary-bold-16;
        color: $color-primary-1;
      }
    }

    .navigation-bar-image {
      &.is-logo {
        display: block;
        width: auto;
        height: 60px;
      }
    }

    /* Other component style ----------------------- */
    /* Modifier style ------------------------------ */
  }
</style>
