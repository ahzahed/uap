<template>
  <div class="container">
    <!-- <div class="col-md-7 mx-auto">
      <div class="card mb-3">
        <div class="card-header">Chairperson</div>
        <div class="card-body">
          <h2 class="card-name">{{ chairperson.name }}</h2>
          <span class="card-role">{{ chairperson.designation }}</span>
        </div>
      </div>
    </div> -->
    <div class="members-list-card card">
      <div class="card-header"></div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-4 col-lg-4 col-xl-4 col-sm-6 member-item mx-auto">
            <h4 class="member-name">{{ chairperson.name }}</h4>
            <span class="member-role">{{ chairperson.designation }}</span>
          </div>
        </div>
        <div class="row">
          <div
            v-for="(member, key) in members"
            :key="'member_' + key"
            class="col-md-4 col-lg-4 col-xl-4 col-sm-6 member-item"
          >
            <h4 class="member-name">{{ member.name }}</h4>
            <span class="member-role"> {{ member.designation }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  props: {
    members: {
      type: Array,
      required: true,
    },
    chairperson: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
@import './styles/_members.scss';
</style>
