<template>
  <section id="message">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="heading">
            <h1 class="text-center">Message from the Treasurer</h1>
            <p class="text-center">(Spring 2020)</p>
          </div>
          <div class="details">
            <!-- <p class="descinline" v-html="message.details"></p> -->
            <!-- <p class="descempty" v-html="message.details"></p> -->
            <!-- <p
              v-if="toggle == false"
              v-html=" message && message.message.slice(0, 300)"
            ></p> -->

            <p v-html="message.message"></p>
            <div class="messageFrom mt-5">
              <img :src="$config.baseURL + message.image" :alt="message.name" />
              <div class="profile mt-5">
                <p>
                  {{ message.name }}<br />
                  <span>{{ message.position }}</span>
                </p>
              </div>
            </div>
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
    </div>
  </section>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      toggle: false,
      // message: {
      //   title: 'Message from the Treasurer',
      //   season: '(Spring 2020)',
      //   details:
      //     '<p>I am addressing you at a time when Bangladesh, and indeed the whole world, is facing a pandemic that we have never experienced before. Our educational institutions had been shut down for months causing enormous loss to the academic life of our students. Despite initial hesitation, the Government has now given the go-ahead to continue education online. We, in the UAP, had been working from Day-1 on how best to go online, our faculty worked very hard and now we are fully prepared to meet the challenge of time. UAP is set to start Spring 2020 online from <strong>Sunday, 28 June 2020.</strong></p><p>We realize that many of you, and your parents/guardians, have suffered great difficulties in view of the economic dislocation caused by the COVID-19 pandemic. To alleviate your sufferings, UAP has decided to reduce the tuition fees by <strong>20%</strong>. In monetary sum, it comes to nearly <strong>Tk. 5 crores</strong>. To ease the payments of fees for undergraduate courses we shall have 5 installments instead of 3. The last dates of payment of each installment are indicated in the Academic Calendar. I am sure you shall pay the fees well ahead to avoid the last-minute rush. We have increased various options available to you so that you can easily pay online without going outside your home. Various payment options and amounts to be paid for various programs are attached along with this mail. Those will also be on the website.</p><p>In addition to the 20% reduction of tuition fees across the board, UAP will continue to have a generous Waiver Policy in which many of you will get up to 100% tuition fee waiver. Any student or guardian who had suffered badly due to the pandemic will be favorably considered for VC’s waiver. I am sure you will appreciate that it would be quite an uphill task for us to deliver the best of education with the limited fund available at our end, but we shall never compromise on quality. Be rest assured that UAP will give you the best.</p><p>Without students the University campus is dead. We are missing you all. However, we are looking forward to a better future, and Insha Allah, our next semester can be held on Campus, as usual, and we shall once again have a happy and joyous campus life as before.</p>',
      // },
      img: require('@/static/BOD/x.jpg'),
    }
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#message {
  margin-top: 104px;
  margin-bottom: 104px;
  .heading {
    background-color: $darkblue;
    padding-top: 23px;
    padding-bottom: 23px;
    border-radius: 5px;
    h1 {
      @include title2;
      margin-bottom: 0px;
      color: $white;
    }
    p {
      color: $white;
      @include paragraph;
    }
  }
  .descinline {
    display: inline;
  }
  .descempty {
    display: none;
  }
  .details {
    background-color: $lightblue;
    padding: 92px 111px;
    text-align: justify;
    @include respond-below(lg) {
      padding: 80px 70px;
    }
    @include respond-below(sm) {
      padding: 40px 30px;
    }
    @include paragraph;
    .readmore {
      border-radius: 5px;
      //   text-align: right;
      padding: 11px 22px;
      cursor: pointer;
    }
  }
  .messageFrom {
    display: flex;
    flex-direction: row;
    @include respond-below(xs) {
      flex-direction: column;
      align-items: center;
    }
    .profile {
      margin-left: 20px;
      .email {
        @include cardPara;
        font-weight: 500;
      }
      p {
        @include paragraph;
        font-weight: 600;
        color: $deep-primary;
        text-align: left;

        span {
          @include paragraph;

          font-weight: 300;
        }
      }
    }
    img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      @include respond-below(xs) {
        height: 100px;
        width: 100px;
      }
    }
    .icon {
      width: 28px;
      height: 20px;
      border-radius: 0;
      color: red;
      margin-bottom: 0px;
    }
  }
}
</style>
