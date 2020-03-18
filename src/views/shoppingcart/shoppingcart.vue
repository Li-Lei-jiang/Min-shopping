<template>
  <div>
    <div>
      <headr></headr>
      <div class="shopping-cart">
        <div class="grar-box">
          <!-- 总标题 -->
          <div class="titles">
            <p>购物清单</p>
          </div>

          <div class="wer">
            <div>
              <!-- 小标题名称 -->
              <div class="cart-box">
                <div class="cart-title">
                  <span class="name">商品信息</span>
                  <span class="operation">操作</span>
                  <span class="subtotal">小计</span>
                  <span class="count">数量</span>
                  <span class="unitPrice">单价</span>
                </div>
              </div>
              <!-- 商品列表 -->
              <div
                v-if="shopData.length<=0"
                style="height: 50px;line-height: 50px;width: 50%;
                margin: 0 auto;text-align: center;"
              >你的购物车毛都没得！！！！！</div>
              <div v-else class="cart-table">
                <div
                  v-for="(item,index) in shopData"
                  :key="index"
                  class="cart-item"
                  @click="checked(index)"
                >
                  <!-- 单选 -->
                  <div class="item-choos">
                    <Checkbox v-model="item.single"></Checkbox>
                  </div>
                  <!-- 图片和名称 -->
                  <div class="item-tp">
                    <img :src="item.productImageBig" alt class="item-img" />
                  </div>
                  <div class="item-name">
                    <p>{{item.productName}}</p>
                  </div>
                  <!-- 单价 -->
                  <div>
                    <div class="price">￥{{item.salePrice}}</div>
                  </div>
                  <!-- 商品数量 -->
                  <div class="item-">
                    <div class="item-cols">
                      <div class="select">
                        <span class="select-wing" @click="goreduce(item,index)"></span>
                        <span class="mun">{{item.count}}</span>
                        <span class="select-adup" @click="goadd(item,index)"></span>
                      </div>
                    </div>
                  </div>
                  <!-- 总价 -->
                  <div class="subtotal">￥{{item.salePrice*item.count}}</div>
                  <!-- 删除按钮 -->
                  <div class="dise">
                    <a href="#">
                      <img src="../../image/xx.png" alt class="dise-tp" @click="deleteshop(item)" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="cart-bottom">
              <div class="bottom-chick">
                <div>
                  <Checkbox :value="single" @on-change="allChack">全选</Checkbox>
                </div>
                <div class="chick-txt">删除选中的商品</div>
              </div>
              <div class="shipping">
                <div class="shipping-box">
                  <div class="shopcount">
                    <h4>
                      已选择
                      <i style="color: red;">32</i> 件商品
                    </h4>
                    <h4 style="color: #959595;">
                      共计
                      <i style="color:#cdcdcd;">55</i> 件商品
                    </h4>
                  </div>
                  <div class="shopprice">
                    <h4>
                      应付总额：
                      <span style="color: red;">￥55</span>
                    </h4>
                    <h5 style="color: #959595;">应付总额不含运费</h5>
                  </div>
                </div>
                <input type="button" value="现在结算" class="shopend-butt" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <endss></endss>
    </div>
  </div>
</template>

