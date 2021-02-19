<template>
  <div class="home">
    <Container>
      ...
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
    padding: 30px 0;

    /* Children style ------------------------------ */
    /* Other component style ----------------------- */
  }
</style>
