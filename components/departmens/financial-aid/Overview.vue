<template>
    <div id="overview">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="main-overview">
                        <h1>Overview: Financial assistance & waiver volume</h1>
                        <div v-for="(overviewInformation, i) in overviewInformations" :key="i">
                            <p>{{overviewInformation.info}}</p>
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
    overviewInformations: {
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