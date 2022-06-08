<template>
  <section id="admissionData">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="table-responsive-lg">
            <table class="table text-center">
              <thead>
                <tr>
                  <th colspan="3" class="heading">
                    ADMISSION TEST DATE TIME SAMPLE QUESTION
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th v-for="(item, i) in column" :key="i" class="title">
                    {{ item }}
                  </th>
                </tr>
                <tr v-for="(item, i) in row" :key="i">
                  <td class="data">{{ item.fac_dep }}</td>
                  <td class="data" v-html="item.schedule"></td>
                  <td class="data" v-html="item.simple_q"></td>
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
export default {
  data() {
    return {
      column: ['Faculty/Department', 'Schedule', 'Sample Question'],
      row: [
        {
          fac_dep: 'Department of Pharmacy',
          schedule:
            '<strong>B Pharm:</strong> Saturday, November 06, 2021 at 2:00 PM',
          simple_q: '<strong>Download Sample Question B Pharm</strong>',
        },
        {
          fac_dep: 'Faculty of Engineering',
          schedule: 'Admission Test Schedule',
          simple_q: '<strong>Download Sample Question B Pharm</strong>',
        },
        {
          fac_dep: 'Law and Human Rights',
          schedule: '<strong>LLB:</strong> Admission Test Schedule',
          simple_q: '<strong>Download Sample Question B Pharm</strong>',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#admissionData {
  padding-top: $section-padding;
  padding-bottom: $section-padding;
  table {
    border-radius: 5px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.5);
    .heading {
      @include title2;
      background: $lightblue;
      padding-top: 80px;
      padding-bottom: 40px;
      color: $light-gray;
    }
    .title {
      @include cardPara;
      font-weight: 600;
      color: $darkblue;
      background: $lightblue;
      padding-bottom: 55px;
      padding-top: 55px;
      text-align: center;
    }
    .data {
      @include cardPara;
      padding-bottom: 55px;
      padding-top: 55px;
      color: $darkblue;
      text-align: center;
    }
  }
}
</style>
