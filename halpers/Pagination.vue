<template>
  <nav aria-label="Page navigation example" class="text-center">
    <ul class="pagination justify-content-center">
      <li
        v-for="(page, i) in pagination.links"
        :key="'pagination_' + i"
        class="page-item"
        :class="page.label == pagination.current_page ? 'active' : ''"
      >
        <a
          v-if="page.label == '&laquo; Previous'"
          class="page-link"
          :class="page.url === null ? 'disabled' : ''"
          href="javascript:void(0)"
          @click="prevPagination"
          v-html="page.label"
        ></a>
        <a
          v-else-if="page.label == 'Next &raquo;'"
          class="page-link"
          href="javascript:void(0)"
       
          :class="page.url === null ? 'disabled' : ''"
          @click="nextPagination"
          v-html="page.label"
        ></a>
        <a
          v-else
          class="page-link"
          href="javascript:void(0)"
          @click="onClickPage(page.label)"
          v-html="page.label"
        ></a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'Pagination',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    pagination: {
      type: Object,
      required: false,
    },
  },

  methods: {
    chack(value) {
      // eslint-disable-next-line no-console
      console.log(value === null)
    },
    nextPagination() {
      this.onClickPage(this.pagination.current_page + 1)
    },
    prevPagination() {
      this.onClickPage(this.pagination.current_page - 1)
    },
    onClickPage(page) {
      this.$emit('pagechanged', page)
    },
  },
}
</script>
<style lang="scss">
.disabled{
  display:none;
   cursor: not-allowed;
  opacity: 0.5;
  text-decoration: none;
}
</style>
