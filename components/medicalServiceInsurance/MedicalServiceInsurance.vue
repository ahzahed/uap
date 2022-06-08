<template>
  <section id="MedicalServiceInsurance">
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div class="campusMedical p-5">
            <h3>On Campus Medical Service & Facility</h3>
            <p>
              An adequate, well equipped, accessible and useful medical facility
              is a must for a university to provide emergency healthcare
              services ensuring health and hygiene within the campus. UAP
              acknowledges this, and has taken initiatives to fulfill that.
            </p>
            <p>
              UAP provides in-house medical services through a central medical
              center, located in the 2nd floor of the UAP main building.
              Students can get free medical services including medical
              consultancy, basic medicine, and primary treatment in case of any
              injury.
            </p>
            <img :src="img" class="w-100 m-5" alt="x" />
            <p>
              The 4-member Medical Services Team provides immediate attention to
              the students and the staff in case there is illness. The medical
              services team consists of a male and a female doctor, a nurse, a
              counselor, and a support staff.
            </p>
            <p>The Medical Services Team works on every work day.</p>
            <h3>Opening Hours</h3>
            <p>Sunday-Thursday 9.00 am-5.00 pm</p>
            <h3>Statistical Data (2018-19)</h3>
            <p>
              During the financial year, the team has provided health
              examination and prescription services to a total of 2,911 students
              and staff. Among them a little over one-fourths was female.
              Referral is also an important service provided by the medical
              services team. During the year, 45 cases have been referred to
              different specialized services.
            </p>
            <p>
              It is interesting to note that seeking services to prevent
              obesity/overweight is emerging as a medical need for the students
              and staff at the campus.
            </p>
            <h3>Contact</h3>
            <p>
              Medical Center <br />74/A , Green Road, Dhaka - 1205,
              Bangladesh<br />
              Ground floor<br />
              PABX:+8802-58157091-4, +8802-58157096<br />
              FAX:+8802-58157097<br />
              Email: naim@uap-bd.edu
            </p>
            <h3>Emergency contact:</h3>
            <p>
              Dr. Mohammad Naimul Hakim Khan
              <br />PABX:+8802-58157091-4, +8802-58157096
            </p>
          </div>
          <div class="offCampus p-5 mt-5">
            <h3>Off-Campus Medical collaboration</h3>
            <p>
              The Medical Services Team has established a collaborative
              relationship with Medinova Diagnostic Services. On referral from
              the Medical Officer, Medinova offers Lab Test services to UAP
              student and staff at a discount rate of 25-30%.
            </p>
          </div>
          <div class="insuranceCoverage p-5 my-5">
            <h3>Insurance coverage</h3>
            <p>
              UAP ensures that all the students of UAP are covered with
              insurance policies. In this case, Green Delta Insurance Ltd. is
              the service provider. In any unwanted case of demise of a student,
              the Insurance Company pays Tk.100,000 to the family of the
              deceased student.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  img: require('@/static/BOD/x.jpg'),
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#MedicalServiceInsurance {
  h3 {
    @include title2;
    font-weight: 600;
  }
  p {
    @include paragraph;
  }
  .campusMedical {
    background: $background-color;
    border-radius: 5px;
  }
  .offCampus {
    background-color: $violot;
    border-radius: 5px;
  }
  .insuranceCoverage {
    background-color: $gray;
    border-radius: 5px;
  }
}
</style>
