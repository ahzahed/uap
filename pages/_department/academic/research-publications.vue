<template>
  <section id="faq">
    <Banner :banner="rp_banner" />
    <ResearchPublication :accolades="rp_body" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '../../../components/helpers/Banner.vue'
import ResearchPublication from '../../../components/departmens/academic/Research-publications.vue'
export default {
  components: { Banner, ResearchPublication },
  layout: 'HomeLayout',
  asyncData({ store, route }) {
    store.dispatch('researchPub/getRpBanner', route.params.department)
    store.dispatch('researchPub/getRpBody', route.params.department)
  },
  
  data() {
    return {
      
      accolades: [
        {
          index: 1,
          title: 'Year - 2021',
          details: [
            {
              title1:
                'A Transparent and Privacy-preserving Healthcare Platform with Novel Smart Contract for Smart Cities',
              desc: 'Abdullah Al Omar, Abu Kaisar Jamil, Amith Khandakar, Abdur Razzak Uzzal, Rabeya Bosri, Nafees Mansoor, Mohammad Shahriar Rahman (2021). A Transparent and Privacy-preserving Healthcare Platform with Novel Smart Contract for Smart Cities. IEEE Access. doi: 10.1109/ACCESS.2021.3089601.',
            },
            {
              title1:
                'A Machine Learning Based Approach during COVID-19 Pandemic',
              desc: 'Shams, A.B.; Hoque Apu, E.; Rahman, A.; Sarker Raihan, M.M.; Siddika, N.; Preo, R.B.; Hussein, M.R.; Mostari, S.; Kabir, R. (2021). Web Search Engine Misinformation Notifier Extension (SEMiNExt): A Machine Learning Based Approach during COVID-19 Pandemic. Healthcare 2021, 9, 156.',
            },
            {
              title1:
                'Trust Concerns Regarding Health-Related Smartphone Apps in Collecting Personally Identifiable Information Throughout COVID-19-like Zoonosis',
              desc: 'Hussein, M. R., Rahman, M. A., Mojumder, M. J. H., Ahmed, S., & Apu, E. H. (2021). Trust Concerns Regarding Health-Related Smartphone Apps in Collecting Personally Identifiable Information Throughout COVID-19-like Zoonosis. Journal of Engineering Advancements, 2(01), 35-40. https://doi.org/10.38032/jea.2021.01.005',
            },
          ],
        },
        {
          index: 2,
          title: 'Year - 2020',
          details: [
            {
              title1:
                'A Transparent and Privacy-preserving Healthcare Platform with Novel Smart Contract for Smart Cities',
              desc: 'Abdullah Al Omar, Abu Kaisar Jamil, Amith Khandakar, Abdur Razzak Uzzal, Rabeya Bosri, Nafees Mansoor, Mohammad Shahriar Rahman (2021). A Transparent and Privacy-preserving Healthcare Platform with Novel Smart Contract for Smart Cities. IEEE Access. doi: 10.1109/ACCESS.2021.3089601.',
            },
            {
              title1:
                'A Machine Learning Based Approach during COVID-19 Pandemic',
              desc: 'Shams, A.B.; Hoque Apu, E.; Rahman, A.; Sarker Raihan, M.M.; Siddika, N.; Preo, R.B.; Hussein, M.R.; Mostari, S.; Kabir, R. (2021). Web Search Engine Misinformation Notifier Extension (SEMiNExt): A Machine Learning Based Approach during COVID-19 Pandemic. Healthcare 2021, 9, 156.',
            },
            {
              title1:
                'Trust Concerns Regarding Health-Related Smartphone Apps in Collecting Personally Identifiable Information Throughout COVID-19-like Zoonosis',
              desc: 'Hussein, M. R., Rahman, M. A., Mojumder, M. J. H., Ahmed, S., & Apu, E. H. (2021). Trust Concerns Regarding Health-Related Smartphone Apps in Collecting Personally Identifiable Information Throughout COVID-19-like Zoonosis. Journal of Engineering Advancements, 2(01), 35-40. https://doi.org/10.38032/jea.2021.01.005',
            },
          ],
        },
        {
          index: 3,
          title: 'Year - 2019',
          details: [
            {
              title1:
                'A Transparent and Privacy-preserving Healthcare Platform with Novel Smart Contract for Smart Cities',
              desc: 'Abdullah Al Omar, Abu Kaisar Jamil, Amith Khandakar, Abdur Razzak Uzzal, Rabeya Bosri, Nafees Mansoor, Mohammad Shahriar Rahman (2021). A Transparent and Privacy-preserving Healthcare Platform with Novel Smart Contract for Smart Cities. IEEE Access. doi: 10.1109/ACCESS.2021.3089601.',
            },
            {
              title1:
                'A Machine Learning Based Approach during COVID-19 Pandemic',
              desc: 'Shams, A.B.; Hoque Apu, E.; Rahman, A.; Sarker Raihan, M.M.; Siddika, N.; Preo, R.B.; Hussein, M.R.; Mostari, S.; Kabir, R. (2021). Web Search Engine Misinformation Notifier Extension (SEMiNExt): A Machine Learning Based Approach during COVID-19 Pandemic. Healthcare 2021, 9, 156.',
            },
            {
              title1:
                'Trust Concerns Regarding Health-Related Smartphone Apps in Collecting Personally Identifiable Information Throughout COVID-19-like Zoonosis',
              desc: 'Hussein, M. R., Rahman, M. A., Mojumder, M. J. H., Ahmed, S., & Apu, E. H. (2021). Trust Concerns Regarding Health-Related Smartphone Apps in Collecting Personally Identifiable Information Throughout COVID-19-like Zoonosis. Journal of Engineering Advancements, 2(01), 35-40. https://doi.org/10.38032/jea.2021.01.005',
            },
          ],
        },
        {
          index: 4,
          title: 'Year - 2018',
          details: [
            {
              title1:
                'A Transparent and Privacy-preserving Healthcare Platform with Novel Smart Contract for Smart Cities',
              desc: 'Abdullah Al Omar, Abu Kaisar Jamil, Amith Khandakar, Abdur Razzak Uzzal, Rabeya Bosri, Nafees Mansoor, Mohammad Shahriar Rahman (2021). A Transparent and Privacy-preserving Healthcare Platform with Novel Smart Contract for Smart Cities. IEEE Access. doi: 10.1109/ACCESS.2021.3089601.',
            },
            {
              title1:
                'A Machine Learning Based Approach during COVID-19 Pandemic',
              desc: 'Shams, A.B.; Hoque Apu, E.; Rahman, A.; Sarker Raihan, M.M.; Siddika, N.; Preo, R.B.; Hussein, M.R.; Mostari, S.; Kabir, R. (2021). Web Search Engine Misinformation Notifier Extension (SEMiNExt): A Machine Learning Based Approach during COVID-19 Pandemic. Healthcare 2021, 9, 156.',
            },
            {
              title1:
                'Trust Concerns Regarding Health-Related Smartphone Apps in Collecting Personally Identifiable Information Throughout COVID-19-like Zoonosis',
              desc: 'Hussein, M. R., Rahman, M. A., Mojumder, M. J. H., Ahmed, S., & Apu, E. H. (2021). Trust Concerns Regarding Health-Related Smartphone Apps in Collecting Personally Identifiable Information Throughout COVID-19-like Zoonosis. Journal of Engineering Advancements, 2(01), 35-40. https://doi.org/10.38032/jea.2021.01.005',
            },
          ],
        },
      ],
    }
  },
  computed: {
    ...mapGetters('researchPub', ['rp_banner', 'rp_body']),
  },
}
</script>

<style></style>
