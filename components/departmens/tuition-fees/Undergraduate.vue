<template>
  <section id="tutionUndergraduate">
    <div style="text-align: center; font-weight: bold" class="mt-5">
      <div
        v-for="(item, i) in programs"
        :key="i"
        class="form-check form-check-inline"
        @change="getUderGraduation($event)"
      >
        <input
          :id="item.id"
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          :value="item.id"
        />
        <label class="form-check-label" :for="item.id">{{
          item.program_name
        }}</label>
      </div>
    </div>
    <div v-show="underGraduateCost.length > 0" class="container mt-5">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="table-responsive-lg">
            <table class="table text-center">
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
                    {{
                      underGraduateCost.length > 0 && underGraduateCost[0].title
                    }}
                  </th>
                  <th class="title">
                    {{
                      underGraduateCost.length > 0 && underGraduateCost[0].value
                    }}
                  </th>
                </tr>
                <tr v-for="(item, i) in underGraduateCost.slice(1)" :key="i">
                  <td class="data">{{ item.title }}</td>
                  <td class="data">&#2547; {{ item.value }}</td>
                </tr>
              </tbody>
            </table>
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
      title: 'Undergraduate Cost',
      column: ['Credit', '162'],
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
    ...mapGetters('depTuitionFees', ['underGraduateCost']),
  },
  methods: {
    getUderGraduation(event) {
      // this.program_id = event.target.value
      this.$store.dispatch('depTuitionFees/underGraduateCost', {
        department: this.$router,
        id: event.target.value,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#tutionUndergraduate {
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
</style>
