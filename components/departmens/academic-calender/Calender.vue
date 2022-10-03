<template>
  <section id="academic-calender">
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-12 text-center mx-auto">
          <div class="shadow-sm table-responsive">
            <table class="table table-borderless table-striped">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Update Date</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(list, i) in lists" :key="i">
                  <td>
                    <u
                      ><a :href="$config.baseURL + list.file" target="_blank">{{
                        list.file_title
                      }}</a></u
                    >
                  </td>
                  <td class="date">
                    {{ $moment(list.date).format('MMMM DD, YYYY') }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    lists: {
      type: Array,
      require: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#academic-calender {
  th {
    background-color: $background-color;
    padding-top: 48px;
    padding-bottom: 48px;
    padding-left: 131px;
    @include cardTitle;
  }

  .date {
    @include cardPara;
    font-weight: 300;
    color: $darkblue;
  }
  td {
    @include paragraph;
    font-weight: 500;
    text-align: left;
    padding-left: 131px;
    color: rgba(18, 102, 241, 0.75);

    padding-bottom: 20px;
    padding-top: 20px;
  }
}
</style>
