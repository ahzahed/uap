/* eslint-disable vue/require-default-prop */
<template>
  <section id="QualificationTabs">
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-7">
          <div class="leftSide shadow">
            <div class="row">
              <div class="col-md-3">
                <!-- Tabs nav -->
                <div
                  id="v-pills-tab"
                  class="nav flex-column nav-pills nav-pills-custom"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <li
                    v-for="(item, i) in psersonalInformation"
                    :key="'item_' + i"
                    class="nav-item mb-2"
                  >
                    <a
                      id="v-pills-home-tab"
                      class="nav-link"
                      :class="item.active == true ? 'active' : ''"
                      @click="ShowItem(item)"
                    >
                      {{ item.name }}</a
                    >
                  </li>

                  <!-- <a
                    id="v-pills-settings-tab"
                    class="nav-link"
                    data-toggle="pill"
                    href="#v-pills-settings"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    <span class="font-weight-bold small"
                      >Confirm booking</span
                    ></a
                  > -->
                </div>
              </div>

              <div class="col-md-9">
                <!-- Tabs content -->

                <div id="v-pills-tabContent" class="tab-content">
                <!-- Thesis Tab Start -->
                  <div
                    id="v-pills-home"
                    class="tab-pane fade rounded bg-white show active"
                    :class="
                      psersonalInformation[0].active == true ? 'show' : ''
                    "
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <p
                      v-show="psersonalInformation[0].active == true"
                      class="font-italic text-muted mb-2"
                    >
                      <ul>

                        <li v-for="(item,i) in facultyThesis" :key="i" class="mb-3"><h5>{{item.title}}</h5><p>{{item.short_description}}</p></li>

                      </ul>
                    </p>
                  </div>
                <!-- Thesis Tab End -->

                <!-- Research Tab Start -->
                  <div
                    id="v-pills-home"
                    class="tab-pane fade rounded bg-white show active"
                    :class="
                      psersonalInformation[1].active == true ? 'show' : ''
                    "
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <p
                      v-show="psersonalInformation[1].active == true"
                      class="font-italic text-muted mb-2"
                    >
                     <ul>

                        <li v-for="(item,i) in facultyResearch" :key="i" class="mb-3"><h5>{{item.title}}</h5><p>{{item.short_description}}</p></li>

                      </ul>
                    </p>
                  </div>
                <!-- Research Tab End -->

                <!-- Resource Tab Start -->
                  <div
                    id="v-pills-home"
                    class="tab-pane fade rounded bg-white show active"
                    :class="
                      psersonalInformation[2].active == true ? 'show' : ''
                    "
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <p
                      v-show="psersonalInformation[2].active == true"
                      class="font-italic text-muted mb-2"
                    >
                     <ul>

                            <li v-for="(item,i) in facultyResource" :key="i" class="mb-3"><h5>{{item.title}}</h5><p class="mb-0">{{item.short_description}}</p> <a v-for="(file,j) in item.files" :key="j" :href="$config.baseURL + file.file" target="_blank">{{file.file_title}}<br /></a></li>

                     
                      </ul>
                    </p>
                  </div>
                <!-- Resource Tab End -->

                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-5">
          <div class="rightSide shadow">
            <h2>Contact</h2>
          <div class="details">
            <h3>{{ profile.name }}</h3>
            <p>{{ profile.position }}</p>
            <h3>Address</h3>
            <p>{{ profile.address }}</p>
            <h3>Email</h3>
            <p>{{ profile.email }}</p>
            <h3>Mobile</h3>
            <p>{{ profile.phone }}</p>
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
    profile: {
      type: Object,
      require: true,
    },
    // eslint-disable-next-line vue/require-default-prop
    facultyThesis: {
      type: Array,
      require: true,
    },
    // eslint-disable-next-line vue/require-default-prop
    facultyResearch: {
      type: Array,
      require: true,
    },
    // eslint-disable-next-line vue/require-default-prop
    facultyResource: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      contact: {
        name: 'Dr. Md. Rajibul Islam',
        position: 'Assistant Professor',
        address:
          'House # 48, Aptt. # B-3 (3rd floor), Road # 25, Block - A, Banani, Dhaka-1213',
        email: 'md.rajibul.islam@uap-bd.edu',
        mobile: '+8801700000000',
      },

      psersonalInformation: [
        {
          name: 'Thesis Conducted',
          url: '#',
          active: true,
        },
        {
          name: 'Research Interest',
          url: '#',
          active: false,
        },
        {
          name: 'Resources',
          url: '#',
          active: false,
        },
       
        
      ],
    }
  },
  methods: {
    ShowItem(item) {
      this.psersonalInformation.forEach((element) => {
        element.active = false
      })
      item.active = true
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#QualificationTabs {
  ul{
    list-style-type: disc;
  }
  .leftSide{
    border-radius: 5px;
    padding: 40px;
    height: 500px;
    overflow-y: scroll;
  }

 .leftSide::-webkit-scrollbar {
    width: 10px;
    height: 100px;
    color: red;
  }
  .leftSide::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 60px;
    background-color: #f5f5f5;
  }
  .leftSide::-webkit-scrollbar-thumb {
    border-radius: 60px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: $darkblue;
  }

  .rightSide {
    border-radius: 5px;
    padding: 40px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      @include cardTitle;
    }
    
    .details {
      padding-left: 30px;
      h3 {
        @include cardPara;
        font-weight: 600;
      }
      p {
        @include paragraph2;
        text-align: left;
      }
    }
  }
}
</style>
