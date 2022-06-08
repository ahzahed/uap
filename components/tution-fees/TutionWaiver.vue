<template>
    <section id="tution-waiver">
        <div class="container">
        
                     <div class="main-table">
                         <div class="text-center creditHead">
              <h3>TUITION FEE WAIVER</h3>
              <p>Entry Level Waiver for Undergraduate Program(Only for 1st semester)</p>
            </div>
                    <table class="table table-borderless table-responsive">
                        <thead>
                            <tr class="" style="padding-bottom: 110px">
                                <th>SI. No</th>
                                <th>GPA of SSC/Equivalent</th>
                                <th>Total Semester</th>
                                <th class="hsc">GPA of HSC/ Equivalent
                                   
                                    <td class="subTitle">HSC</td>
                                    <td class="subTitle diploma">Diploma</td>
                                   
                                </th>
                                <th>Tuition fee Waiver</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(waiverDetail, i) in waiverDetails" :key="i" >
                                <td class="programText">{{i+1}}</td>
                                <td class="data">{{waiverDetail.ssc}}</td>
                                <td class="data">{{waiverDetail.totalSemester }}

                                <!-- </td>
                                <td><small>{{waiverDetail.hsc}}</small> <small class="ml-5">{{waiverDetail.diploma}}</small></td> -->
                                <td class="data">
                                    <span class="hsc-main">
                                        <td class="hscData">{{waiverDetail.hsc}}</td>
                                        <td>{{waiverDetail.diploma}}</td>
                                    </span>
                                </td>
                                <!-- <td></td> -->
                                <td class="data">{{waiverDetail.waiver}}</td>
                            </tr>
                        </tbody>
                    </table>
                     </div>
        
        </div>
        <!-- <slot></slot> -->
        <Waiver/>
    </section>
    
</template>

<script>
// import WaiverInfo from '../components/tution-fees/WaiverInfo.vue';
import Waiver from './Waiver.vue';

export default {
  
  
  props: {
    waiverDetails: {
      type: Array,
      required: true,
    },
    
  },
  data() {
    return {}
  },
  
components: {
    Waiver,
}
}
</script>

<style>
</style>