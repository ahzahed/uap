<template>
  <section id="aboutDetails">
    <div class="container">
      <div class="row">
        <div class="col-lg-1 col-md-1"></div>
        <div class="col-lg-10 col-md-10">
          <div class="mt-5" v-html="details.message"></div>
        </div>
        <div class="col-lg-1 col-md-1"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    details: {
      required: true,
      type: Object,
    },
  },
}
</script>

<style></style>
