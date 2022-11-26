<template>
  <section id="MemberCampusAdministration">
    <div class="container">
      <div class="col-md-10 mx-auto">
        <div
          v-for="(information, i) in administrattionInformation"
          :key="i"
          class="mb-4"
        >
          <div class="row cardContainer">
            <div class="col-lg-4 col-md-4 col-sm-12 px-0 top">
              <div class="">
                <img
                  :src="information.img"
                  class="main-img"
                  :alt="information.info"
                />
              </div>
              <div class="text-left img-text">
                <span>
                  <p class="name">{{ information.name }}</p>
                  <p class="title">{{ information.title }}</p></span
                >
              </div>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-12 px-0">
              <div class="card-body p-5 text-justify">
                <p class="info">{{ information.info }}</p>
              </div>
              <div class="d-flex align-items-end flex-column bd-highlight">
                <ul class="nav ms-auto p-2 bd-highlight">
                  <li v-for="(item, j) in socalicons" :key="j" class="nav-item">
                    <nuxt-link class="nav-link" to=""
                      ><img :src="item.img"
                    /></nuxt-link>
                  </li>
                </ul>
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
    administrattionInformation: {
      type: Array,
      required: true,
    },
    socalicons: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>
