<template>
  <section id="contact">
    <div class="container">
      <div class="col-12 col-lg-10 mx-auto">
        <div class="row">
          <div class="col-lg-12 p-0">
            <div class="text-center bottom">
              <p>Admission Office contact</p>
            </div>
          </div>
        </div>
        <div class="row main shadow-sm">
          <div class="col-md-12">
              <div v-for="(contact, i) in contactInformation" :key="i" class="text-center mb-0">
                  <h4>{{contact.name}}</h4>
                  <h4>{{contact.designation}}</h4>
                  <a href = ""><span class="email">Email:</span> {{contact.email}}</a>
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
    contactInformation: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';

#contact {
  margin-top: 70px;
  margin-bottom: 120px;
  .bottom {
    p {
      margin-bottom: 0px;
      @include title2;
      font-weight: 600;
    }
    color: $white;
    padding: 11px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: $darkblue;
  }

  .main{
      background-color: $lightblue;
      padding-top: 60px;
      padding-bottom: 70px;
      border-radius: $border-radius;
      h4{
        @include paragraph;
        font-weight: 500;
        color: $darkblue;
          margin-bottom: 35px;
      }
      .email{
        @include paragraph;
        font-weight: 500;
        color: $darkblue;
      }
  }
}
</style>
