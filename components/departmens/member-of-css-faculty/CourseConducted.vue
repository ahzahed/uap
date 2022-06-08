<template>
  <section id="courseConducted">
    <div class="container px-4 my-2">
      <div class="row shadow">
        <h3 class="text-center mt-5">Course Conducted</h3>
        <div class="col-md-6 my-5">
          <div class="px-4 mx-3 leftSide">
            <h4 class="mb-3">Undergraduate Program</h4>
            <div
              class="academicTeachingLists"
              v-html="profile.undergraduate_programe"
            ></div>
          </div>
        </div>
        <div class="col-md-6 my-5">
          <div class="px-4 mx-3 rightSide">
            <h4 class="mb-4">Graduate Program</h4>
            <div
              class="academicTeachingLists"
              v-html="profile.postgraduate_programe"
            ></div>
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
    profile: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      undergraduate: [
        'CSE 303: Data Communication.',
        'CSE 317: Computer Architecture.',
        'CSE 405: Simulation and Modeling.',
        'CSE 313: Numerical Methods.',
        'CSE 405: Simulation and Modeling.',
        'CSE 313: Numerical Methods.',
        'CSE 405: Simulation and Modeling.',
        'CSE 313: Numerical Methods.',
      ],
      graduate: [
        'MCSE 6003: Advanced Database Management System.',
        'MCS 6011: Advanced Artificial Intelligence and Expert System.',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#courseConducted {

  .leftSide::-webkit-scrollbar {
    width: 10px;
    height: 100px;
    color: red;
  }
  .leftSide::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 60px;
    background-color: #f5f5f5;
  }
  .leftSide::-webkit-scrollbar-thumb {
    border-radius: 60px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: $darkblue;
  }
  
  .leftSide {
    padding-left: 20px;
    height: 250px;
    overflow-y: scroll;
    h4 {
      @include title3;
    }
  }

  .rightSide::-webkit-scrollbar {
    width: 10px;
    height: 100px;
    color: red;
  }
  .rightSide::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 60px;
    background-color: #f5f5f5;
  }
  .rightSide::-webkit-scrollbar-thumb {
    border-radius: 60px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: $darkblue;
  }

  .rightSide {
    height: 250px;
    overflow-y: scroll;
    h4 {
      @include title3;
    }
  }
  h3 {
    @include cardTitle;
  }
  ul {
    list-style-type: disc;
  }
}
</style>
