<template>
  <div class="card" style="cursor: pointer">
    <img :src="item.image" class="card-img" :alt="item.title" />
    <div class="card-img-overlay shadow">
      <h5 class="card-title">
        <span class="card-title-dot"></span>{{ item.topic }}
      </h5>
      <p class="card-text">
        {{ item.title }}
      </p>
      <span class="card-date">{{
        $moment(item.date).format('MMMM DD, YYYY')
      }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          image: '',
          title: '',
          topic: '',
          date: '',
        }
      },
    },
  },
}
</script>
<style lang="scss" scoped>
@import './styles/_main.scss';
  .card {
    margin-top:60px;
        .card-img {
          max-width: 100%;
          height: 420px;
        }
        .card-img-overlay {
          top: inherit;
          background-color: $white;
          margin-left: 15px;
          margin-right: 15px;
          margin-bottom: -30px;
          // box-shadow: 4px 20px 40px rgba(115, 115, 115, 0.25);
          .card-title {
            font-size: 12px;
            font-weight: 400;
            color: $text-color;
            line-height: 18px;
            .card-title-dot {
              width: 6px;
              height: 6px;
              background: #00b74a;
              border-radius: 50%;
              display: inline-block;
              margin-right: 5px;
            }
          }
          .card-text {
            font-weight: 500;
            font-size: 14px;
            line-height: 21px;
            color: $darkblue;
          }
          .card-date {
            font-size: 12px;
            line-height: 18px;
            color: $dark-text;
            font-weight: 400;
          }
        }
      }
</style>

