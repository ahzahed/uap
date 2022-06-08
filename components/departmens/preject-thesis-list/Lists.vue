<template>
  <section id="project-thesis-list">
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-9 text-center mx-auto">
          <div class="shadow-sm">
            <h2>CSE Project & Thesis List</h2>
            <div class="lists">
              <ul v-for="(item, i) in lists" :key="i">
                <u>
                  <nuxt-link to="#">{{ item.title }}</nuxt-link>
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
  data() {
    return {
      lists: [
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
