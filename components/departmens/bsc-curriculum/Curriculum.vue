 <template>
  <section id="bsc-curriculum">
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-11 text-center mx-auto">
          <div v-if="bscBody" class="details">
            <div v-html="bscBody.curriculum_detail"></div>
            <!-- <h1 class="mb-5">{{ title }}</h1>
            <h3>{{ department }}</h3>
            <h3 class="mb-5">{{ prospectus }}</h3>
            <h2 class="mb-5">{{ year }}</h2>
            <h4 class="mb-4">Board of Editors</h4>
            <div v-for="(item, i) in boards" :key="i" class="boards">
              <p class="name">{{ item.name }}</p>
              <p class="position">{{ item.position }}</p>
            </div> -->
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
    bscBody: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      title: 'University of Asia Pacific (UAP)',
      department: 'Department of Computer Science & Engineering',
      prospectus: 'Prospectus (Undergraduate Program)',
      year: '2015-2016',
      boards: [
        {
          name: 'Aloke Kumar Saha',
          position: 'Associate Professor and Head, Dept. of CSE, UAP',
        },
        {
          name: 'Shaila Rahman',
          position: 'Assistant Professor, Dept. of CSE, UAP',
        },
        {
          name: 'Kazi Chandrima Rahman',
          position: 'Assistant Professor, Dept. of CSE, UAP',
        },
        {
          name: 'Shammi Akhtar',
          position: 'Assistant Professor, Dept. of CSE, UAP',
        },
        {
          name: 'Muhammad Firoz Mridha',
          position: 'Assistant Professor, Dept. of CSE, UAP',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
@import './styles/_main.scss';
#bsc-curriculum {
  .details {
    height: 980px;
    overflow-y: scroll;
    border-bottom: 21px solid #4786ef;
    padding-top: 150px;
    padding-bottom: 150px;
    background-color: $background-color;
    border-radius: 5px;
    h1 {
      @include title2;
      font-size: 48px;
      font-weight: 600;
    }
    h3 {
      @include title3;
      font-weight: 600;
    }
    h2 {
      @include cardTitle;
      text-align: center;
      color: $text-color;
    }
    h4 {
      @include title3;
      font-weight: 600;
    }
    .boards {
      p {
        @include paragraph;
        font-weight: 600;
      }
      .name {
        margin-bottom: 0px;
      }
    }
  }
}
</style>
