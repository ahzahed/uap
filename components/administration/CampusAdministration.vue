<template>
  <section id="campus">
    <div class="container mt-5">
      <div v-for="(item, i) in members" :key="i" class="row">
        <div class="col-lg-10 col-11 mx-auto">
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
          title: 'Prof. Dr. Md. Sultan Mahmud',
          position: 'Vice Chancellor (Acting)',
          email: 'vc@uap-bd.edu',
        },
        {
          img: require('@/static/BOD/05.jpg'),
          title: 'Prof. Dr. Md. Sultan Mahmud',
          position: 'Pro Vice Chancellor',
          email: 'vc@uap-bd.edu',
        },
        {
          img: require('@/static/BOD/05.jpg'),
          title: 'Air Commodore Ishfaq Ilahi Choudhury ',
          position: 'Treasurer',
          email: 'treasurer@uap-bd.edu',
        },
        {
          img: require('@/static/BOD/05.jpg'),
          title: 'Mr. Abdulllah Al Masud',
          position: 'Registrar',
          email: 'registrar@uap-bd.edu',
        },
        {
          img: require('@/static/BOD/05.jpg'),
          title: 'Dr. Md. Mostafizur Rahman',
          position: 'Deputy Registrar',
          email: 'deputyregistrar@uap-bd.edu',
        },
        {
          img: require('@/static/BOD/05.jpg'),
          title: 'Md. Obidur Rahman Mia',
          position: 'PS to Vice-Chancellor',
          email: 'pstovc@uap-bd.edu',
        },
        {
          img: require('@/static/BOD/05.jpg'),
          title: 'Md. Mushfiqur Rahman',
          position: 'Assistant Administrative Officer',
          email: 'm.mr@uap-bd.edu',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#campus {
  .card {
    border: none;
    // border-radius: 25px;
    @include respond-between(xs, sm) {
      margin-right: 50px;
      margin-left: 50px;
    }
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
      @include respond-below(sm) {
        height: 400px !important;
      }
      @include respond-below(xsl) {
        height: 300px !important;
      }
      @include respond-between(sm, md) {
        object-fit: cover;
      }
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
