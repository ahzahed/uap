<template>
  <section id="profile">
    <div class="container mt-5">
      <div class="row">
        <!-- Team item -->
        <div class="col-xl-4 col-lg-4 col-md-12 mb-5 text-center">
          <div class="bg-white rounded shadow py-5 px-4 leftSide">
            <img
              :src="details.image"
              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5>{{ details.name }}</h5>
            <span>{{ details.designation }}</span>
            <p>
              {{ details.department }}
              <span class="university">University of Asia Pacific</span>
            </p>
          </div>
        </div>
        <!-- End -->
        <div class="col-xl-8 col-lg-8 col-md-12 mb-5">
          <div class="bg-white rounded shadow py-5 px-4 rightSide">
            <h3 class="mb-5">Brief Intro</h3>
            <p
              v-if="toggle == false"
              v-html="details.description && details.description.slice(0, 650)"
            ></p>

            <p v-else v-html="details.description"></p>
            <!-- <div style="text-align: right">
              <button class="primary-btn readmore" @click="toggle = !toggle">
                <span v-if="toggle == false">
                  <span class="plus">+</span> Read More</span
                >
                <span v-else> <span class="plus">-</span> Read Less</span>
              </button>
            </div> -->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 col-md-12 col-md-6 mx-auto">
          <div class="bg-white rounded shadow py-5 px-4 contact mb-5">
            <h3 class="text-center mb-5">Contact</h3>

            <div class="row">
              <div class="col-lg-6">
                <h5>{{ details.name }}</h5>
                <P>{{ details.designation }}</P>
                <h5>Address</h5>
                <P>{{ details.address }}</P>
              </div>
              <div class="col-lg-6">
                <h5>Email</h5>
                <p class="email">
                  <a href="mailto: vc@uap-bd.edu">{{ details.email }}</a>
                </p>
                <h5>Mobile</h5>
                <p class="phone">
                  <a href="tel:+880 1711 111 111">{{ details.mobile }}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    details: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      toggle: false,
    }
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#profile {
  .leftSide {
    min-height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h5 {
      @include title2;
      color: $deep-primary;
    }
    span {
      @include paragraph;
      font-weight: normal;
      color: $deep-primary !important;
      margin-bottom: 10px;
    }
    .university {
      color: rgba(18, 102, 241, 0.75);
    }
    p {
      @include paragraph;
    }
    img {
      height: 250px;
      width: 250px;
      object-fit: contain;
    }
    .img-thumbnail {
      border: 5px solid rgba(18, 102, 241, 0.75);
    }
  }
  .rightSide {
    min-height: 550px;
    padding: 25px 35px;
    h3 {
      @include cardTitle;
    }
    h4 {
      @include cardTitle;
      color: $text-color;
      font-weight: 500;
      font-style: italic;
    }
    p {
      @include paragraph;
    }
  }
  .contact {
    h3 {
      @include cardTitle;
    }
    h5 {
      @include cardPara;
      font-weight: 600;
      padding-left: 25px;
    }
    p {
      font-size: 14px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      padding-left: 25px;
    }
    .email,
    .phone {
      color: #1266f1;
    }
  }
}
</style>