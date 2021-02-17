<template>
  <div>
    Let 's start workshop!!!
    <ComponentSample
      :isActive="true"
      :isFocus="false"
      :isShowTitle="true"
      :isShowDescription="true"
      :title="'Component Sample'"
      :description="'This is sample for learning component usage workshop.'"
    />
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
</style>
