<template>
  <div>
    <section id="resourceServiceChart">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 my-5 m-auto">
            <div class="text_box_five">
              <h2>Application Form</h2>
              <ul v-for="(item, i) in value.chart_fqa" :key="i">
                <li>
                  <a
                    :href="$config.baseURL + item.file"
                    target="_blank"
                    class="nav-link"
                    >{{ item.file_title }}</a
                  >
                </li>
                <hr />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="resourceServiceChartTable">
      <div class="container">
        <div class="main-new-student">
          <div class="main_new_student_header">
            <h5 class="">Services in a nutshell</h5>
            <p>
              (Application Forms are available at the department/ also on the
              website and Application Form to be submitted to the Departmental
              Admin. Officer, except Form # F-04)
            </p>
          </div>
          <div class="table-top table-responsive">
            <table
              class="table table-borderless table-responsive table-striped table-bordered"
            >
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Use Form #</th>
                  <th>Prerequisite</th>
                  <th>Fees</th>
                  <th>Documents to be submitted along with the application</th>
                  <th>Tentative days of Delivery from Exam. office</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in value.services_nutshell" :key="i">
                  <td>{{ item.service }}</td>
                  <td>{{ item.use_form }}</td>
                  <td v-html="item.prerequisite"></td>
                  <td>{{ item.fees }}</td>
                  <td>{{ item.receipt }}</td>
                  <td v-html="item.office"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },

  
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#resourceServiceChart {
  .heading {
    background-color: $darkblue;
    padding-top: 23px;
    padding-bottom: 23px;
    border-radius: 5px;
    h1 {
      @include title2;
      margin-bottom: 0px;
      color: $white;
    }
    p {
      color: $white;
      @include paragraph;
    }
  }

  .text_box_one {
    background-color: $lightblue;
    padding: 92px 111px;
    text-align: justify;
    @include respond-below(lg) {
      padding: 80px 70px;
    }
    @include respond-below(sm) {
      padding: 40px 30px;
    }
    @include paragraph;
  }
  .text_box_two {
    background-color: $background-color;
    padding: 92px 111px;
    text-align: justify;
    @include respond-below(lg) {
      padding: 80px 70px;
    }
    @include respond-below(sm) {
      padding: 40px 30px;
    }
    @include paragraph;
  }
  .text_box_five {
    border-radius: 5px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    min-height: 380px;

    @include respond-below(lg) {
      margin-top: 20px;
    }
    h2 {
      @include title2;
      padding-left: 85px;
      padding-top: 25px;
      padding-bottom: 25px;
      background-color: $background-color;
      border-radius: 5px;
      @include respond-below(xs) {
        text-align: center;
        padding-left: 0px;
      }
    }
  }
}

#resourceServiceChartTable {
  margin-bottom: $section-padding;
  .main-new-student {
    .main_new_student_header {
      background-color: $lightblue;
      text-align: center;
      border-bottom: 1px solid $darkblue;
      padding: 30px 100px;
      @include respond-below(md) {
        padding: 30px 50px;
      }
      h5 {
        @include title2;
        color: $light-gray;
      }
      p {
        @include paragraph;
        font-weight: 500;
        color: $darkblue;
      }
    }
    .table-top {
      .subtile {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 85%;
        .col-6 {
          text-align: left;
        }
        .diploma {
          text-align: right !important;
        }
        .subtitle-text {
          font-weight: 600;
        }
      }

      thead {
        background-color: $lightblue;
        vertical-align: top !important;

        tr {
          th {
            @include title3;
            font-weight: 600;
            text-align: center;
            color: $darkblue;
            .subtile {
              span {
                @include cardPara;
                font-weight: 300;
                font-size: 14px;
                text-align: center;
                color: $text-color !important;
              }
            }
            @include respond-above(lg) {
              padding-top: 15px;
              padding-bottom: 20px;
            }
          }
        }
      }
      tbody {
        tr {
          td {
            @include cardPara;
            font-size: 14px;
            font-weight: 300;
            // text-align: center;
            color: $darkblue;
          }
        }
      }
    }
    .special-option {
      border-radius: $border-radius;
      // box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
      background-color: $background-color;
      background-color: $lightblue;
      padding: 50px 145px;
      h5 {
        @include cardPara;
        font-weight: 600;
        text-align: left;
        color: $darkblue;
      }
      .info {
        margin-top: 12px;
        ul {
          padding-left: 25px;
          li {
            padding-left: 6px;
            // @include cardPara;
            // font-weight: 300;
            // text-align: left;
            // color: $text-color;
            list-style-type: disc !important;
          }
        }
      }
    }
  }
}
</style>
