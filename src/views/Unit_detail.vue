<template>
  <div class="container unitDetail">
    <appBackToTop></appBackToTop>
    <table class="udList" v-if="showDetail">
      <tr>
        <td>Id</td>
        <td>{{ unitDetail.id }}</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>{{ unitDetail.name }}</td>
      </tr>
      <tr>
        <td>Description</td>
        <td>{{ unitDetail.description }}</td>
      </tr>
      <tr>
        <td>Min. required age</td>
        <td>{{ unitDetail.age }}</td>
      </tr>
      <tr v-if="unitDetail.cost && unitDetail.cost.Wood">
        <td>Wood cost</td>
        <td>{{ unitDetail.cost.Wood }}</td>
      </tr>
      <tr v-if="unitDetail.cost && unitDetail.cost.Food">
        <td>Food cost</td>
        <td>{{ unitDetail.cost.Food }}</td>
      </tr>
      <tr v-if="unitDetail.cost && unitDetail.cost.Gold">
        <td>Gold cost</td>
        <td>{{ unitDetail.cost.Gold }}</td>
      </tr>
      <tr>
        <td>Build time</td>
        <td>{{ unitDetail.build_time }}</td>
      </tr>
      <tr>
        <td>Reload time</td>
        <td>{{ unitDetail.reload_time }}</td>
      </tr>
      <tr>
        <td>Hit points</td>
        <td>{{ unitDetail.hit_points }}</td>
      </tr>
      <tr>
        <td>Attack</td>
        <td>{{ unitDetail.attack }}</td>
      </tr>
      <tr>
        <td>Accuracy</td>
        <td>{{ unitDetail.accuracy }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import backToTop from '../components/backToTop'

export default {
  components: {
    appBackToTop: backToTop,
  },
  data() {
    return {
      unitDetail: false,
      showDetail: false,
      unitId: false,
    }
  },
  methods: {
    getDetailData() {
      this.$http({
        method: 'get',
        url: 'https://api.jsonbin.io/b/5f2d7679dddf413f95bf132f'
      }).then((response) => {
        this.unitsList = response.data.units;
        for(let i = 0; i < this.unitsList.length; i++) {
          if(this.unitsList[i].id ==  this.unitId) {
            this.unitDetail = this.unitsList[i];
            if(this.unitDetail) {
              this.showDetail = true;
            }
          }
        }
      }).catch(error => {
        console.log(error);
      });
    },
  },
  mounted() {   
    this.unitId = this.$route.params.unitId;
    this.getDetailData();
  }
}
</script>