<template>
  <!-- <section id="allFaq"> -->
  <div id="tutionGraduate">
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-12 mx-auto">
          <div id="accordionExample" class="table-responsive">
            <table
              v-for="(item, i) in dates"
              :key="i"
              class="table text-center"
            >
              <thead>
                <tr>
                  <th
                    id="headingOne"
                    colspan="3"
                    class="heading"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    :aria-expanded="true"
                    aria-controls="collapseOne"
                    @click="
                      () => {
                        accoladingSlide(item.id)
                        show = !show
                      }
                    "
                  >
                    <!-- <div
                       
                        
                      > -->
                    {{ item.title }}
                    <!-- </div> -->
                  </th>
                </tr>
              </thead>
              <tbody
                id="collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
                :class="show && item.id == showindex ? 'show' : ''"
              >
                <tr>
                  <th class="title">
                    {{
                      item.deadline.length > 0 &&
                      item.deadline[0].importent_date_title
                    }}
                  </th>
                  <th class="title">
                    {{ item.deadline.length > 0 && item.deadline[0].date }}
                  </th>
                </tr>
                <tr v-for="(deadline, j) in item.deadline.slice(1)" :key="j">
                  <td class="data">{{ deadline.importent_date_title }}</td>
                  <td class="data">&#2547; {{ deadline.date }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="container">
      <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-lg-10">
          <div id="accordionExample" class="accordion">
            <div v-for="(item, i) in dates" :key="i" class="accordion-item">
              <h2 id="headingOne" class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  :aria-expanded="true"
                  aria-controls="collapseOne"
                  @click="
                    () => {
                      accoladingSlide(item.id)
                      show = !show
                    }
                  "
                >
                  {{ item.department }}
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
                :class="show && item.id == showindex ? 'show' : ''"
              >
                <div class="accordion-body">
                  <p v-html="item.desc">sda fasdfasd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-1"></div>
      </div>
    </div> -->
  <!-- </section> -->
</template>

<script>
export default {
  props: {
    dates: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      show: true,
      showindex: 1,
      accolades: [
        {
          index: 1,
          title: 'Business & Administration',
        },
        {
          index: 2,
          title: 'Computer Science',
        },
        {
          index: 3,
          title: 'Civil Engineering',
        },
        {
          index: 4,
          title: 'EEE Department',
        },
      ],
    }
  },
  methods: {
    accoladingSlide(i) {
      this.showindex = i
      this.show = !this.show
      // setTimeout(() => {
      //   this.show = !this.show
      // }, 1000)
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
// #allFaq {
#tutionGraduate {
  padding-bottom: $section-padding;
  table {
    border-radius: 5px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.5);
    .heading {
      @include title2;
      background: $background-color;
      padding-top: 25px;
      padding-bottom: 25px;
      color: $light-gray;
      font-weight: 600;
    }
    .title {
      @include cardPara;
      font-weight: 600;
      color: $darkblue;
      background: $background-color;
      padding-bottom: 25px;
      padding-top: 25px;
      text-align: center;
    }
    .data {
      @include cardPara;
      padding-bottom: 25px;
      padding-top: 25px;
      color: $darkblue;
      text-align: center;
    }
  }
}
//   padding-top: $section-padding;
//   padding-bottom: $section-padding;
//   h1 {
//     @include title;
//     font-weight: bold;
//     color: $darkblue;
//   }
//   button {
//     @include title2;
//     color: $light-gray;
//     background-color: $lightblue;
//     padding: 49px 66px;
//     @include respond-below(sm) {
//       padding: 15px;
//     }
//   }
//   p {
//     padding-top: 50px;
//     padding-bottom: 50px;
//     padding-left: 98px;
//     @include respond-below(sm) {
//       padding: 20px;
//     }
//     @include respond-below(xsl) {
//       padding: 10px;
//     }
//   }
// }
</style>