<script>
import headr from "../../components/headr/headr";
import endss from "../../components/endss/endss";
import { log } from "util";
// import { get } from "http";
export default {
  data() {
    return {
      shopData: [], //购物车数据
      single: false,
      total: 0, //全选状态
      num: 0 //数量
    };
  },
  components: {
    headr,
    endss
  },
  methods: {
    //获取购物车信息
    getshop() {
      this.$api
        .getCarts()
        .then(res => {
          if (res.code === 200) {
            res.data.map(item => {
              item.single = false;
            });
            this.shopData = res.data;
          } else {
            return alert("购物车啥也没了！");
          }
          console.log(this.shopData);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 购物车商品减少数量
    goreduce(item, index) {
      let Obj = {};
      Obj.productId = item._id;
      Obj.count = item.count;
      this.$api
        .editCart(Obj)
        .then(res => {
          if (res.code === 200) {
            // console.log(this.shopData[index].count);
            if (this.shopData[index].count === 1) {
              this.shopData[index].count === 1;
              this.$Message.success("最低一件，不能再少了");
            } else {
              // console.log(this.shopData[index].count);
              this.$Message.success("修改成功");
              this.shopData[index].count = this.shopData[index].count - 1;
            }
            // console.log(res,1)
          }
        })
        .catch(err => {
          console.log(err);
        });
      // console.log(item,index)
    },
    //购物车增加商品数量
    goadd(item, index) {
      let Obj = {};
      Obj.productId = item._id;
      Obj.count = item.count;
      this.$api
        .editCart(Obj)
        .then(res => {
          if (res.code === 200) {
            // console.log(this.shopData[index].count);
            if (this.shopData[index].count === 1) {
              this.shopData[index].count === 1;
              this.$Message.success("最低一件，不能再少了");
            } else {
              // console.log(this.shopData[index].count);
              this.$Message.success("修改成功");
              this.shopData[index].count = this.shopData[index].count + 1;
            }
            // console.log(res,1)
          }
        })
        .catch(err => {
          console.log(err);
        });
      // console.log(item,index)
    },
    //删除购物车商品
    deleteshop(item) {
      this.$api
        .delCart({ productId: item._id })
        .then(res => {
          if (res.code === 200) {
            this.$Message.success("已删除该商品");
            this.getshop();
          }
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //单选
    checked(e) {
      this.shopData[e].single = !this.shopData[e].single;
      let aaa = this.shopData.filter(item => {
        return item.single === true;
      });
      console.log(aaa.length);

      // if(this.num === this.shopData.length){
      //   this.single = true;
      // }else{
      //   this.single = false;
      // // }
      // console.log(index)
      // console.log(this.shopData[index].single)
    },
    //全选
    allChack() {
      this.single = !this.single;
      console.log(this.single);
      if (this.single) {
        this.shopData.map(item => {
          item.single = true;
        });
        let aaa = this.shopData.filter(item => {
          return item.single === true;
        });
        console.log(aaa.length);
      } else {
        this.shopData.map(item => {
          item.single = false;
        });
        this.num = 0
      }
    }
  },
  mounted() {
    this.getshop();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.shopping-cart {
  padding-top: 40px;
  width: 90%;
  margin: 0 auto;
  .grar-box {
    position: relative;
    margin-bottom: 30px;
    overflow: hidden;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #dcdcdc;
    border-color: rgba(0, 0, 0, 0.14);
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
    .titles {
      padding: 0 10px 0 24px;
      line-height: 60px;
      height: 60px;
      border-bottom: 1px solid #d4d4d4;
      font-size: 18px;
      color: #333;
      font-weight: 400;
    }
    .wer {
      .cart-box {
        //   padding-bottom: 90px;
        .cart-title {
          position: relative;
          z-index: 1;
          line-height: 38px;
          height: 38px;
          padding: 0 0 0 30px;
          font-size: 12px;
          background: #eee;
          border-bottom: 1px solid #dbdbdb;
          border-bottom-color: rgba(0, 0, 0, 0.08);
          .name {
            float: left;
            text-align: left;
            width: 137px;
            color: #838383;
            margin-left: 20px;
          }
          .unitPrice,
          .count,
          .subtotal,
          .operation {
            width: 137px;
            float: right;
            text-align: center;
            color: #838383;
          }
        }
      }
      .cart-table {
        border-bottom: 1px solid #ededed;
        .cart-item {
          position: relative;
          display: flex;
          left: 70px;
          height: 140px;
          .item-choos {
            position: absolute;
            left: -75px;
            top: 0;
            width: 70px;
            height: 25px;
            padding: 60px 0 0 31px;
          }
          .item-tp {
            width: 80px;
            margin-top: 30px;
            height: 80px;
            .item-img {
              width: 100%;
              height: 100%;
            }
          }
          .item-name {
            margin-left: 2%;
            height: 140px;
            width: 40%;
            line-height: 140px;
            color: #323232;
          }
          .price {
            overflow: hidden;
            float: right;
            width: 137px;
            text-align: center;
            color: #666;
            line-height: 140px;
          }
          .item- {
            display: block;
            .item-cols {
              margin: 52px 0 0 33px;
              .select {
                height: 40px;
                //   padding-top: 55px;
                .select-wing {
                  background: url("../../image/jingl.jpg") no-repeat;
                  background-position: 0 -60px;
                  width: 34px;
                  height: 37px;
                  float: left;
                  background-size: 100% auto;
                  line-height: 40px;
                }
                @keyframes mun {
                  from {
                    background: red;
                  }
                  to {
                    background: yellow;
                  }
                }

                //   @-webkit-keyframes myfirst /* Safari 与 Chrome */ {
                //     from {
                //       background: red;
                //     }
                //     to {
                //       background: yellow;
                //     }
                //   }
                .mun {
                  position: relative;
                  overflow: hidden;
                  float: left;
                  width: 36px;
                  height: 18px;
                  margin: 7px 0 0;
                  border: none;
                  border-radius: 3px;
                  line-height: 18px;
                  text-align: center;
                  font-size: 14px;
                }
                .select-adup {
                  background: url("../../image/jingl.jpg") no-repeat;
                  background-position: 0 0px;
                  width: 34px;
                  float: left;
                  height: 37px;
                  background-size: 100% auto;
                  line-height: 40px;
                }
              }
            }
          }
          .subtotal {
            overflow: hidden;
            float: right;
            width: 137px;
            text-align: center;
            color: #666;
            line-height: 140px;
            font-size: 14px;
          }
          .dise {
            overflow: hidden;
            float: right;
            width: 137px;
            text-align: center;
            color: #666;
            line-height: 140px;
            padding: 10px 0 0;
            font-size: 12px;
            .dise-tp {
              width: 24px;
              height: 27px;
              margin: 0 auto;
              color: #c2c2c2;
            }
          }
        }
      }
      .cart-bottom {
        display: flex;
        justify-content: space-between;
        .bottom-chick {
          float: left;
          padding: 35px 26px;
          font-size: 12px;
          display: flex;
          .chick-txt {
            margin-left: 21px;
            color: #bbb;
            height: 20px;
            line-height: 20px;
            font-size: 12px;
          }
        }
        .shipping {
          float: right;
          display: flex;
          padding: 20px 30px;
          .shipping-box {
            display: inline-block;
            display: flex;
            padding-top: 1px;
            margin-right: 10px;
            .shopcount {
              margin: 0 22px;
              text-align: center;
            }
            .shopprice {
              margin: 0 22px;
            }
          }
        }
        .shopend-butt {
          margin: 0px;
          width: 130px;
          height: 50px;
          line-height: 50px;
          font-size: 16px;
          border: 1px solid #5c81e3;
          border-radius: 4px;
          color: #fff;
          background: #5c81e3;
        }
      }
    }
  }
}
</style>