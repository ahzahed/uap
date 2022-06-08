<template>
  <section id="academicTeaching">
    <div class="container">
      <div class="row">
        <div class="col-xl-5 col-md-6 mb-5">
          <div class="bg-white rounded shadow py-5 px-4 leftSide">
            <h5>Academic Qualification</h5>

            <div
              class="academicTeachingLists"
              v-html="profile.academic_qualification"
            ></div>
          </div>
        </div>

        <div class="col-xl-7 col-md-6 mb-5 text-center">
          <div class="bg-white rounded shadow py-5 px-4 rightSide">
            <h5 class="mb-4">Teaching Experience</h5>
            <div
              v-for="(item, i) in teachingExp"
              id="teachingColor"
              :key="i"
              class="card mb-3"
            >
              <div class="row g-0">
                <div class="col-md-4 cardLeft">
                  <div class="card-body">
                    <p>{{ item.time }}</p>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card-body" style="text-align: left">
                    <p>
                      {{ item.position }}
                    </p>
                    <p class="place">{{ item.place }}</p>
                  </div>
                </div>
              </div>
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
  },
  data() {
    return {
      teachingExp: [
        {
          time: 'Jan. 3rd, 2021 to Continue as a Professor at UAP',
          position: 'Department of Computer Science and Engineering',
          place: 'University of Asia Pacific',
        },
        {
          time: 'Feb 2020 to Jan 2021 as a Professor at Educare',
          position: 'Department of Computer Science and Engineering',
          place: 'University of Asia Pacific',
        },
        {
          time: 'Feb 2020 to Jan 2021 as a Professor at Educare',
          position: 'Department of Computer Science and Engineering',
          place: 'University of Asia Pacific',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#academicTeaching {
  .leftSide {
    overflow-y: scroll;
    height: 350px;
    h5 {
      @include cardTitle;
      padding-left: 20px;
    }
    .academicTeachingLists {
      padding: 20px;
      ul {
        text-align: justify;
        list-style-type: disc;
        @include paragraph;
      }
    }
  }

  .leftSide::-webkit-scrollbar,
  .rightSide::-webkit-scrollbar {
    width: 10px;
    height: 100px;
    color: red;
  }
  .leftSide::-webkit-scrollbar-track,
  .rightSide::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 60px;
    background-color: #f5f5f5;
  }
  .leftSide::-webkit-scrollbar-thumb,
  .rightSide::-webkit-scrollbar-thumb {
    border-radius: 60px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: $darkblue;
  }

  .rightSide {
    overflow-y: scroll;
    height: 350px;

    .card-body {
      p {
        margin-bottom: 0px;
      }
    }
    h5 {
      @include cardTitle;
    }

    .place {
      color: rgba(18, 102, 241, 0.75);
    }

    #teachingColor {
      .cardLeft {
        background-color: $blueish;
        color: $white;
      }
      &:nth-of-type(odd) {
        .cardLeft {
          .card-body {
            background-color: $superblue;
          }
        }
      }
    }
  }
}
</style>
