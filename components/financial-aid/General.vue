<template>
  <div id="general">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="main-general">
            <div class="top">
              <h5 class="">
                General Criteria for semester based tuition fee waiver
              </h5>
              <p>
                (including Vice Chancellor‘s Special Tuition fee waiver and
                Freedom Fighters Quota waiver)
              </p>
            </div>
            <div class="info-top">
              <div class="info">
                <div v-html="generalInformations.notes"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    generalInformations: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';


</style>
