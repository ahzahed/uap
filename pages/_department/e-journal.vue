<template>
  <section id="admissionTest">
    <Banner :banner="e_journal_banner" />
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="table-responsive-lg">
            <table class="table text-center">
              <thead>
                <tr>
                  <th colspan="3" class="heading">
                    List Of Published Journals
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th v-for="(item, i) in column" :key="i" class="title">
                    {{ item }}
                  </th>
                </tr>
                <tr v-for="(item, i) in e_journal_body" :key="i">
                  <td class="data">{{ item.file_title }}</td>
                  <td class="data">
                    {{ $moment(item.schedule).format('MMMM DD, YYYY') }}
                  </td>
                  <td class="data">
                    <a
                      :href="$config.baseURL + item.file"
                      target="_blank"
                      class="primary-btn"
                      >Download</a
                    >
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
import Banner from '../../components/helpers/Banner.vue'

export default {
  components: { Banner },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch('eJournal/getEjournalBanner', route.params.department)
    store.dispatch('eJournal/getEjournalBody', route.params.department)
  },
  data() {
    return {
      column: ['Faculty/Department', 'Schedule', 'Sample Question'],
    }
  },
  computed: {
    ...mapGetters('eJournal', ['e_journal_body', 'e_journal_banner']),
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
      background: $background-color;
      padding-top: 80px;
      padding-bottom: 40px;
      color: $light-gray;
    }
    .title {
      @include cardPara;
      font-weight: 600;
      color: $darkblue;
      background: $background-color;
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
  }
}
</style>
