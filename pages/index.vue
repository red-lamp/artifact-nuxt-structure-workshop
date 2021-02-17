<template>
  <div>
    Let 's start workshop!!!

    <br />

    <Button
      isColorPrimary
      :onClick="function () {}"
    >
      Button
    </Button>
    <Button
      isColorPrimary
      isLarge
      :onClick="function () {}"
    >
      Button
    </Button>
    <Button
      isColorPrimary
      isSmall
      :onClick="function () {}"
    >
      Button
    </Button>


    <Button
      isColorPrimary
      isShowIconFront
      :iconFrontSrc="'/images/icons/ic-edit-white.svg'"
      :iconFrontWidth="14"
      :iconFrontHeight="14"
      :onClick="function () {}"
    >
      Button
    </Button>
    <Button
      isColorPrimary
      isLarge
      isShowIconFront
      :iconFrontSrc="'/images/icons/ic-edit-white.svg'"
      :iconFrontWidth="18"
      :iconFrontHeight="18"
      :onClick="function () {}"
    >
      Button
    </Button>
    <Button
      isColorPrimary
      isSmall
      isShowIconFront
      :iconFrontSrc="'/images/icons/ic-edit-white.svg'"
      :iconFrontWidth="10"
      :iconFrontHeight="10"
      :onClick="function () {}"
    >
      Button
    </Button>

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
