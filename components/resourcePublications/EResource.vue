<template>
  <section id="resourcePublicationEresource">
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
          <div class="table-responsive">
            <table
              class="table table-borderless table-responsive shadow-sm table-striped table-bordered"
            >
              <thead>
                <tr>
                  <th>Serial No.</th>
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
          <ul v-for="(item, i) in value.e_resources_file" :key="i" style="list-style-type: none">
            <li>
              <a :href="item.file" target="_blank" class="nav-link">{{
                item.file_title
              }}</a>
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

 
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';

#resourcePublicationEresource {
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
        padding-right: 100px;
        padding-left: 100px;
        @include respond-below(md) {
          padding-right: 50px;
          padding-left: 50px;
        }
        @include respond-below(xs) {
          padding-right: 10px;
          padding-left: 10px;
        }
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
            @include title3Bold;
            color: #1b2055;
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
