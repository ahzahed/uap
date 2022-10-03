<template>
  <div class="container">
    <div class="members-list-card card">
      <div class="card-header"></div>
      <div v-if="committees.data" class="card-body">
        <div class="row">
          <div
            v-for="(member, key) in committees.data"
            v-show="member.designation === 'Acting Vice-Chancellor'"
            :key="`lead_${key}`"
            class="col-md-4 col-lg-4 col-xl-4 col-sm-6 member-item mx-auto"
          >
            <h4 class="member-name">{{ member.name }}</h4>
            <span class="member-role"> {{ member.designation }}</span>
          </div>
        </div>
        <div class="row">
          <template v-for="(member, key) in committees.data">
            <div
              v-if="membarShow(member)"
              :key="`member_${key}`"
              class="col-md-4 col-lg-4 col-xl-4 col-sm-6 member-item"
            >
              <h4 class="member-name">{{ member.name }}</h4>
              <span class="member-role"> {{ member.designation }}</span>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import { mapGetters } from 'vuex'
export default {
  name: '',
  asyncData({ route, store }) {
    store.dispatch('committee/allCommittee', route.query.id)
  },

  computed: {
    ...mapGetters('committee', ['committees']),
  },

  methods: {
    membarShow(member) {
      if (member.designation === 'Acting Vice-Chancellor') {
        return false
      } else {
        return true
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@import './styles/_main.scss';

.card {
  .card-header {
    background-color: $darkblue;

    padding: 14px;
    border-radius: 5px;
  }
  .card-body {
    text-align: center;
    .card-name {
      font-size: 15px;
      font-weight: 600;
      color: $text-color;
      line-height: normal;
      margin: 0 0 22px;
    }
    .card-role {
      font-size: 12px;
      font-stretch: normal;
      font-weight: 500;
      $text-color: $text-color;
    }
  }
}
.members-list-card {
  .card-body {
    padding: 100px;
    @include respond-below(lg) {
      padding: 30px;
    }
    .member-item {
      border: 1px solid #ccc;
      @include respond-below(sm) {
        padding: 20px 5px;
      }
      padding: 25px 15px;
      .member-name {
        font-size: 21px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        margin: 0 0 22px;
      }
    }
  }
}
</style>
