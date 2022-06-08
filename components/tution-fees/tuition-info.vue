<template>
  <section id="tuitionInfo">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
         <div class="">
            <ul v-for="(information, i) in informations" :key="i">
            <li class="d-flex align-items-center">{{ information.info }}</li>
          </ul>
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
      informations: [
        {
          info: 'Application Processing fee Tk.1200/-(Non-refundable)',
        },
        {
          info: 'Total fees at the time of admission for MBA and EMBA: Tk. 27,500/-(Admission Fee: Tk. 13,000/-, Extra-Curricular Activities Fee: Tk. 5000/-, Library Fee: Tk. 3000/-, Computer Lab Fee: Tk. 3000/-, Certificate Verification and ID Card Fee: Tk. 500/-) (Non-refundable), Caution Money: Tk. 3000/- (Refundable)',
        },
        {
          info: 'Total fees at the time of admission for M. Pharm: Tk. 20,500/- (Admission Fee: Tk. 10,000/-, Extra-Curricular Activities Fee: Tk. 5000/-, Certificate Verification and ID Card Fee: Tk. 500/-) (Non-refundable), Caution Money: Tk. 5000/- (Refundable)',
        },
        {
          info: 'Total fees at the time of admission for MBA and EMBA: Tk. 27,500/-(Admission Fee: Tk. 13,000/-, Extra-Curricular Activities Fee: Tk. 5000/-, Library Fee: Tk. 3000/-, Computer Lab Fee: Tk. 3000/-, Certificate Verification and ID Card Fee: Tk. 500/-) (Non-refundable), Caution Money: Tk. 3000/- (Refundable)',
        },
        {
          info: 'Total fees at the time of admission for M. Pharm: Tk. 20,500/- (Admission Fee: Tk. 10,000/-, Extra-Curricular Activities Fee: Tk. 5000/-, Certificate Verification and ID Card Fee: Tk. 500/-) (Non-refundable), Caution Money: Tk. 5000/- (Refundable)',
        },
        {
          info: 'Waiver is applicable for MBA, EMBA, MCE, MCSE and LLM programs',
        },
      ],
    }
  },
}
</script>
