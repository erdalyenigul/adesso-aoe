<template>
  <div class="container units">
    <appBackToTop></appBackToTop>
    <div class="agesSelect">
      <div class="form-radio">
        <div class="ageFilterHead">Age Filter : </div>
        <div class="radio">
          <label>
            <input v-model="ageSelect" value="" type="radio" name="ageSelect" checked="checked" />All
          </label>
        </div>
        <div class="radio">
          <label>
            <input v-model="ageSelect" value="Dark" type="radio" name="ageSelect" />Dark
          </label>
        </div>
        <div class="radio">
          <label>
            <input v-model="ageSelect" value="Feudal" type="radio" name="ageSelect" />Feudal
          </label>
        </div>
        <div class="radio">
          <label>
            <input v-model="ageSelect" value="Castle" type="radio" name="ageSelect" />Castle
          </label>
        </div>
        <div class="radio">
          <label>
            <input v-model="ageSelect" value="Imperial" type="radio" name="ageSelect" />Imperial
          </label>
        </div>
      </div>
      <input v-model="ageSelectName" type="text" placeholder="Character name search" class="characterNameSearch" />
    </div>
    <div class="costSelect">
      <div class="cItem">
        <div class="checkbox">
          <label>
            <input v-model="costTypeWood" type="checkbox" />Wood
          </label>
        </div>
        <div class="cSlider">
          <input id="woodRange" type="range" min="0" max="200" step="1" :disabled="!costTypeWood" v-model="woodSliderValue">
        </div>
        <div class="cCounter">{{ woodSliderValue }}</div>
      </div>
      <div class="cItem">
        <div class="checkbox">
          <label>
            <input v-model="costTypeFood" type="checkbox" />Food
          </label>
        </div>
        <div class="cSlider">
          <input id="foodRange" type="range" min="0" max="200" step="1" :disabled="!costTypeFood" v-model="foodSliderValue">
        </div>
        <div class="cCounter">{{ foodSliderValue }}</div>
      </div>
      <div class="cItem">
        <div class="checkbox">
          <label>
            <input v-model="costTypeGold" type="checkbox" />Gold
          </label>
        </div>
        <div class="cSlider">
          <input id="goldRange" type="range" min="0" max="200" step="1" :disabled="!costTypeGold" v-model="goldSliderValue">
        </div>
        <div class="cCounter">{{ goldSliderValue }}</div>
      </div>
    </div>
    <div class="uList">
      <table>
        <tr class="head">
          <td>ID</td>
          <td>Name</td>
          <td>Age</td>
          <td>Cost</td>
        </tr>
        <tr v-for="unit in unitsListFinal" :key="unit.id">
          <td>{{ unit.id }}</td>
          <td><router-link  :to="{ name: 'Unit_detail', params: {unitId: unit.id} }">{{ unit.name }}</router-link></td>
          <td>{{ unit.age }}</td>
          <td><span v-for="(value, name, index) in unit.cost" :key="index" :id="name">{{ name }} {{ value }}</span></td>
        </tr>
      </table>
    </div>
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
      unitsList: [],
      ageSelect: '',
      ageSelectName: '',
      woodSliderValue: 200,
      foodSliderValue: 200,
      goldSliderValue: 200,
      costTypeWood: '',
      costTypeFood: '',
      costTypeGold: '',
      unitsListFinal: [],
    }
  },
  methods: {
    getData() {
      this.$http({
        method: 'get',
        url: 'https://api.jsonbin.io/b/5f2d7679dddf413f95bf132f'
      }).then((response) => {
        this.unitsList = response.data.units;
        this.unitsListFilter();
      }).catch(error => {
        console.log(error);
      });
    },
    unitsListFilter() {
      this.unitsListFinal = [];
      this.unitsList.filter(unit => {
        if ( 
        ( !this.ageSelect || unit.age.match(this.ageSelect) ) &&
        ( !this.ageSelectName || (unit.name.toLowerCase().indexOf(this.ageSelectName.toLowerCase()) > -1) ) &&
        ( !this.costTypeWood || (unit.cost != null && unit.cost.Wood != null && unit.cost.Wood <= this.woodSliderValue) ) && 
        ( !this.costTypeFood || (unit.cost != null && unit.cost.Food != null && unit.cost.Food <= this.foodSliderValue) ) && 
        ( !this.costTypeGold || (unit.cost != null && unit.cost.Gold != null && unit.cost.Gold <= this.goldSliderValue) )
        ) { 
          this.unitsListFinal.push(unit); 
          }
      });
    }
  },
  computed: {
    filterWatch() {
      return this.ageSelect, 
      this.ageSelectName, 
      this.costTypeWood, 
      this.costTypeFood, 
      this.costTypeGold, 
      this.woodSliderValue, 
      this.foodSliderValue, 
      this.goldSliderValue, 
      Date.now();
    }
  },
  watch: {
    filterWatch() {
      this.unitsListFilter();
    }
  },
  mounted() {
    this.getData();
  }
}
</script>
