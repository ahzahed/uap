<template>
  <section id="departments-section">
    <div class="breadcrumb-area shadow dark text-center text-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <h1>Departments</h1>
            <ul class="breadcrumb justify-content-center">
              <li>
                <nuxt-link to="/"><i class="fas fa-home"></i> Home</nuxt-link>
              </li>
              >
              <li class="departments">Departments</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- end container -->
    </div>
    <Message :dean="deanOfSchool" />

    <div class="container mt-5">
      <div class="panel panel-default">
        <div class="panel-heading">Departments under school</div>
        <div class="panel-body">
          <div class="row">
            <nuxt-link
              v-for="(item, i) in departmentListUnderSchool"
              :key="i + 'department'"
              class="col-md-4 mb-4"
              :to="'/' + item.department"
            >
              <div class="card">
                <img
                  :src="$config.baseURL + item.image"
                  class="card-img-top"
                  :alt="item.title"
                />
                <div class="card-body">
                  {{ item.title }}
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
import Message from '../../components/messageDean/Message.vue'

export default {
  components: { Message },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch('school/getDepartmentListUnderSchool', route.params.slug)
    store.dispatch('school/getDeanOfSchool', route.params.slug)
  },
  
  computed: {
    ...mapGetters('school', ['departmentListUnderSchool', 'deanOfSchool']),
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#departments-section {
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
}
</style>
