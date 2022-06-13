<template>
  <section class="departments-section">
    <div class="breadcrumb-area shadow dark text-center text-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <h1>Schools</h1>
            <ul class="breadcrumb justify-content-center">
              <li>
                <nuxt-link to="/"><i class="fas fa-home"></i> Home</nuxt-link>
              </li>
              <li class="departments">Departments</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- end container -->
    </div>

    <div class="container">
      <div class="panel panel-default">
        <div class="panel-heading">List of Schools</div>
        <div class="panel-body">
          <div class="row">
            <nuxt-link
              v-for="(item, i) in schoolList"
              :key="i + 'department'"
              class="col-md-4"
              :to="'/schools/' + item.slug"
            >
              <div class="card">
                <img
                  src="../../assets/card.jpeg"
                  class="card-img-top"
                  :alt="item.title"
                />
                <div class="card-body">
                  {{ item.school_name }}
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {},
  layout: 'HomeLayout',
  asyncData({ store }) {
    store.dispatch('school/getSchoolList')
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('school', ['schoolList']),
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
.departments-title {
  padding: 10px;
}
.breadcrumb-area {
  min-height: 50vh;
  padding: 90px 50px 50px 0px;

  background-image: url(../../assets/uni.jpg);
  background-repeat: no-repeat;

  background-size: cover;
  background-color: $primary;
  background-position: center;
  .breadcrumb {
    li {
      padding: 0 10px;
      position: relative;
      z-index: 0.7;
      .nuxt-link-active {
        color: #fff;
      }
    }
    .departments {
      color: #fff;
      opacity: 0.5;
    }
  }
}
.panel {
  padding-top: 60px;
  padding-bottom: 60px;
  .panel-heading {
    font-size: 18px;
    padding: 10px 15px;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background: $darkblue;
    color: #fff;
  }
  .panel-body {
    padding: 15px;
    border: 1px solid #eee;
    .card-body {
      @include cardTitle;
    }
  }
}
</style>
