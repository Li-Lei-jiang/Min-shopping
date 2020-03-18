<template>
  <div>
    <div class="headr-box">
      <div class="w">
        <div class="w-box">
          <div class="logo">M</div>
          <div class="rig-box">
            <div class="rig-box_list">
              <div class="inpt_s">
                <Input suffix="ios-search" placeholder="请输入商品信息" style="width: auto" />
              </div>
              <a href="#">全部商品</a>
              <a href="#">捐赠</a>
            </div>
            <div class="nav-aside">
              <div class="User" >
                <div class="user" >
                  <img src="../../image/me.png" alt @click="tologin"/>
                </div>
              </div>
              <div class="shop">
                <div class="shop_tp" >
                  <img src="../../image/cart.png" alt @click="toshopping"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="-sub" v-if ="navBarFixed">
          <div class="-sub_warp">
            <div class="ws">
              <ul class="ws_list">
                <li v-for="(item,index) in headtwo" :key="index"  @click="Tabchack(index)">
                  <a href="#">{{item}}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="-sub_show" v-else>
          <div class="_show_warp">
            <div class="_show_warp_w">
              <ul class="ws_list">
                <li v-for="(item,index) in headtwo" :key="index"  @click="Tabchack(index)">
                  <a href="#">{{item}}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headtwo: [
        "首页",
        "全部",
        "品牌周边",
        "捐赠名单",
        "后台管理系统",
        "XPay支付系统",
        "XBoot开发平台",
        "宣传视频",
        "Github",
        "商用授权"
      ],
      navBarFixed:false,
    };
  },
  components: {},
  methods: {
    watchScroll(e) {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //  当滚动超过 50 时，实现吸顶效果
      if (scrollTop > 99) {
        this.navBarFixed = false;
      } else {
        this.navBarFixed = true;
      }
    },
    tologin(){
      this.$router.push('/login')
    },
    Tabchack(index){
      this.$emit("passtoparent",index)
      // console.log(index)
    },
    toshopping(){
        this.$router.push('/shoppingcart')
    },

  },
  mounted() {
    //监听滚动事件
    window.addEventListener("scroll", this.watchScroll);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.headr-box {
  background: black;
  width: 100%;
}
.w {
  height: 100px;
  z-index: 30;
  position: relative;
}
.w-box {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
}
.logo {
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: white;
  font-size: 30px;
  border-radius: 50%;
}
.rig-box {
  display: flex;
}

.rig-box_list {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 22px;
}
.rig-box_list a {
  width: 110px;
  color: #c8c8c8;
  display: block;
  font-size: 14px;
  padding: 0 25px;
}
.nav-aside {
  position: relative;
  align-items: center;
  display: flex;
}
.user {
  width: 20px;
  height: 20px;
}
.User {
  margin-left: 41px;
  width: 36px;
}
.user img {
  width: 100%;
  height: 100%;
}
.shop {
  position: relative;
  float: left;
  margin-left: 21px;
  width: 61px;
  z-index: 99;
}
.shop_tp {
  width: 30px;
  height: 30px;
}
.shop_tp img {
  width: 100%;
  height: 100%;
}
.inpt_s {
  width: 306px;
}
.inpt_s input {
  width: 100% !important;
}
.-sub {
  position: relative;
  z-index: 20;
  height: 90px;
  background: #f7f7f7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
}
.-sub_warp {
  padding: 31px 0;
  height: 90px;
  position: relative;
}
.ws {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.ws_list {
  width: 100%;
  display: flex;
  padding-left: 1%;

}
.ws_list li:hover{
  a{
    color: #5079d9;
  }
}
.ws_list li {
  // display: block;
  // padding: 0 10px;

  line-height: 28px;
  margin-right: 2%;
}
.ws_list li a {
  color: #666;
}
// 吸顶效果
.-sub_show {
  position: fixed;
  z-index: 21;
  height: 60px;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #dadada;
  background-image: linear-gradient(#fff, #f1f1f1);
  // display: none;
  ._show_warp {
    padding: 0;
    height: 100%;
    display: flex;
    align-items: center;
    ._show_warp_w {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      width: 90%;
    }
  }
}
</style>