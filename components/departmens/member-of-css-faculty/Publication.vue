<template>
  <section id="publications">
    <div class="container">
      <div class="row">
        {{ profile.title }}
        <div class="col-xl-12 col-md-12 mb-5">
          <div class="bg-white rounded shadow py-5 px-4 leftSide">
            <h5>Publications</h5>
            <div v-for="(item, i) in profile" :key="i" class="details">
              <a :href="item.link" target="_blank"> {{ item.title }}</a>

              <div>
                <b>Author: </b>
                <div style="display: inline-block" v-html="item.author"></div>
                | <b>Year: </b>{{ item.year }} | <b>Journal: </b>
                {{ item.journal }}
              </div>
              <div v-html="item.abstract"></div>
              <hr style="margin-bottom: 0px" />
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
      type: Array,
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
#publications {
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
  .leftSide {
    overflow-y: scroll;
    height: 350px;
    h5 {
      @include cardTitle;
      padding-left: 20px;
    }
    .details {
      padding-top: 20px;
      padding-left: 20px;
      h3 {
        @include cardPara;
        font-weight: 600;
        cursor: pointer;
      }
      p {
        @include paragraph2;
        text-align: left;
      }
    }
  }
}
</style>
