<template>
  <Banner>
    <BannerInfo
      :title="'Cloud platform for accelerating, developing and deploying projects'"
      :text="'On Refracto Platform, developers deploy their applications in Ray, and also use Databases as remote databases.'"
    />
    <Parallax />
    <img class="img" src="@/assets/images/landing-page/main/bg.svg" alt="#">
  </Banner>
</template>

<script>
import Banner from '@/components/RefBanner.vue'
import BannerInfo from '@/components/RefBanner-info.vue'
import Parallax from '@/pages/index/main/components/banner/components/parallax-img.vue'

export default {
  name: 'Main-Bnner',
  components: { Banner, BannerInfo, Parallax }
}
</script>

<style lang="scss" scoped>
.img {
  display: none;
  @media screen and (max-width: $extra-small) {
    display: block;
    transform: translate(-200px);
  }
}
</style>
