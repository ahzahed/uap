<template>
  <section id="trustees">
    <div class="container">
      <div class="col-md-10 mx-auto">
        <div v-for="(item, i) in items" :key="i" class="mb-4">
          <div class="row cardContainer">
            <div class="col-lg-4 col-md-4 col-sm-12 px-0">
              <img
                :src="item.img"
                class="img-fluid h-100 w-100"
                :alt="item.title"
              />
            </div>
            <div class="col-lg-8 col-md-8 col-sm-12 px-0">
              <div class="card-body p-5">
                <h5>{{ item.name }}</h5>
                <p>{{ item.designation }}</p>
                <h5>Occupation</h5>
                <p>
                  {{ item.occupation }}
                </p>
                <h5>Address</h5>
                <p>{{ item.address }}</p>
                <h5>Email</h5>
                <p>{{ item.email }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style scoped>
.pr-0 {
  padding-right: 0px !important;
}
.pl-0 {
  padding-left: 0px !important;
}
</style>
