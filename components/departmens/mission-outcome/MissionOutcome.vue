<template>
  <section id="MissionOutcome">
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-11 text-left mx-auto">
          <div class="details">
            <h1 class="mb-5">{{ title }}</h1>
            <p>{{ details }}</p>
            <h5>Vision</h5>
            <p>{{ vision }}</p>
            <h5>Mission</h5>
            <p>{{ mission.details }}</p>
            <ul v-for="(item, i) in mission.detailsGroup" :key="i">
              <li>{{ item }}</li>
            </ul>
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
      title: 'Department of Computer Science and Engineering (CSE)',
      details:
        'The Vision and Mission of the Department of Computer Science and Engineering, University of Asia Pacific are stated below:',
      vision:
        'The department of Computer Science and Engineering (CSE), University of Asia Pacific (UAP) is striving for a pioneer role in ICT through excellence in education, research and development towards preparing graduates as a global leader with quality education, innovative ideas, extracurricular activities and collaboration between industry and academia.',
      mission: {
        details:
          'Department of CSE believes in the pursuit of excellence by developing students in creating, applying and imparting knowledge of ICT. Educational curriculum, research and collaboration between academia and industry are given highest priority. Department of CSE, UAP aspires to produce graduates capable of taking leadership in the field of their best interest. We nurtures graduates in',
        detailsGroup: [
          'Understanding the basic principles of computational, electric and modern technologies',
          'Promoting creativity by applying their theoretical knowledge in practical problem solving',
          'Enabling them to communicate ideas clearly and concisely both written and verbally',
          'Creating awareness about environment, social context, and economic development within the ethical boundaries',
          'Engaging for further research or professional involvement',
        ],
      },
    }
  },
}
</script>
<style lang="scss" scoped>
@import './styles/_main.scss';
#MissionOutcome {
  .details {
    height: 980px;
    overflow-y: scroll;
    border-bottom: 21px solid $darkblue;
    padding: 150px;

    background-color: $lightblue;
    border-radius: 5px;
    ul {
      list-style-type: disc;
    }
  }
}
</style>
