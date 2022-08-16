<template>
  <section id="new-student">
    <div class="container">
      <div class="main-new-student">
        <div class="main_new_student_header">
          <h5 class="">Waiver for new students</h5>
          <p>Entry Level Waiver for Undergraduate Program</p>
        </div>
        <div class="table-top table-responsive">
          <table class="table table-borderless table-responsive shadow-sm table-striped table-bordered">
            <thead>
              <tr>
                <th>SI. No</th>
                <th>GPA of SSC/Equivalent</th>

                <th width="20%">
                  GPA of HSC/ Equivalent
                  <div class="subtile">
                    <div class="col-6"><span>HSC</span></div>
                    <div class="col-6"><span>Diploma</span></div>
                  </div>
                </th>
                <th>Tuition fee Waiver</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(newStudentInformation, i) in newStudentInformations"
                :key="i"
              >
                <td>{{ i + 1 }}</td>
                <td>{{ newStudentInformation.gpa_of_ssc_equivalent }}</td>
                <td>
                  <div class="subtile">
                    <div class="col-6">
                      <span>{{ newStudentInformation.hsc }}</span>
                    </div>
                    <div class="col-6">
                      <span>{{ newStudentInformation.diploma }}</span>
                    </div>
                  </div>
                </td>
                <td>{{ newStudentInformation.total_fee_waiver }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="special-option">
          <h5>Special Options/ waivers:</h5>
          <div class="info">
            <div v-html="specials.notes"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    newStudentInformations: {
      type: Array,
      required: true,
    },
    specials: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>

<style></style>
