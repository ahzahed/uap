<template>
  <section id="calculator">
    <div class="container">
      <div class="main-calculator">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10 col-sm-10 main-background">
            <div class="row py-5 top-text">
              <div class="text-center">
                <h4>Waiver Calculator</h4>
              </div>
            </div>
            <div class="row justify-content-center pt-5 mt-5">
              <div class="col-md-8 col-sm-9 col-10">
                <div class="">
                  <select class="form-select select-item shadow-sm">
                    <option selected>Select SSC GPA</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div
                  class="d-flex justify-content-evenly py-4 select-check-item"
                >
                  <div class="form-check d-flex justify-content-center align-items-center">
                    <input id="hsc" class="form-check-input shadow-sm" type="checkbox" />
                    <label for="hsc" class="form-check-label">HSC</label>
                  </div>
                  <div class="form-check">
                    <input
                      id="diploma"
                      class="form-check-input shadow-sm"
                      type="checkbox"
                    />
                    <label for="diploma" class="form-check-label"
                      >Diploma</label
                    >
                  </div>
                </div>
                <div>
                  <select class="form-select select-item shadow-sm">
                    <option selected>Select HSC GPA</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="text-center">
                  <nuxt-link to="/" class="primary-btn calculator-btn"
                    >Calculate</nuxt-link
                  >
                </div>
              </div>
            </div>
            <div class="row justify-content-center p-5">
              <div class="col-md-11 info shadow-lg py-4">
                <p class="text-center mb-0">
                  You will get 25% waiver on 1st Semester tuition fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import './styles/_main.scss';

#calculator {
  margin-top: $section-padding;
  margin-bottom: $section-padding;
  .container {
    border-radius: 5px;
    .main-calculator {
      .main-background {
        border-radius: 5px;
        background-color: $lightblue;
        box-shadow: -12px -26px 0px #1B2055;
        .row {
          &.top-text {
            border-bottom: 3px solid $darkblue;
            h4 {
              @include title2;
              font-weight: 600;
              color: $light-gray;
            }
          }

          .select-item {
            @include cardPara;
            font-weight: 500;
            padding-left: 45px;
            padding-top: 9px;
            padding-bottom: 9px;
            border-radius: $border-radius;
            color: $text-color;
            @include respond-below(md){
              padding-left: 35px;
            }
          }
          .select-check-item {
            input {
              border-radius: 5px;
              border: none;
              background-color: $white;
              width: 25px;
              height: 25px;
              margin-right: 10px;
              // margin: 1px 15px 0 68px;
            //   box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
            }
            label {
              @include cardPara;
              font-weight: 500;
            }
          }
          .calculator-btn {
            display: inline-block;
            text-align: center;
            width: 150px;
            margin: 0 auto;
            margin-top: 50px;
            // margin-bottom: 50px;
            padding: 11px 10px;
            border-radius: $border-radius;
            background-color: #1266f1 !important;
          }
          .info {
            background-color: $lightblue;
            p {
              @include cardPara;
              color: $text-color;
            }
          }
        }
      }
    }
  }
}
</style>
