<template>
  <section id="special">
    <div class="container">
      <div class="col-12 col-lg-10 mx-auto">
        <div class="row">
          <div class="col-lg-12 p-0">
            <div class="text-center bottom">
              <p>Special Notes</p>
            </div>
          </div>
        </div>
        <div class="row main d-flex justify-content-center">
            <div class="col-md-12">
                <ul v-for="(special, i) in specialInformation" :key="i" class="mb-0">
                    <li>
                        <span class="">{{special.title}}</span>: {{special.dec}}
                    </li>
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
    specialInformation: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';

#special{
    margin-top: 70px;
    .bottom {
    p {
      margin-bottom: 0px;
      @include title2;
    }
    color: $white;
    padding: 11px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: $darkblue;
  }

  .container {
      .main{
          padding: 65px 100px 30px 100px;
          background-color: $background-color;
          ul{
              list-style-type: disc !important;
              li{

              }
          }
      }
  }

}
</style>
