<template>
  <div class="playground">
    <Container>
      <div class="playground-section is-heading">
        <div class="playground-text is-heading">Playground</div>
      </div>

      <!-- Component Sample
      ================================================== -->
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

      <!-- Button
      ================================================== -->
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

      <!-- Container
      ================================================== -->
      <div class="playground-section is-heading-component">
        <div class="playground-text is-heading-component">Container</div>
      </div>
      <div class="playground-section is-component">
        <Container>
          Container is contain content and control site width.
        </Container>
      </div>

      <!-- Footer
      ================================================== -->
      <div class="playground-section is-heading-component">
        <div class="playground-text is-heading-component">Footer</div>
      </div>
      <div class="playground-section is-component">
        <Footer />
      </div>

      <!-- Grid
      ================================================== -->
      <div class="playground-section is-heading-component">
        <div class="playground-text is-heading-component">Grid</div>
      </div>
      <div class="playground-section is-component">
        <div class="playground-lists is-components">
          <div class="playground-list">
            <div class="playground-section is-heading-variant">
              <div class="playground-text is-heading-variant">12 Columns & Gutter 30</div>
            </div>
            <Grid isGutter30>
              <GridCol isCol1>Col</GridCol>
              <GridCol isCol1>Col</GridCol>
              <GridCol isCol1>Col</GridCol>
              <GridCol isCol1>Col</GridCol>
              <GridCol isCol1>Col</GridCol>
              <GridCol isCol1>Col</GridCol>
              <GridCol isCol1>Col</GridCol>
              <GridCol isCol1>Col</GridCol>
              <GridCol isCol1>Col</GridCol>
              <GridCol isCol1>Col</GridCol>
              <GridCol isCol1>Col</GridCol>
              <GridCol isCol1>Col</GridCol>
            </Grid>
          </div>
        </div>
      </div>

      <!-- Hero Banner
      ================================================== -->
      <div class="playground-section is-heading-component">
        <div class="playground-text is-heading-component">Hero Banner</div>
      </div>
      <div class="playground-section is-component">
        <HeroBanner
          :src="'/images/contents/banner-hero.jpg'"
          :heading="'Health Claims Management Service'"
          :description="'HCMS2019 Co., Ltd. is a Third Party Administrator of health insurance and medical welfare benefits providing medical claims assessment and also medical benefits administration service.'"
        />
      </div>

      <!-- Input
      ================================================== -->
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

      <!-- Navigation Bar
      ================================================== -->
      <div class="playground-section is-heading-component">
        <div class="playground-text is-heading-component">Navigation Bar</div>
      </div>
      <div class="playground-section is-component">
        <NavigationBar />
      </div>

      <!-- Panel
      ================================================== -->
      <div class="playground-section is-heading-component">
        <div class="playground-text is-heading-component">Panel</div>
      </div>
      <div class="playground-section is-component">
        <Panel>
          Panel is container for contain varient contents.
        </Panel>
      </div>


      <!-- Table
      ================================================== -->
      <div class="playground-section is-heading-component">
        <div class="playground-text is-heading-component">Table</div>
      </div>
      <div class="playground-section is-component">
        <Table>
          <thead>
            <tr>
              <th>TH</th>
              <th>TH</th>
              <th>TH</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TD</td>
              <td>TD</td>
              <td>TD</td>
            </tr>
            <tr>
              <td>TD</td>
              <td>TD</td>
              <td>TD</td>
            </tr>
            <tr>
              <td>TD</td>
              <td>TD</td>
              <td>TD</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <!-- Textarea
      ================================================== -->
      <div class="playground-section is-heading-component">
        <div class="playground-text is-heading-component">Textarea</div>
      </div>
      <div class="playground-section is-component">
        <div class="playground-lists is-components">
          <div class="playground-list">
            <Textarea
              isFluid
              isMandatory
              :label="'Label'"
              :message="'Message'"
              :placeholder="'Placeholder'"
              :height="100"
              :name="''"
              :value="''"
              :onChangeTextarea="function () {}"
            />
          </div>
          <div class="playground-list">
            <Textarea
              isFluid
              isMandatory
              isError
              :label="'Label'"
              :message="'Message'"
              :placeholder="'Placeholder'"
              :height="100"
              :name="''"
              :value="''"
              :onChangeTextarea="function () {}"
            />
          </div>
          <div class="playground-list">
            <Textarea
              isFluid
              isMandatory
              isDisabled
              :label="'Label'"
              :message="'Message'"
              :placeholder="'Placeholder'"
              :height="100"
              :name="''"
              :value="''"
              :onChangeTextarea="function () {}"
            />
          </div>
        </div>
      </div>

      <!-- XXXXX
      ================================================== -->
      <div class="playground-section is-heading-component">
        <div class="playground-text is-heading-component">XXXXX</div>
      </div>
      <div class="playground-section is-component">
        XXXXX
      </div>
    </Container>
  </div>

</template>

<script>
import Components from "~/components/index.ts";

export default {
  layout: "playground",

  components: {
    ...Components,
  },
}
</script>

<style lang="scss">
  @import "~assets/styleguides/styleguides";

  .playground {
    /* Parent style   ------------------------------ */
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
