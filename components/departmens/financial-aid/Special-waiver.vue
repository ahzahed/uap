<template>
  <div id="special-waiver">
    <div class="container">
      <div class="row">
        <div class="col-md-10">
          <div class="card main-specialWaiver">
            <div class="mx-auto logo-top">
              <span class="logo">
                <img :src="waiver.logo" class="w-100" :alt="waiver.adderss" />
              </span>
              <h3>SPECIAL WAIVER</h3>
            </div>
            <div class="info-top card-body">
              <div
                v-for="(
                  specialWaiverInformation, i
                ) in specialWaiverInformations"
                :key="i"
                class="info"
              >
                <h4>{{ specialWaiverInformation.title }}</h4>
                <p>{{ specialWaiverInformation.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import waiverLogo from '../../../static/waiver/special-waiver.png'

export default {
  props: {
    specialWaiverInformations: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      waiver: {
        logo: waiverLogo,
        adderss: 'logo',
      },
    }
  },
}
</script>

<style></style>
