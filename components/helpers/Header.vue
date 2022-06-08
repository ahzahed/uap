<template>
  <div class="mambars_header">
    <div class="container">
      <div class="col-md-12 mx-auto text-center">
        <ul class="nav justify-content-center">
          <li v-for="(item, i) in list" :key="'item_' + i" class="nav-item">
            <nuxt-link
              class="nav-link my-3"
              :class="item.id == $route.query.id ? 'nuxt-link-active' : ''"
              :to="{ path: `/${page}/${item.slug}`, query: { id: item.id } }"
              >{{ item.section }}</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  props: {
    page: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      select_item: this.list[0],
    }
  },
  methods: {
    ShowItem(item) {},
  },
}
</script>
<style lang="scss" scoped>
@import './styles/_main.scss';
.mambars_header {
  border-bottom: 1px solid #cccccc;
  padding: 40px 0;
  .nav-item {
    .nav-link {
      font-size: 17px;
      // font-weight: 500;
      color: $darkblue;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      border: 1px solid transparent;
      transition: all 0.3s ease-in-out;
      &:hover {
        border: 1px solid $darkblue;
      }
      &:first-child {
        margin-right: 10px;
      }
    }
    .active {
      background-color: $darkblue;
      border: 1px solid $darkblue;
      color: $white;
      font-weight: 500;
    }
  }
}
</style>
