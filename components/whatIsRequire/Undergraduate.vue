<template>
  <section id="undergraduate">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="heading text-center mt-5">
            <h1>UNDERGRADUATE ADMISSION CRITERIA</h1>
            <p>Please read the below conditions carefully</p>
          </div>
          <div class="lists">
            <ul>
              <li class="mb-3">
                The applicants are requested to download the admit card before
                the admission test.
              </li>
              <li class="mb-3">
                Admission notice/ test schedules are available at the UAP
                website.
              </li>
              <li class="mb-3">
                H.S.C. appeared candidates with GPA of 4.00 and above in SSC are
                eligible to apply for the admission test. However, they will be
                allowed to take admission upon furnishing HSC results which
                should meet the minimum requirements for admission in the
                respective program.
              </li>
              <li class="mb-3">
                GPA of below 2.50 in SSC and HSC are not acceptable.
              </li>
              <li class="mb-3">
                Diploma students can apply for admission with a minimum GPA of
                2.50 in CSE and EEE and GPA of 3.00 in CE program. They can
                apply for their respective programs only ( i.e A diploma student
                of CE can apply only in B.Sc. in CE program only). Student from
                any SSC background can apply (Humanities, Business studies or
                others).
              </li>
              <li class="mb-3">
                A Level and O Level Candidates must fulfill the criteria of
                having GPA 2.50 in both O level and A Level examinations.
                Candidates should pass minimum 5 subjects in O level and minimum
                2 Subjects in A Level. However, department wise admission
                criteria should also be fulfilled.
              </li>
              <li class="mb-3">
                Study gap of maximum 2 years after HSC examination will be
                accepted (except B.Pharm program) and study gap of maximum 1
                year after HSC examination will be accepted for B.Pharm program.
              </li>
              <li class="mb-3">
                Only HSC 2020 passed candidates can apply for bachelor of
                Pharmacy.
              </li>
            </ul>
          </div>
          <div class="note text-center">
            <p>
              Please be informed that if any deviation found between the
              information provided by the candidate and original documents, the
              admission will be canceled even the candidates are selected in the
              admission test.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#undergraduate {
  .heading {
    border: 2px solid #2d368e;
    padding: 62px 0px;
    border-radius: 5px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
    h1 {
      @include title;
      color: #2f2e41;
    }
    p {
      @include paragraph;
      font-weight: 500 !important;
      color: $darkblue;
    }
  }
  .lists {
    background: $background-color;
    padding: 155px 115px 92px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
    @include respond-below(md) {
      padding: 35px;
    }
    @include respond-below(xs) {
      padding: 20px;
    }
    ul {
      list-style-type: disc;
      @include paragraph;
    }
  }
  .note {
    padding: 51px 191px;
    border: 2px solid #2d368e;
    border-radius: 5px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
    margin-bottom: 150px;
    @include respond-below(md) {
      padding: 35px;
    }
    @include respond-below(xs) {
      padding: 20px;
    }
    p {
      @include paragraph;
      font-weight: 500 !important;
      color: $deep-primary;
    }
  }
}
</style>
