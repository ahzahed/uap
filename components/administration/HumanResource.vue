<template>
  <section id="human">
    <div class="container mt-5">
      <div v-for="(item, i) in members" :key="i" class="row">
        <div class="col-lg-10 mx-auto">
          <div class="card mb-3 shadow-sm">
            <div class="row">
              <div class="col-md-4 col-sm-4 leftSide">
                <img
                  :src="item.img"
                  class="img-fluid w-100 h-100"
                  :alt="item.title"
                />
              </div>
              <div class="col-md-8 col-sm-8 rightSide">
                <div class="card-body">
                  <h5 class="card-title">{{ item.title }}</h5>
                  <p class="card-text">
                    {{ item.position }}
                  </p>
                  <h5 class="card-title">Email</h5>
                  <p class="card-text mb-4">
                    {{ item.email }}
                  </p>
                  <nuxt-link to="#" class="primary-btn">Explore</nuxt-link>
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
  data() {
    return {
      members: [
        {
          img: require('@/static/BOD/05.jpg'),
          title: 'Md Faruk Hossain',
          position: 'Sr. Administrative Officer & In-charge',
          email: 'ad.hr@uap-bd.edu',
        },
        {
        img: require('@/static/BOD/05.jpg'),
          title: 'Muhammad Taneem Jubair',
          position: 'Sr. Administrative Officer',
          email: 'taneem@uap-bd.edu',
        },
        {
       img: require('@/static/BOD/05.jpg'),
          title: 'Afsana Binte Bari',
          position: 'Sr. Administrative Officer',
          email: 'afsana2014@uap-bd.edu',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#human {
  .card {
    border: none;
    // border-radius: 25px;
  }
  .rightSide {
    background-color: $background-color;
    padding: 15px 0px 15px 20px;
    display: grid;
    align-items: center;
    border-radius: 5px;
    @include respond-below(sm) {
      padding-left: 0px;
      justify-content: center;
    }
  }
  .leftSide {
    padding-left: 0px;
    padding-right: 0px;

    img {
      border-radius: 5px;
    }
  }
  h5 {
    @include cardTitle;
  }
  p {
    @include cardPara;
  }
}
</style>
