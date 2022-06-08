<template>
  <div id="specialNote">
    <div class="container">
      <div class="row">
        <div class="col-md-10">
          <div class="card main-specialWaiver">
            <div class="mx-auto logo-top">
              <span class="logo">
                <img :src="waiver.logo" class="w-100" :alt="waiver.adderss" />
              </span>
              <h3>SPECIAL WAIVER</h3>
            </div>
            <!-- specialNoteList css code in app.scss -->
            <div v-if="specialNote" class="specialNoteList">
              <div v-html="specialNote.notes"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import waiverLogo from '../../../static/waiver/special-waiver.png'
export default {
  props: {
    specialNote: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      waiver: {
        logo: waiverLogo,
        adderss: 'logo',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#specialNote {
  margin-top: 80px;
  margin-bottom: 225px;
  margin-left: 200px;
  @include respond-below(lg) {
    margin-left: 144px;
  }
  @include respond-below(md) {
    margin-left: 35px;
  }
  @include respond-below(sm) {
    margin-left: 27px;
  }
  .main-specialWaiver {
    padding: 8px;
    text-align: center;
    border-radius: $border-radius;
    box-shadow: $financial-box-shadow;
    background-color: $white;
    .logo-top {
      margin-top: 80px;
      padding: 43px;
      h3 {
        color: $waiver-text;
        @include title2;
      }
    }
    .logo {
      img {
        max-width: 54px;
        max-height: 64px;
        margin-bottom: 18px;
      }
    }
    .info-top {
      margin-bottom: 130px;
      .info {
        margin-bottom: 30px;
        h4 {
          margin-bottom: 10px;
          color: $darkblue;
          @include cardTitle;
          text-align: center !important;
        }
        p {
          color: $text-color;
          @include paragraph;
          padding-left: 20px;
        }
      }
    }
  }
}
</style>
