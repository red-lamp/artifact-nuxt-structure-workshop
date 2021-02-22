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
                  <Button isColorPrimary :onClick="onClickAddService">
                    Add Service
                  </Button>
                </GridCol>
              </Grid>
            </div>
            <Panel>
              <Table class="is-our-services">
                <thead>
                  <tr>
                    <th class="is-service-name">
                      <span class="table-custom-text is-th">Service Name</span>
                    </th>
                    <th class="is-description">
                      <span class="table-custom-text is-th">Description</span>
                    </th>
                    <th class="is-actions">
                      <span class="table-custom-text is-th">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(e, i) in serviceList" :key="i">
                    <td class="is-service-name">
                      <Input
                        v-if="e.isEdit"
                        isFluid
                        :placeholder="'Enter service name'"
                        :name="'editName'"
                        :value="e.editName"
                        :onChangeInput="onChangeInputService.bind(this, i)"
                      />
                      <span v-else class="table-custom-text is-td">{{
                        e.name
                      }}</span>
                    </td>
                    <td class="is-description">
                      <Input
                        v-if="e.isEdit"
                        isFluid
                        :placeholder="'Enter description'"
                        :name="'editDescription'"
                        :value="e.editDescription"
                        :onChangeInput="onChangeInputService.bind(this, i)"
                      />
                      <span v-else class="table-custom-text is-td">
                        {{ e.description }}
                      </span>
                    </td>
                    <td class="is-actions">
                      <Grid v-if="e.isEdit" isGutter10>
                        <GridCol>
                          <Button
                            isColorPrimary
                            isSmall
                            isNoPadding
                            :width="75"
                            :onClick="onClickSaveEditService.bind(this, i)"
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
                            :onClick="onClickCancelEditService.bind(this, i)"
                          >
                            Cancel
                          </Button>
                        </GridCol>
                      </Grid>
                      <Grid v-else isGutter10>
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
                            :onClick="onClickEditService.bind(this, i)"
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
                            :onClick="onClickDeleteService.bind(this, i)"
                          >
                            Delete
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
                        :isError="contact.isFirstnameError"
                        :message="
                          contact.isFirstnameError ? messageError : undefined
                        "
                        :label="'First name'"
                        :placeholder="'Enter your first name'"
                        v-model="contact.firstname"
                      />
                    </GridCol>
                    <GridCol isCol6>
                      <Input
                        isMandatory
                        isFluid
                        :isError="contact.isLastnameError"
                        :message="
                          contact.isLastnameError ? messageError : undefined
                        "
                        :label="'Last name'"
                        :placeholder="'Enter your last name'"
                        v-model="contact.lastname"
                      />
                    </GridCol>
                  </Grid>
                </div>
                <div class="home-list">
                  <Input
                    isMandatory
                    isFluid
                    :isError="contact.isEmailError"
                    :message="contact.isEmailError ? messageError : undefined"
                    :label="'Email address'"
                    :placeholder="'Enter your email address eg john@mail.com'"
                    v-model="contact.email"
                  />
                </div>
                <div class="home-list">
                  <Input
                    isMandatory
                    isFluid
                    :isError="contact.isTitleError"
                    :message="contact.isTitleError ? messageError : undefined"
                    :label="'Title'"
                    :placeholder="'Enter your contact title'"
                    v-model="contact.title"
                  />
                </div>
                <div class="home-list">
                  <Textarea
                    isFluid
                    :label="'Description'"
                    :placeholder="'Enter your contact description'"
                    :height="108"
                    v-model="contact.description"
                  />
                </div>
              </div>
            </GridCol>
          </Grid>
        </div>
        <div class="home-section is-button-send">
          <Button isColorPrimary :width="125" :onClick="onClickSubmitContact">
            Send
          </Button>
        </div>
      </div>
    </Container>
    <Footer />
  </div>
</template>

<script>
import Components from '~/components/index.ts';

export default {
  components: {
    ...Components,
  },

  data() {
    return {
      serviceList: [
        {
          name: 'Claims Management',
          description:
            'To the fullest extent permissible pursuant to applicable law.',
          isEdit: false,
        },
        {
          name: 'Medical Welfare Benefits for Employees',
          description:
            'Refer to the actual policy or the relevant product or services.',
          isEdit: false,
        },
        {
          name: 'Information System',
          description:
            'Actual policy or the relevant product or services agreement.',
          isEdit: false,
        },
      ],

      contact: {
        firstname: '',
        isFirstnameError: false,
        lastname: '',
        isLastnameError: false,
        email: '',
        isEmailError: false,
        title: '',
        isTitleError: false,
        description: '',
      },
      messageError: 'Please enter mandatory information.',
    };
  },

  methods: {
    //===========
    //=========== service
    //===========
    onClickAddService() {
      this.serviceList.push({
        name: '',
        editName: '',
        description: '',
        editDescription: '',
        isEdit: false,
      });
    },
    onClickEditService(index) {
      const data = this.serviceList[index];
      data.editName = data.name;
      data.editDescription = data.description;
      data.isEdit = true;
      this.serviceList[index] = data;
    },
    onClickDeleteService(index) {
      this.serviceList.splice(index, 1);
    },
    onClickSaveEditService(index) {
      const data = this.serviceList[index];
      data.name = data.editName;
      data.description = data.editDescription;
      data.isEdit = false;
      this.serviceList[index] = data;
    },
    onClickCancelEditService(index) {
      this.serviceList[index].isEdit = false;
    },
    onChangeInputService(index, ev) {
      const name = ev.target.name;
      const value = ev.target.value;
      this.serviceList[index][name] = value;
    },
    //===========
    //=========== contact
    //===========
    onClickSubmitContact() {
      console.log('onClickSubmitContact', this.contact);
      this.contact.isFirstnameError = this.contact.firstname.length === 0;
      this.contact.isLastnameError = this.contact.lastname.length === 0;
      this.contact.isEmailError = this.contact.email.length === 0;
      this.contact.isTitleError = this.contact.title.length === 0;
    },
  },
};
</script>

<style lang="scss">
@import '~assets/styleguides/styleguides';

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
