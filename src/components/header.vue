<template>
  <header>
    <div class="headLeft">
      <router-link :to="{ name: 'Home' }">
        <img class="logo" src="../assets/images/logo.png" alt="AOE">
      </router-link>
    </div>
    <div class="headRight">
      <div class="menu">
        <router-link :to="{ name: 'Home' }"><i class="fas fa-home"></i> Home</router-link>
        <router-link :to="{ name: 'Units' }"><i class="fas fa-edit"></i> Units</router-link>
        <router-link :to="{ name: 'Contact' }"><i class="fas fa-id-card"></i> Contact</router-link>
      </div>
      <div class="mobileMenuBtn">
        <a href="javascript:;" @click="mobileMenuVisible = !mobileMenuVisible"><i class="fas fa-bars"></i></a>
      </div>
    </div>
    <div class="mobileMenu" v-if="mobileMenuVisible">
      <a href="javascript:;" @click="mobileMenuVisible = !mobileMenuVisible" class="mobileMenuCloseBtn"><i class="far fa-times-circle"></i></a>
      <router-link :to="{ name: 'Home' }" class="mobileMenuLogo">
        <img class="logo" src="../assets/images/logoMobile.png" alt="AOE">
      </router-link>
      <ul>
        <li><router-link :to="{ name: 'Home' }"><i class="fas fa-home"></i> Home</router-link></li>
        <li><router-link :to="{ name: 'Units' }"><i class="fas fa-edit"></i> Units</router-link></li>
        <li><router-link :to="{ name: 'Contact' }"><i class="fas fa-id-card"></i> Contact</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuVisible: false,
    }
  },
  watch: {
    $route(){
      this.mobileMenuVisible = false;
    }
  }
}
</script>