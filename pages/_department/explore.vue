<template>
  <section id="faq">
    <Banner :banner="academic_explore_banner" />
    <Explore :explore-info="academic_explore" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../../components/helpers/Banner.vue'
import Explore from '../../components/departmens/explore/Explore.vue'
export default {
  components: {
    Banner,
    Explore,
  },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch(
      'academicExplore/getAcademicExploreBanner',
      route.params.department
    )
    store.dispatch('academicExplore/getAcademicExplor', route.params.department)
  },
  data() {
    return {
      exploreInfo: [
        {
          events: [
            {
              img: require('@/static/event/event.jpg'),
            },
            {
              img: require('@/static/event/event.jpg'),
            },
            {
              img: require('@/static/event/event.jpg'),
            },
            {
              img: require('@/static/event/event.jpg'),
            },
            {
              img: require('@/static/event/event.jpg'),
            },
            {
              img: require('@/static/event/event.jpg'),
            },
          ],
          index: 1,
          title: 'CSE Laboratories & Classroom',
          desc: '<p><p style="margin-bottom: 50px">The department of CSE has specialized laboratories, all of which are assigned to different purposes. There are lab attendants as well as lab assistants for each lab. Also a faculty member is associated with each lab to monitor the overall work environment of the labs. Many of the lab facilities are pride of the department as they are recognized by external peers as is evident in the formation of Mobile Games and Apps Development Lab, which is facilitated by the Bangladesh Government authority, the patronization offered to only few of the universities of Bangladesh</p><p style="margin-bottom: 0px">UAP puts ample focus on developing its classroom and lab facilities with necessary modern equipment. About the classrooms UAP maintains a unique policy by making every classroom available for all departments so that a sense of cohesiveness and communal atmosphere is maintained within varied departments. The classrooms are also varied in sizes accommodating 30 to 60 students. In every semester the classroom slots are allocated centrally to each department according to their requisition. The rest of the classes are kept free to fulfill additional or temporary requirements of each department whenever they need one. This unique system allows the students and faculties from one department to interact with students from other departments and to create a sense of oneness. The class rooms are air conditioned and equipped with computer, multimedia projector, Sound system (fixed or on demand), Wi-Fi etc.</p></p>',
        },
        {
          events: [
            {
              img: require('@/static/event/event.jpg'),
            },
            {
              img: require('@/static/event/event.jpg'),
            },
            {
              img: require('@/static/event/event.jpg'),
            },
            {
              img: require('@/static/event/event.jpg'),
            },
            {
              img: require('@/static/event/event.jpg'),
            },
            {
              img: require('@/static/event/event.jpg'),
            },
          ],
          index: 2,
          title: 'Programming Lab I, II-cum-VLSI Lab, III, IV, V',
          desc: '<p><p style="margin-bottom: 50px">The department of CSE has specialized laboratories, all of which are assigned to different purposes. There are lab attendants as well as lab assistants for each lab. Also a faculty member is associated with each lab to monitor the overall work environment of the labs. Many of the lab facilities are pride of the department as they are recognized by external peers as is evident in the formation of Mobile Games and Apps Development Lab, which is facilitated by the Bangladesh Government authority, the patronization offered to only few of the universities of Bangladesh</p><p style="margin-bottom: 0px">UAP puts ample focus on developing its classroom and lab facilities with necessary modern equipment. About the classrooms UAP maintains a unique policy by making every classroom available for all departments so that a sense of cohesiveness and communal atmosphere is maintained within varied departments. The classrooms are also varied in sizes accommodating 30 to 60 students. In every semester the classroom slots are allocated centrally to each department according to their requisition. The rest of the classes are kept free to fulfill additional or temporary requirements of each department whenever they need one. This unique system allows the students and faculties from one department to interact with students from other departments and to create a sense of oneness. The class rooms are air conditioned and equipped with computer, multimedia projector, Sound system (fixed or on demand), Wi-Fi etc.</p></p>',
        },
        {
          events: [
            {
              img: require('@/static/event/event.jpg'),
            },
            {
              img: require('@/static/event/event.jpg'),
            },
            {
              img: require('@/static/event/event.jpg'),
            },
            {
              img: require('@/static/event/event.jpg'),
            },
            {
              img: require('@/static/event/event.jpg'),
            },
            {
              img: require('@/static/event/event.jpg'),
            },
          ],
          index: 3,
          title: 'Mobile Games and Apps Development Lab',
          desc: '<p><p style="margin-bottom: 50px">The department of CSE has specialized laboratories, all of which are assigned to different purposes. There are lab attendants as well as lab assistants for each lab. Also a faculty member is associated with each lab to monitor the overall work environment of the labs. Many of the lab facilities are pride of the department as they are recognized by external peers as is evident in the formation of Mobile Games and Apps Development Lab, which is facilitated by the Bangladesh Government authority, the patronization offered to only few of the universities of Bangladesh</p><p style="margin-bottom: 0px">UAP puts ample focus on developing its classroom and lab facilities with necessary modern equipment. About the classrooms UAP maintains a unique policy by making every classroom available for all departments so that a sense of cohesiveness and communal atmosphere is maintained within varied departments. The classrooms are also varied in sizes accommodating 30 to 60 students. In every semester the classroom slots are allocated centrally to each department according to their requisition. The rest of the classes are kept free to fulfill additional or temporary requirements of each department whenever they need one. This unique system allows the students and faculties from one department to interact with students from other departments and to create a sense of oneness. The class rooms are air conditioned and equipped with computer, multimedia projector, Sound system (fixed or on demand), Wi-Fi etc.</p></p>',
        },
        {
          events: [
            {
              img: require('@/static/event/event.jpg'),
            },
            {
              img: require('@/static/event/event.jpg'),
            },
            {
              img: require('@/static/event/event.jpg'),
            },
            {
              img: require('@/static/event/event.jpg'),
            },
            {
              img: require('@/static/event/event.jpg'),
            },
            {
              img: require('@/static/event/event.jpg'),
            },
          ],
          index: 4,
          title: 'Project Lab',
          desc: '<p><p style="margin-bottom: 50px">The department of CSE has specialized laboratories, all of which are assigned to different purposes. There are lab attendants as well as lab assistants for each lab. Also a faculty member is associated with each lab to monitor the overall work environment of the labs. Many of the lab facilities are pride of the department as they are recognized by external peers as is evident in the formation of Mobile Games and Apps Development Lab, which is facilitated by the Bangladesh Government authority, the patronization offered to only few of the universities of Bangladesh</p><p style="margin-bottom: 0px">UAP puts ample focus on developing its classroom and lab facilities with necessary modern equipment. About the classrooms UAP maintains a unique policy by making every classroom available for all departments so that a sense of cohesiveness and communal atmosphere is maintained within varied departments. The classrooms are also varied in sizes accommodating 30 to 60 students. In every semester the classroom slots are allocated centrally to each department according to their requisition. The rest of the classes are kept free to fulfill additional or temporary requirements of each department whenever they need one. This unique system allows the students and faculties from one department to interact with students from other departments and to create a sense of oneness. The class rooms are air conditioned and equipped with computer, multimedia projector, Sound system (fixed or on demand), Wi-Fi etc.</p></p>',
        },
      ],
    }
  },
  computed: {
    ...mapGetters('academicExplore', [
      'academic_explore_banner',
      'academic_explore',
    ]),
  },
}
</script>

<style></style>
