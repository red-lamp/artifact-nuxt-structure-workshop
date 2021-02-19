<template>
  <div class="playground">
    <Container>
      <div class="playground-section is-heading">
        <div class="playground-text is-heading">Playground</div>
      </div>

      <div class="playground-section is-heading-component">
        <div class="playground-text is-heading-component">Component Sample</div>
      </div>
      <div class="playground-section is-component">
        <ComponentSample
          :isActive="false"
          :isFocus="false"
          :isShowTitle="true"
          :isShowDescription="true"
          :title="'Component Sample'"
          :description="'This is sample for learning component usage workshop.'"
        />
      </div>

      <div class="playground-section is-heading-component">
        <div class="playground-text is-heading-component">Button</div>
      </div>
      <div class="playground-section is-component">
        <div class="playground-lists is-components">
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">Primary</div>
            </div>
            <Grid isGutter15 isGutterVertical15 isVerticalCenter>
              <GridCol>
                <Button
                  isColorPrimary
                  :onClick="function () {}"
                >
                  Button
                </Button>
              </GridCol>
              <GridCol>
                <Button
                  isColorPrimary
                  isLarge
                  :onClick="function () {}"
                >
                  Button
                </Button>
              </GridCol>
              <GridCol>
                <Button
                  isColorPrimary
                  isSmall
                  :onClick="function () {}"
                >
                  Button
                </Button>
              </GridCol>
            </Grid>
          </div>
          <div class="playground-list">
            <Grid isGutter15 isGutterVertical15 isVerticalCenter>
              <GridCol>
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
              </GridCol>
              <GridCol>
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
              </GridCol>
              <GridCol>
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
              </GridCol>
            </Grid>
          </div>
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">Seondary</div>
            </div>
            <Grid isGutter15 isGutterVertical15 isVerticalCenter>
              <GridCol>
                <Button
                  isColorSecondary
                  :onClick="function () {}"
                >
                  Button
                </Button>
              </GridCol>
              <GridCol>
                <Button
                  isColorSecondary
                  isLarge
                  :onClick="function () {}"
                >
                  Button
                </Button>
              </GridCol>
              <GridCol>
                <Button
                  isColorSecondary
                  isSmall
                  :onClick="function () {}"
                >
                  Button
                </Button>
              </GridCol>
            </Grid>
          </div>
          <div class="playground-list">
            <Grid isGutter15 isGutterVertical15 isVerticalCenter>
              <GridCol>
                <Button
                  isColorSecondary
                  isShowIconFront
                  :iconFrontSrc="'/images/icons/ic-edit-white.svg'"
                  :iconFrontWidth="14"
                  :iconFrontHeight="14"
                  :onClick="function () {}"
                >
                  Button
                </Button>
              </GridCol>
              <GridCol>
                <Button
                  isColorSecondary
                  isLarge
                  isShowIconFront
                  :iconFrontSrc="'/images/icons/ic-edit-white.svg'"
                  :iconFrontWidth="18"
                  :iconFrontHeight="18"
                  :onClick="function () {}"
                >
                  Button
                </Button>
              </GridCol>
              <GridCol>
                <Button
                  isColorSecondary
                  isSmall
                  isShowIconFront
                  :iconFrontSrc="'/images/icons/ic-edit-white.svg'"
                  :iconFrontWidth="10"
                  :iconFrontHeight="10"
                  :onClick="function () {}"
                >
                  Button
                </Button>
              </GridCol>
            </Grid>
          </div>
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">Gray</div>
            </div>
            <Grid isGutter15 isGutterVertical15 isVerticalCenter>
              <GridCol>
                <Button
                  isColorGray
                  :onClick="function () {}"
                >
                  Button
                </Button>
              </GridCol>
              <GridCol>
                <Button
                  isColorGray
                  isLarge
                  :onClick="function () {}"
                >
                  Button
                </Button>
              </GridCol>
              <GridCol>
                <Button
                  isColorGray
                  isSmall
                  :onClick="function () {}"
                >
                  Button
                </Button>
              </GridCol>
            </Grid>
          </div>
          <div class="playground-list">
            <Grid isGutter15 isGutterVertical15 isVerticalCenter>
              <GridCol>
                <Button
                  isColorGray
                  isShowIconFront
                  :iconFrontSrc="'/images/icons/ic-edit-white.svg'"
                  :iconFrontWidth="14"
                  :iconFrontHeight="14"
                  :onClick="function () {}"
                >
                  Button
                </Button>
              </GridCol>
              <GridCol>
                <Button
                  isColorGray
                  isLarge
                  isShowIconFront
                  :iconFrontSrc="'/images/icons/ic-edit-white.svg'"
                  :iconFrontWidth="18"
                  :iconFrontHeight="18"
                  :onClick="function () {}"
                >
                  Button
                </Button>
              </GridCol>
              <GridCol>
                <Button
                  isColorGray
                  isSmall
                  isShowIconFront
                  :iconFrontSrc="'/images/icons/ic-edit-white.svg'"
                  :iconFrontWidth="10"
                  :iconFrontHeight="10"
                  :onClick="function () {}"
                >
                  Button
                </Button>
              </GridCol>
            </Grid>
          </div>
        </div>
      </div>

      <div class="playground-section is-heading-component">
        <div class="playground-text is-heading-component">Input</div>
      </div>
      <div class="playground-section is-component">
        <div class="playground-lists is-components">
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">Label & Message (Mandatory)</div>
            </div>
            <Grid isGutter30>
              <GridCol>
                <Input
                  isMandatory
                  :width="250"
                  :label="'Label'"
                  :message="'Message'"
                  :placeholder="'Placeholder'"
                  :name="''"
                  :value="''"
                  :onChangeInput="function () {}"
                />
              </GridCol>
              <GridCol>
                <Input
                  isMandatory
                  isError
                  :width="250"
                  :label="'Label'"
                  :message="'Message'"
                  :placeholder="'Placeholder'"
                  :name="''"
                  :value="''"
                  :onChangeInput="function () {}"
                />
              </GridCol>
              <GridCol>
                <Input
                  isMandatory
                  isDisabled
                  :width="250"
                  :label="'Label'"
                  :message="'Message'"
                  :placeholder="'Placeholder'"
                  :name="''"
                  :value="''"
                  :onChangeInput="function () {}"
                />
              </GridCol>
            </Grid>
          </div>
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">Label & Message</div>
            </div>
            <Grid isGutter30>
              <GridCol>
                <Input
                  :width="250"
                  :label="'Label'"
                  :message="'Message'"
                  :placeholder="'Placeholder'"
                  :name="''"
                  :value="''"
                  :onChangeInput="function () {}"
                />
              </GridCol>
              <GridCol>
                <Input
                  isError
                  :width="250"
                  :label="'Label'"
                  :message="'Message'"
                  :placeholder="'Placeholder'"
                  :name="''"
                  :value="''"
                  :onChangeInput="function () {}"
                />
              </GridCol>
              <GridCol>
                <Input
                  isDisabled
                  :width="250"
                  :label="'Label'"
                  :message="'Message'"
                  :placeholder="'Placeholder'"
                  :name="''"
                  :value="''"
                  :onChangeInput="function () {}"
                />
              </GridCol>
            </Grid>
          </div>
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">Label</div>
            </div>
            <Grid isGutter30>
              <GridCol>
                <Input
                  :width="250"
                  :label="'Label'"
                  :message="''"
                  :placeholder="'Placeholder'"
                  :name="''"
                  :value="''"
                  :onChangeInput="function () {}"
                />
              </GridCol>
              <GridCol>
                <Input
                  isError
                  :width="250"
                  :label="'Label'"
                  :message="''"
                  :placeholder="'Placeholder'"
                  :name="''"
                  :value="''"
                  :onChangeInput="function () {}"
                />
              </GridCol>
              <GridCol>
                <Input
                  isDisabled
                  :width="250"
                  :label="'Label'"
                  :message="''"
                  :placeholder="'Placeholder'"
                  :name="''"
                  :value="''"
                  :onChangeInput="function () {}"
                />
              </GridCol>
            </Grid>
          </div>
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">No Label & Message</div>
            </div>
            <Grid isGutter30>
              <GridCol>
                <Input
                  :width="250"
                  :label="''"
                  :message="''"
                  :placeholder="'Placeholder'"
                  :name="''"
                  :value="''"
                  :onChangeInput="function () {}"
                />
              </GridCol>
              <GridCol>
                <Input
                  isError
                  :width="250"
                  :label="''"
                  :message="''"
                  :placeholder="'Placeholder'"
                  :name="''"
                  :value="''"
                  :onChangeInput="function () {}"
                />
              </GridCol>
              <GridCol>
                <Input
                  isDisabled
                  :width="250"
                  :label="''"
                  :message="''"
                  :placeholder="'Placeholder'"
                  :name="''"
                  :value="''"
                  :onChangeInput="function () {}"
                />
              </GridCol>
            </Grid>
          </div>
        </div>
      </div>

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

  .playground {
    /* Parent style   ------------------------------ */
    padding: 30px 0;

    /* Children style ------------------------------ */
    .playground-section {
      &.is-heading {
        margin: 0 0 60px;
      }

      &.is-heading-component {
        margin: 0 0 15px;
      }

      &.is-heading-variant {
        margin: 0 0 10px;
      }

      &.is-component {
        margin: 0 0 45px;
      }
    }

    .playground-lists {
      &.is-components {
        .playground-list {
          margin: 0 0 15px;

          &:last-child {
            margin: 0;
          }
        }
      }
    }

    .playground-text {
      &.is-heading {
        @include typography-primary-bold-30;
        color: $color-black;
      }

      &.is-heading-component {
        @include typography-primary-bold-24;
        color: $color-black;
      }

      &.is-heading-variant {
        @include typography-primary-bold-18;
        color: $color-black;
      }
    }

    /* Other component style ----------------------- */
  }
</style>
