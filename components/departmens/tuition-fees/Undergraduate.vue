<template>
  <section id="tutionUndergraduate">
    <div class="container mt-5">
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
export default {
  props: {
    underGraduateCost: {
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
