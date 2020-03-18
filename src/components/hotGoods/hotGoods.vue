<template>
  <div>
    <div class="hot">
      <div class="hot_box">
        <div class="title">
          <div class="title_txt">热门商品</div>
        </div>
        <div class="hots">
          <div class="goods-item" v-for="(item,index) in hotGoods" :key="index">
            <div class="good-img">
              <img :src="item.picUrl" alt class="good-tp" />
            </div>
            <div class="good-title">{{item.productName}}</div>
            <div class="gos">{{item.subTitle}}</div>
            <div class="good-price">
              <div class="tab-box">
                <div class="tab">
                  <div class="tab-left">查看详情</div>
                  <div class="tab-rig" @click="addcart(item)">加入购物车</div>
                </div>
              </div>
              <div class="price">
                <span>￥</span>
                {{item.salePrice +"."+"00"}}
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
    return {
      //   flag: false,
      //   mun: ""
    };
  },
  props: {
    hotGoods: {
      type: Array,
      default: () => []
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
.hot {
  margin-top: 30px;
  .hot_box {
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
      line-height: 60px;
      height: 60px;
      padding: 0 10px 0 24px;
      border-bottom: 1px solid #d4d4d4;
      border-radius: 8px 8px 0 0;
      box-shadow: rgba(0, 0, 0, 0.06) 0 1px 7px;
      .title_txt {
        display: inline-block;
        font-size: 18px;
        font-weight: 400;
        color: #626262;
      }
    }
    .hots {
      display: flex;
      .goods-item:hover {
        .tab-box {
          display: block;
        }
        .price {
          display: none;
        }
        transform: translateY(-3px);
        box-shadow: 1px 1px 20px #999;
      }
      .goods-item {
        height: 430px;
        transition: all 0.5s;
        width: 50%;

        .good-img {
          .good-tp {
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
        .gos {
          text-align: center;
          line-height: 1.2;
          font-size: 12px;
          color: #d0d0d0;
          padding: 10px;
        }
        .good-price {
          text-align: center;
          color: red;
          font-size: 18px;
          height: 31px;
          line-height: 31px;
          font-weight: 600;
        }
        .tab-box {
          display: none;
        }
        .tab {
          display: none;
          height: 31px;
          line-height: 31px;
          display: flex;
          justify-content: space-around;
          width: 36%;
          margin: 0 auto;
          .tab-left {
            text-align: center;
            border: 1px solid #e1e1e1;
            width: 100px;
            height: 30px;
            line-height: 28px;
            font-size: 12px;
            color: #666;
            font-weight: normal;
            vertical-align: middle;
            border-radius: 5px;
          }
          .tab-rig {
            font-size: 12px;
            border: 1px solid #e1e1e1;
            width: 100px;
            height: 30px;
            font-weight: normal;
            text-align: center;
            line-height: 28px;
            border-radius: 5px;
            background: rgb(88, 121, 202);
            vertical-align: middle;
            color: white;
          }
        }
      }
    }
  }
}
</style>