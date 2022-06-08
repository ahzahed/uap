<template>
    <div id="overview">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="main-overview">
                        <h1>{{overviewInformations.title}}</h1>
                        <div v-html="overviewInformations.description">
                           
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
      type: Object,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>

<style></style>