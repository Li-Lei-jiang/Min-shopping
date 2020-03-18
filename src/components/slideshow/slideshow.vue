<template>
  <div>
    <div class="bannerg">
      <div class="ban_all">
        <Carousel
          class="banners"
          :radius-dot="setting.radiusdot"
          loop
          :autoplay="setting.autoplay"
          :autoplay-speed="setting.autoplayspeed*1"
          :dots="setting.dots"
          :dots-size="setting.dotssize"
        >
          <CarouselItem class="banner_tp" v-for="(item,index) in slideshows" :key="index">
            <div class="banner">
              <img :src="item.picUrl" alt class="banner1" />
              <img :src="item.picUrl2" alt class="banner1" />
              <img :src="item.picUrl3" alt class="banner1" />
            </div>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
      
  </div>
</template>

<script>
export default {
  data() {
    return {
      setting: {
        autoplay: true,
        autoplayspeed: "5000",
        dots: "inside",
        radiusdot: true,
        dotssize: "2em"
      }
    };
  },
  props: {
    slideshows: {
      type: Array,
      default: () => []
    }
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.bannerg {
  background: rgb(237, 237, 237);
  margin-bottom: 1.5%;
  .ban_all {
    padding-top: 1.5%;
    width: 90%;
    margin: 0 auto;
    .banners {
      height: 500px;
      .banner_tp {
        display: flex;
        // display: inline-block;
        .banner {
          
          position: relative;
          width: 100%;
          height: 500px;
          .banner1 {
            position: absolute;
            display: inline-block;
            height: 100%;
            width: 100%;
            border-radius: 10px;
          }
        }
      }
    }
  }
}
</style>