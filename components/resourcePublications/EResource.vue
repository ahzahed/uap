<template>
  <section id="researchIEERD">
    <section id="e-resources" class="mt-5">
      <div class="container">
        <div class="main-table">
          <div class="text-center creditHead">
            <h3>E-Resources LIST</h3>
            <p>
              UAP Central Library subscribes to a large number of
              internationally renowned online journals; these e-resources are
              accessible both on and off-campus. The list of e-resources
              available at the library are the following:
            </p>
          </div>
          <table
            class="table table-borderless table-responsive shadow-sm table-striped table-bordered"
          >
            <thead>
              <tr>
                <th>serial No.</th>
                <th>DATABASE NAME</th>
                <th>SUBJECT STRENGTH</th>
                <th>DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <!-- <tr class="xxx">
                <td colspan="4">UGC Digital Library Consortium</td>
              </tr> -->
              <tr v-for="(item, i) in value.e_resources_list" :key="i">
                <td class="programText">{{ i + 1 }}</td>
                <td class="data">{{ item.database_name }}</td>
                <td class="data">
                  {{ item.subject }}
                </td>

                <!-- <td></td> -->
                <td class="data">{{ item.short_description }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th colspan="4"></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="col-lg-6 mt-5 m-auto">
        <div class="text_box_five">
          <h2>E-resources Links</h2>
          <p class="p-4">
            UAP Central Library supports its users and patrons in their studies,
            research and teaching through providing access to e-resources. UAP
            Library has more than 50,500 online resources. Following e-journals
            & e-books database access links are subscribed by the UAP library
            which can be access within the university premises without any user
            ID and passwords
          </p>
          <ul v-for="(item, i) in value.e_resources_file" :key="i">
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
  </section>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      toggle: false,
      message: {
        title: 'Message from the Treasurer',
        season: '(Spring 2020)',
        details:
          '<p>I am addressing you at a time when Bangladesh, and indeed the whole world, is facing a pandemic that we have never experienced before. Our educational institutions had been shut down for months causing enormous loss to the academic life of our students. Despite initial hesitation, the Government has now given the go-ahead to continue education online. We, in the UAP, had been working from Day-1 on how best to go online, our faculty worked very hard and now we are fully prepared to meet the challenge of time. UAP is set to start Spring 2020 online from <strong>Sunday, 28 June 2020.</strong></p><p>We realize that many of you, and your parents/guardians, have suffered great difficulties in view of the economic dislocation caused by the COVID-19 pandemic. To alleviate your sufferings, UAP has decided to reduce the tuition fees by <strong>20%</strong>. In monetary sum, it comes to nearly <strong>Tk. 5 crores</strong>. To ease the payments of fees for undergraduate courses we shall have 5 installments instead of 3. The last dates of payment of each installment are indicated in the Academic Calendar. I am sure you shall pay the fees well ahead to avoid the last-minute rush. We have increased various options available to you so that you can easily pay online without going outside your home. Various payment options and amounts to be paid for various programs are attached along with this mail. Those will also be on the website.</p><p>In addition to the 20% reduction of tuition fees across the board, UAP will continue to have a generous Waiver Policy in which many of you will get up to 100% tuition fee waiver. Any student or guardian who had suffered badly due to the pandemic will be favorably considered for VC’s waiver. I am sure you will appreciate that it would be quite an uphill task for us to deliver the best of education with the limited fund available at our end, but we shall never compromise on quality. Be rest assured that UAP will give you the best.</p><p>Without students the University campus is dead. We are missing you all. However, we are looking forward to a better future, and Insha Allah, our next semester can be held on Campus, as usual, and we shall once again have a happy and joyous campus life as before.</p>',
      },
      img: require('@/static/BOD/x.jpg'),
    }
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';

#researchIEERD {
  #e-resources {
    .main-table {
      border-radius: 5px;
      box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
    }

    .creditHead {
      padding-top: 42px;
      padding-bottom: 20px;
      background-color: $violot;
      border-bottom: 1px solid $darkblue;
      color: $darkblue;
      h3 {
        font-size: 27px;
        font-weight: 600;
      }
      p {
        font-size: 14px;
        font-weight: 500;
        padding-right: 150px;
        padding-left: 150px;
      }
    }

    table {
      .xxx {
        @include title2;
        padding-left: 85px;
        padding-top: 25px;
        padding-bottom: 25px;
        background-color: $background-color;
      }
      thead {
        background-color: $violot;

        tr {
          th {
            vertical-align: text-top;
            font-size: 18px;
            font-weight: 600;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: $darkblue;
            text-align: center;
            padding-top: 40px;
            padding-bottom: 40px;
            .subtitle-div {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
            .subtitle {
              display: block;
              font-size: 14px;
              color: $text-color;
            }
            .sub-text {
              font-size: 14px;
              font-weight: 600;

              color: $text-color;
            }
            .last-text {
              font-size: 14px;
              font-weight: normal;
              color: $text-color;
              display: block;
            }
          }
          th.title {
            position: relative;

            td {
              .subTitle {
                position: absolute;
              }
              .subTitle2 {
                margin-left: 88px;
                background-color: red;
              }
            }
          }
        }
      }

      tbody {
        tr {
          font-size: 18px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: center;
          color: $darkblue;
          td.programText {
            text-align: left !important;
            padding-left: 50px !important;
          }
          td.data {
            text-align: center !important;
          }
          td.fee {
            padding-right: 10px;
          }
          td.same-text {
            font-weight: 300;
          }
        }
      }
    }
  }
  margin-top: 104px;
  margin-bottom: 104px;
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
</style>
