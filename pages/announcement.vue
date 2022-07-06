<template>
  <section id="admissionTest">
    <Banner :banner="announcement_banner" />
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="table-responsive-lg">
            <table class="table text-center">
              <thead>
                <tr>
                  <th colspan="3" class="heading">Announcements</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th v-for="(item, i) in column" :key="i" class="title">
                    {{ item }}
                  </th>
                </tr>
                <tr v-for="(item, i) in announcement_body" :key="i">
                  <td class="data">{{ item.title }}</td>
                  <td class="desc" v-html="item.description"></td>
                  <td class="data">
                    <a :href="$config.baseURL + item.file" target="_blank">
                      {{ item.file_title }}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../components/helpers/Banner.vue'

export default {
  components: { Banner },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch('announcement/getAnnouncementBanner')
    store.dispatch('announcement/getAnnouncementBody')
  },
  data() {
    return {
      column: ['Title', 'Description', 'File'],
    }
  },
  computed: {
    ...mapGetters('announcement', ['announcement_banner', 'announcement_body']),
  },
}
</script>
<style lang="scss" scoped>
@import './styles/_main.scss';
#admissionTest {
  // padding-top: $section-padding;
  // padding-bottom: $section-padding;
  table {
    margin-top: 60px;
    border-radius: 5px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.5);
    .heading {
      @include title2;
      background: $lightblue;
      padding-top: 80px;
      padding-bottom: 40px;
      color: $light-gray;
    }
    .title {
      @include cardPara;
      font-weight: 600;
      color: $darkblue;
      background: $lightblue;
      padding-bottom: 55px;
      padding-top: 55px;
      text-align: center;
    }
    .data {
      @include cardPara;
      padding-bottom: 55px;
      padding-top: 55px;
      color: $darkblue;
      text-align: center;
    }
    .desc {
      @include title3;
      padding-bottom: 55px;
      padding-top: 55px;
      color: $darkblue;
      text-align: center;
      font-weight: normal;
    }
  }
}
</style>
