<template>
  <section id="resourcesAcademicOverview">
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-12 pb-2">
          <div class="details">
            <h2>Classrooms At UAP:</h2>
            <div v-html="class_room.classroom_description"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(item, i) in class_room.images"
          :key="i"
          class="col-lg-6 py-3"
        >
          <img
            :src="$config.baseURL + item.image"
            :alt="item.created_at"
            class="w-100"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  asyncData({ store, route }) {
    store.dispatch('resourcesAcademic/getClassRoom')
  },
  computed: {
    ...mapGetters('resourcesAcademic', ['class_room']),
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';

#resourcesAcademicOverview {
  .details {
    background: $background-color;
    padding: 80px;
    border-radius: 5px;
    h2 {
      @include title2;
    }
    p {
      @include paragraph;
    }
  }
}
</style>
