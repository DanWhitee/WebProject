<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__body grid--layout">
        <div class="left grid">
          <img class="left__logo" src="@/assets/images/landing-page/footer/footer-logo.svg" alt="logo">
          <h4 class="left__text desctop"> 
            Copyright © 2021 Refracto Inc. All Rights Reserved.
          </h4>
        </div>
        <template
          v-for="(item, index) in listInfo"
          :key="index"
        >
          <List
            class="grid"
            :title='item.title'
            :top='item.top'
            :center='item.center'
            :bottom='item.bottom'
          />          
        </template>
        <List class="networks grid" :title="'contact us'">
          <h5 class="networks__title">
            support@refracto.org
          </h5>
          <Networks class="networks__wrapper"/>
        </List>
        <h4 class="left__text mobile grid"> 
          Copyright © 2021 Refracto Inc. All Rights Reserved.
        </h4>
      </div>
    </div>
  </footer>
</template>

<script>
import List from '@/components/layout/RefFooter/components/list-info.vue'
import Networks from '@/components/layout/RefFooter/components/networks.vue'

export default {
  name: 'Footer',
  components: {List, Networks},
  data () {
    return {
      listInfo: [
        {
          title: 'platform',
          top: 'Ray',
          center: 'Databases',
          bottom: 'account'
        },
        {
          title: 'DOCUMENTATION',
          top: 'Privacy Policy',
          center: 'Terms Of Use',
          bottom: 'Cookie Policy'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 130px 0;
  background-color: $black-color;

  @media screen and (max-width: $extra-small) {
    padding: 50px 0;
  }
}
.grid--layout {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  @media screen and (max-width: $large) {
    grid-template-columns: repeat(3, 1fr);

    .grid:nth-child(4) {
      grid-column: 2/3
    }
  }

  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
    .grid:nth-child(1) {
      grid-row: 1/1;
    }
    .grid:nth-child(4) {
      grid-row: 1/1;
      grid-column: 2/3;
    }
  }

  @media screen and (max-width: $extra-small) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .grid:nth-child(1), .grid:nth-child(2), .grid:nth-child(3), .grid:nth-child(4), .grid:nth-child(5) {
      text-align: center
    }
  }
}
.left {
  &__text {
    @extend %p-small;
    text-transform: uppercase;
    color: $dark-color;
    margin-top: 60px;
    max-width: 230px;
  }
}
.desctop {
  @media screen and (max-width: $extra-small) {
    display: none;
  }
}
.mobile {
  @media screen and (min-width: $extra-small) {
    display: none;
  }
}
.footer__text {
  @extend %p-small;
  text-transform: uppercase;
  color: $dark-color;
  margin-top: 60px;
  max-width: 230px;
}
.networks {
  &__title {
    @extend %p-big;
    text-transform: uppercase;
    font-size: 18px;
    color: $white-color;
    margin-bottom: 15px;
  }
}
</style>
