<template>
  <div class="home">
    <Container>
      <NavigationBar />
      <div class="home-section is-hero-banner">
        <HeroBanner
          :src="'/images/contents/banner-hero.jpg'"
          :heading="'Health Claims Management Service'"
          :description="'HCMS2019 Co., Ltd. is a Third Party Administrator of health insurance and medical welfare benefits providing medical claims assessment and also medical benefits administration service.'"
        />
      </div>
      <div class="home-section is-our-services">
        <Grid isGutter30 isCenter>
          <GridCol isCol8>
            <div class="home-section is-heading-our-services">
              <Grid isGutter30 isVerticalCenter isSpacebetween>
                <GridCol>
                  <span class="home-text is-heading">Our Services</span>
                </GridCol>
                <GridCol>
                  <Button
                    isColorPrimary
                    :onClick="function () {}"
                  >
                    Add Service
                  </Button>
                </GridCol>
              </Grid>
            </div>
            <Panel>
              <Table class="is-our-services">
                <thead>
                  <tr>
                    <th class="is-service-name"><span class="table-custom-text is-th">Service Name</span></th>
                    <th class="is-description"><span class="table-custom-text is-th">Description</span></th>
                    <th class="is-actions"><span class="table-custom-text is-th">Actions</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="is-service-name">
                      <span v-if="true" class="table-custom-text is-td">Claims Management</span>
                      <Input v-else
                        isFluid
                        :placeholder="'Enter service name'"
                        :name="''"
                        :value="''"
                        :onChangeInput="function () {}"
                      />
                    </td>
                    <td class="is-description">
                      <span v-if="true" class="table-custom-text is-td">To the fullest extent permissible pursuant to applicable law.</span>
                      <Input v-else
                        isFluid
                        :placeholder="'Enter service name'"
                        :name="''"
                        :value="''"
                        :onChangeInput="function () {}"
                      />
                    </td>
                    <td class="is-actions">
                      <Grid v-if="true" isGutter10>
                        <GridCol>
                          <Button
                            isColorPrimary
                            isSmall
                            isNoPadding
                            isShowIconFront
                            :width="75"
                            :iconFrontSrc="'/images/icons/ic-edit-white.svg'"
                            :iconFrontWidth="10"
                            :iconFrontHeight="10"
                            :onClick="function () {}"
                          >
                            Edit
                          </Button>
                        </GridCol>
                        <GridCol>
                          <Button
                            isColorSecondary
                            isSmall
                            isNoPadding
                            isShowIconFront
                            :width="75"
                            :iconFrontSrc="'/images/icons/ic-delete-trash-white.svg'"
                            :iconFrontWidth="10"
                            :iconFrontHeight="12"
                            :onClick="function () {}"
                          >
                            Delete
                          </Button>
                        </GridCol>
                      </Grid>
                      <Grid v-else isGutter10>
                        <GridCol>
                          <Button
                            isColorPrimary
                            isSmall
                            isNoPadding
                            :width="75"
                            :onClick="function () {}"
                          >
                            Save
                          </Button>
                        </GridCol>
                        <GridCol>
                          <Button
                            isColorGray
                            isSmall
                            isNoPadding
                            :width="75"
                            :onClick="function () {}"
                          >
                            Cancel
                          </Button>
                        </GridCol>
                      </Grid>
                    </td>
                  </tr>
                  <tr>
                    <td class="is-service-name">
                      <span v-if="false" class="table-custom-text is-td">Medical Welfare Benefits for Employees</span>
                      <Input v-else
                        isFluid
                        :placeholder="'Enter service name'"
                        :name="''"
                        :value="'Medical Welfare Benefits for Employees'"
                        :onChangeInput="function () {}"
                      />
                    </td>
                    <td class="is-description">
                      <span v-if="false" class="table-custom-text is-td">Refer to the actual policy or the relevant product or services.</span>
                      <Input v-else
                        isFluid
                        :placeholder="'Enter service name'"
                        :name="''"
                        :value="'Refer to the actual policy or the relevant product or services.'"
                        :onChangeInput="function () {}"
                      />
                    </td>
                    <td class="is-actions">
                      <Grid v-if="false" isGutter10>
                        <GridCol>
                          <Button
                            isColorPrimary
                            isSmall
                            isNoPadding
                            isShowIconFront
                            :width="75"
                            :iconFrontSrc="'/images/icons/ic-edit-white.svg'"
                            :iconFrontWidth="10"
                            :iconFrontHeight="10"
                            :onClick="function () {}"
                          >
                            Edit
                          </Button>
                        </GridCol>
                        <GridCol>
                          <Button
                            isColorSecondary
                            isSmall
                            isNoPadding
                            isShowIconFront
                            :width="75"
                            :iconFrontSrc="'/images/icons/ic-delete-trash-white.svg'"
                            :iconFrontWidth="10"
                            :iconFrontHeight="12"
                            :onClick="function () {}"
                          >
                            Delete
                          </Button>
                        </GridCol>
                      </Grid>
                      <Grid v-else isGutter10>
                        <GridCol>
                          <Button
                            isColorPrimary
                            isSmall
                            isNoPadding
                            :width="75"
                            :onClick="function () {}"
                          >
                            Save
                          </Button>
                        </GridCol>
                        <GridCol>
                          <Button
                            isColorGray
                            isSmall
                            isNoPadding
                            :width="75"
                            :onClick="function () {}"
                          >
                            Cancel
                          </Button>
                        </GridCol>
                      </Grid>
                    </td>
                  </tr>
                  <tr>
                    <td class="is-service-name">
                      <span v-if="true" class="table-custom-text is-td">Information System</span>
                      <Input v-else
                        isFluid
                        :placeholder="'Enter service name'"
                        :name="''"
                        :value="''"
                        :onChangeInput="function () {}"
                      />
                    </td>
                    <td class="is-description">
                      <span v-if="true" class="table-custom-text is-td">Actual policy or the relevant product or services agreement.</span>
                      <Input v-else
                        isFluid
                        :placeholder="'Enter service name'"
                        :name="''"
                        :value="''"
                        :onChangeInput="function () {}"
                      />
                    </td>
                    <td class="is-actions">
                      <Grid v-if="true" isGutter10>
                        <GridCol>
                          <Button
                            isColorPrimary
                            isSmall
                            isNoPadding
                            isShowIconFront
                            :width="75"
                            :iconFrontSrc="'/images/icons/ic-edit-white.svg'"
                            :iconFrontWidth="10"
                            :iconFrontHeight="10"
                            :onClick="function () {}"
                          >
                            Edit
                          </Button>
                        </GridCol>
                        <GridCol>
                          <Button
                            isColorSecondary
                            isSmall
                            isNoPadding
                            isShowIconFront
                            :width="75"
                            :iconFrontSrc="'/images/icons/ic-delete-trash-white.svg'"
                            :iconFrontWidth="10"
                            :iconFrontHeight="12"
                            :onClick="function () {}"
                          >
                            Delete
                          </Button>
                        </GridCol>
                      </Grid>
                      <Grid v-else isGutter10>
                        <GridCol>
                          <Button
                            isColorPrimary
                            isSmall
                            isNoPadding
                            :width="75"
                            :onClick="function () {}"
                          >
                            Save
                          </Button>
                        </GridCol>
                        <GridCol>
                          <Button
                            isColorGray
                            isSmall
                            isNoPadding
                            :width="75"
                            :onClick="function () {}"
                          >
                            Cancel
                          </Button>
                        </GridCol>
                      </Grid>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Panel>
          </GridCol>
        </Grid>
      </div>
      <div class="home-section is-contact">
        <div class="home-section is-form-contact">
          <Grid isGutter30 isCenter>
            <GridCol isCol6>
              <div class="home-section is-heading">
                <span class="home-text is-heading">Contact</span>
              </div>
              <div class="home-lists is-form-contact">
                <div class="home-list">
                  <Grid isGutter30>
                    <GridCol isCol6>
                      <Input
                        isMandatory
                        isFluid
                        :label="'First name'"
                        :placeholder="'Enter your first name'"
                        :name="''"
                        :value="''"
                        :onChangeInput="function () {}"
                      />
                    </GridCol>
                    <GridCol isCol6>
                      <Input
                        isMandatory
                        isFluid
                        :label="'Last name'"
                        :placeholder="'Enter your last name'"
                        :name="''"
                        :value="''"
                        :onChangeInput="function () {}"
                      />
                    </GridCol>
                  </Grid>
                </div>
                <div class="home-list">
                  <Input
                    isMandatory
                    isFluid
                    :label="'Email address'"
                    :placeholder="'Enter your email address eg john@mail.com'"
                    :name="''"
                    :value="''"
                    :onChangeInput="function () {}"
                  />
                </div>
                <div class="home-list">
                  <Input
                    isMandatory
                    isFluid
                    :label="'Title'"
                    :placeholder="'Enter your contact title'"
                    :name="''"
                    :value="''"
                    :onChangeInput="function () {}"
                  />
                </div>
                <div class="home-list">
                  <Textarea
                    isFluid
                    :label="'Description'"
                    :placeholder="'Enter your contact description'"
                    :height="108"
                    :name="''"
                    :value="''"
                    :onChangeTextarea="function () {}"
                  />
                </div>
              </div>
            </GridCol>
          </Grid>
        </div>
        <div class="home-section is-button-send">
          <Button
            isColorPrimary
            :width="125"
            :onClick="function () {}"
          >
            Send
          </Button>
        </div>
      </div>
    </Container>
    <Footer />
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
    .test {
      height: 40px;
      background-color: red;
    }

    /* Children style ------------------------------ */
    .home-section {
      &.is-hero-banner {
        margin: 0 0 45px;
      }

      &.is-our-services {
        margin: 0 0 35px;
      }

      &.is-contact {
        margin: 0 0 90px;
      }

      &.is-heading {
        margin: 0 0 30px;
        text-align: center;
      }

      &.is-heading-our-services {
        margin: 0 0 27px;
      }

      &.is-form-contact {
        margin: 0 0 30px;
      }

      &.is-button-send {
        text-align: center;
      }
    }

    .home-text {
      &.is-heading {
        @include typography-primary-bold-24;
        color: $color-primary-1;
      }
    }

    .home-lists {
      &.is-form-contact {
        .home-list {
            margin: 0 0 25px;

          &:last-child {
            margin: 0;
          }
        }
      }
    }

    /* Other component style ----------------------- */
  }
</style>
