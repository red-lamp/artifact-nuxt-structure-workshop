<template>
  <div class="home">
    <Container>
      <NavigationBar />
      <HeroBanner
        :src="'/images/contents/banner-hero.jpg'"
        :heading="'Health Claims Management Service'"
        :description="'HCMS2019 Co., Ltd. is a Third Party Administrator of health insurance and medical welfare benefits providing medical claims assessment and also medical benefits administration service.'"
      />
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
