<template>
  <div id="waiver-info">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-left">
          <div class="info">
            
            <ul v-for="(information, i) in informations" :key="i">
              <li>{{ information.info }}</li>
            </ul>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  props: {
    informations: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
     
    }
  },
}
</script>
