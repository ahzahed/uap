<template>
  <section id="project-thesis-list">
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-9 text-center mx-auto">
          <div class="shadow-sm">
            <h2>CSE Project & Thesis List</h2>
            <div v-if="lists.length > 0" class="lists">
              <ul v-for="(item, i) in lists" :key="i">
                <u>
                  <a :href="$config.baseURL + item.file" target="_blank">{{
                    item.file_title
                  }}</a>
                </u>
              </ul>
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
    // eslint-disable-next-line vue/require-default-prop
    lists: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      allLists: [
        {
          title: 'Spring 2021',
          url: '#',
        },
        {
          title: 'Summer 2021',
          url: '#',
        },
        {
          title: 'Fall 2021',
          url: '#',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#project-thesis-list {
  h2 {
    background-color: $background-color;
    border-radius: 5px;
    padding-top: 27px;
    padding-bottom: 27px;
    @include title2;
    font-weight: 600;
  }
  .lists {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}
</style>
