<template>
    <a id="backToTop" @click="backToTop"><i class="fas fa-chevron-up"></i></a>
</template>

<script>
export default {
  methods: {
    backToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    backToTopVisible() {
      let backToTopBtn = document.querySelector('#backToTop');
      if(backToTopBtn) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          backToTopBtn.style.display = "flex";
        } else {
          backToTopBtn.style.display = "none";
        }
      }
    }
  },
  mounted() {
    this.backToTopVisible();
    window.addEventListener('scroll', this.backToTopVisible);
  }
}
</script>

<style>

</style>