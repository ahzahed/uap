/* eslint-disable vue/require-default-prop */
<template>
  <section id="OfficeContact">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="text-center bottom">
            <h2>Admission Office contact</h2>
          </div>
        </div>
        <div class="col-lg-12 col-md-12 left">
          <div class="leftContent">
            <h2>Address</h2>
            <p> <b class="mr-2">Name: </b >{{ address.name }}</p>
            <p><b>Designation: </b>{{ address.designation }}</p>
            <p><b>Email:</b> {{ address.email }}</p>
            <p><b>Phone:</b> {{ address.phone_no }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-prop-types

    // eslint-disable-next-line vue/require-prop-types
    // eslint-disable-next-line vue/prop-name-casing
   address: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#OfficeContact {
  h2 {
    @include title2;
  }
  p {
    @include paragraph;
  }
  .left {
    padding-right: 0px;
    @include respond-below(md) {
      padding-right: 12px;
    }
    .leftContent {
      border-top-left-radius: 5px;
      //   height: 279px;
      padding: 80px 0px 80px 70px;
      background-color: $lightblue;
      text-align: left;
      @include respond-below(md) {
        padding: 10px;
      }
    }
  }

  .bottom {
    p {
      margin-bottom: 0px;
    }
    color: $white;
    padding: 11px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: $darkblue;
  }
}
</style>
