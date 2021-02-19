<template>
  <div class="home">
    <Container>
      <NavigationBar />
    </Container>
  </div>

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

  .home {
    /* Parent style   ------------------------------ */
    /* Children style ------------------------------ */
    /* Other component style ----------------------- */
  }
</style>
