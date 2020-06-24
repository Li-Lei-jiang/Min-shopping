<template>
  <div>
    <div class="official">
      <div class="gray-box">
        <div class="title">
          <div class="title_txt" >{{Recommend.name}}</div>         
        </div>
        <div>
          <div class="floors">
            <div
              v-for="(item,index) in Recommend.panelContents"
              :key="index"
              :class="{banners:index == 0,good_item:index > 0}"
            >
              <div v-if="index ==0" class="br1">
                <img :src="item.picUrl" alt class="br1_tp" />
              </div>

              <div class="good-tp" v-if="index > 0">
                <img :src="item.picUrl" class="good-tps" alt />
              </div>
              <div v-if="index > 0" class="good-title">{{item.productName}}</div>
              <div v-if="index > 0" class="usb-title">{{item.subTitle}}</div>
              <div v-if="index > 0" class="good-price">
                <div class="tab">
                  <div class="look">查看详情</div>
                  <div class="add" @click="addcart(item)">加入购物车</div>
                </div>
                <div class="salePrice">
                  <span>￥</span>
                  {{item.salePrice}}
                </div>
              </div>
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
    return {};
  },
  props: {
    Recommend: {
      type: Object,
      default: () =>{}
    }
  },
  components: {},
  methods: {
     addcart(e) {
      let productId = e.productId;
      this.$api
        .addCart({productId:productId})
        .then(res => {
          if(res.code === 200){
            this.$Message.success("加入购物车成功");
          }
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      // console.log(e.productId)
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.official {
  margin-top: 30px;
  .gray-box {
    width: 90%;
    margin: 0 auto;
    position: relative;
    margin-bottom: 30px;
    overflow: hidden;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #dcdcdc;
    border-color: rgba(0, 0, 0, 0.14);
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
    .title {
      padding-left: 30px;
      border-bottom: 1px solid #d4d4d4;
      background: linear-gradient(#fbfbfb,#ececec);
      z-index: 9999;
      .title_txt {
        font-size: 18px;
        font-size: 18px;
        font-weight: 400;
        color: #626262;
        
        height: 60px;
        line-height: 60px;
        display: inline-block;
      }
    }
    .floors:hover {
      .banners {
        box-shadow: inset 0 0 38px rgba(0, 0, 0, 0.08);
       
      }
      .good_item:hover {
        transform: translateY(0px);
         transition: all 0.15s ease;
        box-shadow: 1px 1px 20px #999;
          .tab {
            display: block;
          }
          .salePrice {
            display: none;
          }
        }
     
    }
    .floors {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .banners {
        width: 50%;
        height: 430px;
       .br1{
        //  width: 50%;
        height: 430px;
          .br1_tp {
          width: 100%;
          height: 100%;
        }
       }
      }

      .good_item {
        width: 25%;
        height: 430px;
       .good-tp{
         text-align: center;
          .good-tps {
              margin: 50px auto 10px;
              width: 206px;
              height: 206px;
              display: block;
        }
       }
        .good-title {
          line-height: 1.2;
          font-size: 16px;
          color: #424242;
          margin: 0 auto;
          padding: 0 14px;
          text-align: center;
          overflow: hidden;
        }
        .usb-title {
          text-align: center;
          line-height: 1.2;
          font-size: 12px;
          color: #d0d0d0;
          padding: 10px;
        }
        .good-price {
          margin: 15px 0;
          height: 30px;
          text-align: center;
          line-height: 30px;
          color: #d44d44;
          font-family: Arial;
          font-size: 18px;
          font-weight: 700;
          .tab {
            display: flex;
            margin: 0 auto;
            display: none;
            width: 70%;
            .look {
              border: 1px solid #e1e1e1;
              border-radius: 4px;
              font-size: 12px;
              color: #646464;
              background-color: #f9f9f9;
              width: 100px;
              height: 30px;
              display:inline-block;
              line-height: 28px;
              margin: 0px 5px;
              background-image: linear-gradient(180deg, #fff, #f9f9f9);
            }
            .add {
              border: 1px solid #5c81e3;
              border-radius: 4px;
              font-size: 12px;
              width: 100px;
              height: 30px;
              line-height: 28px;
               display:inline-block;
              color: #fff;
              background-color: #678ee7;
              margin: 0px 5px;
              background-image: linear-gradient(180deg, #678ee7, #5078df);
            }
          }
        }
      }
    }
  }
}
</style>px