<template>
  <section id="informalActivitySpaces">
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-12 pb-2">
          <div class="details">
            <h2>Overview</h2>
            <p>
              {{ informalActivitySpaces.details }}
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <h3 class="title mt-5">Front Plaza</h3>
        <div
          v-for="(item, i) in informalActivitySpaces.frontPlaza"
          :key="i"
          class="col-lg-6 py-3"
        >
          <img :src="item.img" alt="" class="w-100" />
        </div>
        <div class="col-lg-12">
          <p class="note">
            Start of the Day and the end of the day, Different times -different
            seasons
          </p>
        </div>
      </div>
      <div class="row">
        <h3 class="title mt-5">Central Atrium</h3>
        <div
          v-for="(item, i) in informalActivitySpaces.centralAtrium"
          :key="i"
          class="col-lg-6 py-3"
        >
          <img :src="item.img" alt="" class="w-100" />
        </div>
        <div class="col-lg-12">
          <p class="note">
            Start of the Day and the end of the day, Different times -different
            seasons
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    informalActivitySpaces: { required: true, type: Object },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';

#informalActivitySpaces {
  .details {
    background: $background-color;
    padding: 80px;
    border-radius: 5px;
    h2 {
      @include title2;
    }
    p {
      @include paragraph;
    }
  }
  .title {
    @include title2;
    font-weight: bold;
    color: $darkblue;
    text-align: center;
  }
  .note {
    border-left: 11px solid $darkblue;
    background: $violot;
    padding: 23px;
    @include paragraph;
    font-weight: 500;
  }
}
</style>
