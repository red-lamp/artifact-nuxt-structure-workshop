<template>
  <Layout>
    <div class="layout-playground">
      <nuxt />
    </div>
  </Layout>
</template>

<script>
import Components from "~/components/index.ts";

export default {
  components: {
    ...Components,
  },
}
</script>

<style lang="scss">
  @import "~assets/styleguides/styleguides";

  .layout-playground {
    padding: 30px 0;
    background-color: $color-gray-2;
  }
</style>
