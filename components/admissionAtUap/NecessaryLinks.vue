<template>
  <section id="NecessaryLinks">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="text-center bottom">
            <h2>Necessary Links</h2>
          </div>
        </div>
      </div>
      <div class="row m-0" style="background: #f0f0fa">
        <div class="col-lg-6 col-md-6 left">
          <ul class="leftContent nav flex-column">
            <li
              v-for="(item, i) in admission_necessary_list.firstHalf"
              :key="i"
              class="nav-item"
            >
              <nuxt-link to="#" class="nav-link">{{
                item.link_title
              }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="col-lg-6 col-md-6 right">
          <ul class="rightContent nav flex-column">
            <li
              v-for="(item, i) in admission_necessary_list.secondHalf"
              :key="i"
              class="nav-item"
            >
              <nuxt-link to="#" class="nav-link">{{
                item.link_title
              }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/prop-name-casing
    admission_necessary_list: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      links: [
        { link: 'Info Regarding Tuition Fees', url: '#' },
        {
          link: 'What are the requirements for admission',
          url: '#',
        },
        {
          link: 'Info regarding Admission Tests/Exams',
          url: '#',
        },
        {
          link: 'Info regarding Admission Test Results',
          url: '#',
        },
        {
          link: 'Online Application Form',
          url: '#',
        },
        {
          link: 'Info Regarding Financial Aid & Waiver',
          url: '#',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#NecessaryLinks {
  margin-top: 95px;
  margin-bottom: 95px;
  h2 {
    @include title2;
  }
  p {
    @include paragraph;
  }
  .left {
    padding-right: 0px;
    @include respond-below(md) {
      padding-right: 12px;
    }
    .leftContent {
      border-top-left-radius: 5px;
      //   height: 279px;
      padding: 80px 0px 80px 70px;
      text-align: left;
      @include respond-below(md) {
        padding: 10px;
      }
    }
  }
  .right {
    padding-left: 0px;
    @include respond-below(md) {
      padding-left: 12px;
    }
    .rightContent {
      border-top-right-radius: 5px;
      text-align: left;
      //   height: 279px;
      padding: 80px 0px 80px 70px;
      @include respond-below(md) {
        padding: 10px;
      }
    }
  }
  .bottom {
    p {
      margin-bottom: 0px;
    }
    color: $white;
    padding: 11px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: $darkblue;
  }
}
</style>
