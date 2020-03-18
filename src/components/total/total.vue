<template>
  <div>
    <div class="goods">
      <div class="warp">
        <div class="nav">
          <a href="#" class="active">综合排序</a>
          <a href="#" class="active">价格从高到低</a>
          <a href="#" class="active">价格从低到高</a>
          <div class="price-interval">
            <input type="text" placeholder="价格" class="inpus" />
            <span>-</span>
            <input type="text" placeholder="价格" class="inpus" />
            <input type="button" value="确定" class="inpu_butt" />
          </div>
        </div>
        <div class="item-all">
          <div v-for="(item,index) in allGoods" :key="index" class="good-item">
            <div class="item-tp">
              <img :src="item.productImageBig" alt class="item-img" />
            </div>
            <div class="item-name">{{item.productName}}</div>
            <div class="item-subTitle">{{item.subTitle}}</div>
            <div class="good-price">
              <div class="bars">
                <a href="#" class="look">查看详情</a>
                <a href="#" class="add">加入购物车</a>
              </div>
              <div class="price">￥{{item.salePrice+'.'+'00'}}</div>
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
      allGoods: [] //所有商品
    };
  },
  components: {},
  methods: {
    getGoods() {
      this.$api
        .allGoods(1, 10, 1, 0, 10)
        .then(res => {
          this.allGoods = res.data;
          console.log(this.allGoods);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getGoods();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.goods {
  background: #ededed;
  .warp {
    width: 90%;
    margin: 0 auto;
    .nav {
      display: flex;
      height: 60px;
      line-height: 60px;
      .active {
        padding: 0 15px;
        height: 100%;
        font-size: 12px;
      }
      .price-interval {
        padding: 0 15px;
        display: flex;
        //   height: 60px;
        .inpus {
          width: 80px;
          height: 30px;
          border: 1px solid #ccc;
          text-align: center;
          background: none;
          margin: 15px 5px 0 5px;
          font-size: 12px;
          color: #ededed;
          border-radius: 5px;
        }
        .inpu_butt {
          width: 80px;
          height: 30px;
          border: 1px solid #ccc;
          margin: 15px 0 0 10px;
          background: #678ee7;
          color: white;
          line-height: 30px;
          border-radius: 5px;
          font-size: 12px;
        }
      }
    }
    .item-all {
      display: flex;
      flex-wrap: wrap;
      .good-item:hover {
        transition: all 0.5s;
        transform: translateY(-3px);
        box-shadow: 1px 1px 20px #999;
        .good-price .bars {
          display: inline-flex;
        }
        .price {
          display: none;
        }
      }
      .good-item {
        width: 25%;
        height: 430px;
        background: #fff;
        .item-tp {
          .item-img {
            width: 206px;
            margin: 50px auto 10px;
            height: 206px;
            display: block;
          }
        }
        .item-name {
          line-height: 1.2;
          font-size: 16px;
          color: #424242;
          margin: 0 auto;
          padding: 0 14px;
          text-align: center;
          overflow: hidden;
          font-weight: 400;
        }
        .item-subTitle {
          text-align: center;
          line-height: 1.2;
          font-size: 12px;
          color: #d0d0d0;
          padding: 10px;
          font-weight: 400;
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
          .bars {
            display: flex;
            margin: 0 auto;
            display: none;
            width: 70%;
            .look {
              width: 100px;
              font-size: 12px;
              display: block;
              height: 30px;
              line-height: 28px;
              // vertical-align: middle;
              border: 1px solid #e1e1e1;
              border-radius: 4px;
              font-size: 12px;
              color: #646464;
              background-color: #f9f9f9;
              background-image: linear-gradient(180deg, #fff, #f9f9f9);
              margin: 0px 5px;
            }
            .add {
              border: 1px solid #5c81e3;
              font-size: 12px;
              border-radius: 4px;
              font-size: 12px;
              color: #fff;
              display: block;
              background-color: #678ee7;
              background-image: linear-gradient(180deg, #678ee7, #5078df);
              width: 100px;
              height: 30px;
              line-height: 28px;
              // vertical-align: middle;
              margin: 0px 5px;
            }
          }
        }
      }
    }
  }
}
</style>