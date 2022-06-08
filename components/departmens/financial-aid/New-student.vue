<template>
  <section id="new-student">
    <div class="container">
      <div class="main-new-student">
        <div class="main_new_student_header">
          <h5 class="">Waiver for new students</h5>
          <p>Entry Level Waiver for Undergraduate Program</p>
        </div>
        <div class="table-top">
          <table class="table table-borderless table-responsive">
            <thead>
              <tr>
                <th>SI. No</th>
                <th>GPA of SSC/Equivalent</th>

                <th width="20%">
                  GPA of HSC/ Equivalent
                  <div class="subtile">
                    <div class="col-6">
                      <span class="subtitle-text">HSC</span>
                    </div>
                    <div class="col-6 diploma">
                      <span class="subtitle-text">Diploma</span>
                    </div>
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
                <td>{{ newStudentInformation.ssc }}</td>
                <td>
                  <div class="subtile">
                    <div class="col-6">
                      <span>{{ newStudentInformation.hsc }}</span>
                    </div>
                    <div class="col-6 diploma">
                      <span>{{ newStudentInformation.diploma }}</span>
                    </div>
                  </div>
                </td>
                <td>{{ newStudentInformation.waiver }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="special-option">
          <h5>Special Options/ waivers:</h5>
          <div class="info">
            <ul v-for="(special, i) in specials" :key="i">
              <li v-html="special.info"></li>
            </ul>
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
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>

<style></style>
