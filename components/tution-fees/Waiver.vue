<template>
  <section id="waiver">
    <div class="container">
      <div class="row waiverRow">
        <div class="col-md-6">
          <div class="main-merit">
            <div class="text-center merit creditHead">
              <h3>MERIT WAIVER</h3>
              <p class="meritP">(FROM 2ND SEMESTER ONWARD)</p>
            </div>
            <table class="table table-borderless table-responsive text-center">
              <thead>
                <tr>
                  <th>SI. No</th>
                  <th>Semester GPA</th>
                  <th>Tuition fee Waiver</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(waiverInformation, i) in waiverInformations" :key="i">
                  <td>{{i+1}}</td>
                  <td>{{waiverInformation.gpa}}</td>
                  <td>{{waiverInformation.waiver}}</td>
                </tr>
              </tbody>
            </table>
            <div class="text-center meritTableFooter">
              <p>Top 3% students in each department will be offered 100% tuition fee waiver</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 text-center">
          <div class="card special">
            <span class="logo">
              <img :src="waiver.logo" class="w-100" :alt="waiver.adderss" />
            </span>
            <h3 class="special-waiver-text">SPECIAL WAIVER</h3>
            <p class="waiver-text">
              10%-100% VC's special tuition fee waiver for poor but meritorious
              students.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import waiverLogo from '../../static/waiver/special-waiver.png'
export default {
  data() {
    return {
      waiver: {
        logo: waiverLogo,
        adderss: 'logo',
      },
      waiverInformations: [
        {
        gpa: '4.00-4.49',
        waiver: '10%'
      },
      {
        gpa: '4.00-4.49',
        waiver: '10%'
      },
      {
        gpa: '4.00-4.49',
        waiver: '10%'
      },
      {
        gpa: '4.00-4.49',
        waiver: '10%'
      }
      ]
    }
  },
}
</script>
