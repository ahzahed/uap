<template>
  <section id="informalActivitySpaces">
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-12 pb-2">
          <div class="details">
            <h2>Overview</h2>
            <!-- <p>
              {{
                city_campus_details.cityCampusOverview &&
                city_campus_details.cityCampusOverview.overview
              }}
            </p> -->
            <div
              v-html="
                city_campus_details.cityCampusOverview &&
                city_campus_details.cityCampusOverview.overview
              "
            ></div>
          </div>
        </div>
      </div>
      <div
        v-for="(item, i) in city_campus_details.cityCampusList"
        :key="i"
        class="row"
      >
        <h3 class="title mt-5">{{ item.title }}</h3>
        <div v-for="(file, j) in item.files" :key="j" class="col-lg-6 py-3">
          <img
            :src="$config.baseURL + file.image"
            :alt="file.id"
            class="w-100"
          />
        </div>
        <div class="col-lg-12">
          <p class="note">
            {{ item.some_description }}
          </p>
        </div>
      </div>
      <!-- <div class="row">
        <h3 class="title mt-5">Central Atrium</h3>
        <div
          v-for="(item, i) in informalActivitySpaces.centralAtrium"
          :key="i"
          class="col-lg-6 py-3"
        >
          <img :src="item.img" alt="" class="w-100" />
        </div>
        <div class="col-lg-12">
          <p class="note">
            Start of the Day and the end of the day, Different times -different
            seasons
          </p>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapGetters } from 'vuex'
export default {
  name: '',
  asyncData({ route, store }) {
    store.dispatch('resourceCityCampus/getCityCampusDetails', route.query.id)
  },
  data() {
    return {}
  },

  computed: {
    ...mapGetters('resourceCityCampus', ['city_campus_details']),
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';

#informalActivitySpaces {
  .details {
    background: $background-color;
    padding: 50px;
    border-radius: 5px;
    @include respond-below(xs) {
      padding: 15px;
      text-align: justify;
    }
    h2 {
      @include title2;
    }
    p {
      @include paragraph;
    }
  }
  .title {
    @include title2;
    font-weight: bold;
    color: $darkblue;
    text-align: center;
  }
  .note {
    border-left: 11px solid $darkblue;
    background: $violot;
    padding: 23px;
    @include paragraph;
    font-weight: 500;
  }
}
</style>
