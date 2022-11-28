<template>
  <section id="tutionGraduate">
    <div style="text-align: center; font-weight: bold" class="mt-5">
      <div
        v-for="(item, i) in programs"
        :key="i"
        class="form-check form-check-inline"
        @change="getGraduation($event)"
      >
        <input
          :id="item.id"
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          :value="item.id"
          style="cursor: pointer"
        />
        <label class="form-check-label" :for="item.id">{{
          item.program_name
        }}</label>
      </div>
    </div>
    <div v-show="graduateCost.length > 0" class="container mt-5">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="table-responsive">
            <table class="table text-center mb-0">
              <thead>
                <tr>
                  <th colspan="3" class="heading">
                    {{ title }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th class="title">
                    {{ graduateCost.length > 0 && graduateCost[0].title }}
                  </th>
                  <th class="title">
                    {{ graduateCost.length > 0 && graduateCost[0].value }}
                  </th>
                </tr>
                <tr>
                  <td class="data">
                    {{ graduateCost.length > 0 && graduateCost[1].title }}
                  </td>
                  <td class="data">
                    {{ graduateCost.length > 0 && graduateCost[1].value }}
                  </td>
                </tr>
                <tr v-for="(item, i) in graduateCost.slice(2)" :key="i">
                  <td class="data">{{ item.title }}</td>
                  <td class="data">&#2547; {{ item.value }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="meritTableFooter p-5">
            <div v-html="graduateNote.description"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    programs: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      program_id: '',
      title: 'Graduate Cost',
      column: ['Credit', '36'],
      row: [
        {
          title: 'Total Semester',
          amount: '8000',
        },
        {
          title: 'Application fees',
          amount: '1200',
        },
        {
          title: 'Admission fee',
          amount: '21,500',
        },
        {
          title: 'Convocation fee',
          amount: '6,000',
        },
      ],
    }
  },
  computed: {
    ...mapGetters('depTuitionFees', ['graduateCost', 'graduateNote']),
  },
  methods: {
    getGraduation(event) {
      // this.program_id = event.target.value
      this.$store.dispatch('depTuitionFees/graduateCost', {
        department: this.$router,
        id: event.target.value,
      })
      this.$store.dispatch('depTuitionFees/getGraduateNote', {
        department: this.$router,
        id: event.target.value,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
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
  .meritTableFooter {
    font-size: 18px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;

    color: #000;
    background-color: $violot;
  }
}
</style>
