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
              <div v-html="specialWaiverInformations.notes"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import waiverLogo from '../../static/waiver/special-waiver.png'

export default {
  props: {
    specialWaiverInformations: {
      type: Object,
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

<style lang="scss" scoped>
@import './styles/_main.scss';
</style>
