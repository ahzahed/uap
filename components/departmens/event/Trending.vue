<template>
  <section id="trending">
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        <div v-for="(event, i) in trendingEvents" :key="i" class="col p-3">
          <div class="main-card h-100 shadow">
            <div class="card-top">
              <img :src="event.img" alt="event.title" class="w-100" />
              <div class="serial">
                <p class="text-center primary-btn event-btn mb-0">
                  {{ event.type }}
                </p>
              </div>
              <div class="h-100 text-top">
                <div class="ms-3 py-2">
                  <p class="card-text mb-0 title">
                    {{ event.title }}
                  </p>
                  <div class="mb-3"><small class="date">{{ event.date }}</small></div>
                </div>
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
  components: {},
  props: {
    trendingEvents: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';

#trending {
  margin-top: $section-padding;
  margin-bottom: $section-padding;
  .main-card {
    .card-top {
      position: relative;
      .serial {
        position: absolute;
        top: 10px;
        right: 10px;
        color: $white;
        .event-btn {
          background-color: $darkblue;
          padding: 11px 9px 11px 9px;
          @include paragraph1;
        }
      }
      .title {
        color: $darkblue;
        @include title3;
        text-align: left;
      }
      .date {
        color: #1266f1;
        @include paragraph1;
        font-weight: 0;
        text-align: left;
      }
      .text-top {
      }
    }
  }
}
</style>
