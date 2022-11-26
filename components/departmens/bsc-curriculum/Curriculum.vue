<template>
  <section id="bsc-curriculum">
    <div class="container my-5">
      <div v-for="(item, i) in bscBody" :key="i" class="row mt-4">
        <div class="col-lg-11 mx-auto">
          <div class="details">
            <div v-html="item.curriculum_detail"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    bscBody: {
      type: Object,
      required: true,
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
    border-bottom: 8px solid #4786ef;
    padding: 50px;
    background-color: $background-color;
    border-radius: 5px;
    @include respond-below(md) {
      padding: 20px;
    }
  }
}
</style>
