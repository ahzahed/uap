<template>
  <div id="current-student">
    <div class="container">
      <div class="main-student">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="table-responsive">
              <table class="table table-borderless table-striped">
                <thead>
                  <tr>
                    <th class="gpa">Semester GPA</th>
                    <th class="">Tuition fee Waiver</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(
                      currentStudentInformation, i
                    ) in currentStudentInformations"
                    :key="i"
                  >
                    <td class="text-gpa text-center">
                      {{ currentStudentInformation.semester_gpa }}
                    </td>
                    <td>{{ currentStudentInformation.tuition_fee_waiver }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="special">
              <div><h3>Special Note:</h3></div>
              <span class="info">
                <div v-html="currentSpecial.notes"></div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentStudentInformations: {
      type: Array,
      required: true,
    },
    currentSpecial: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
</style>
