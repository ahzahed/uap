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
                <ul v-for="(information, i) in generalInformations" :key="i">
                  <li>{{ information.info }}</li>
                </ul>
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
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>

<style></style>
