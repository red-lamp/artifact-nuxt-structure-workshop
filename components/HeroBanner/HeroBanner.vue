<template>
  <div
    :class="[
      'hero-banner', {
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <img class="hero-banner-image" :src="src" alt="Banner" />
    <div class="hero-banner-content">
      <div class="hero-banner-section is-heading">
        <span class="hero-banner-text is-heading">{{ heading }}</span>
      </div>
      <div class="hero-banner-section is-description">
        <span class="hero-banner-text is-description">{{ description }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HeroBanner',

    // Props types: String, Number, Boolean, Array, Object, Function, Promise
    props: {
      className: {
        type: String,
      },
      inlineStyles: {
        type: Object,
        default: function() {},
      },
      src: {
        type: String,
        default: "/images/graphics/placeholder-image-landscape.svg",
      },
      heading: {
        type: String,
        default: "-",
      },
      description: {
        type: String,
        default: "-",
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

  .hero-banner {
    /* Parent style   ------------------------------ */
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    height: 384px;
    padding: 30px 30px 30px 115px;

    /* Children style ------------------------------ */
    .hero-banner-content {
      position: relative;
      z-index: $z-index-9;
      max-width: 485px;
    }

    .hero-banner-section {
      &.is-heading {
        margin: 0 0 10px;
      }

      &.is-description {}
    }

    .hero-banner-text {
      &.is-heading {
        @include typography-primary-bold-30;
        color: $color-white;
      }

      &.is-description {
        @include typography-primary-16;
        color: $color-white;
      }
    }

    .hero-banner-image {
      position: absolute;
      z-index: $z-index-1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* Other component style ----------------------- */
    /* Modifier style ------------------------------ */
  }
</style>
