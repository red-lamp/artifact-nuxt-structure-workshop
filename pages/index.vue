<template>
  <div>
    Let 's start workshop!!!
    <ComponentSample :isShowTitle="false" />
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
