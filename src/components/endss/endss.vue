<template>
  <div>
    <div class="footer">
      <div class="container">
        <div class="siteinfo">
          <div class="item">
            <div class="item_title">订单服务</div>
            <div class="item_txt">购买指南</div>
            <div class="item_txt">支付方式</div>
            <div class="item_txt">送货政策</div>
          </div>
          <div class="item">
            <div class="item_title">服务支持</div>
            <div class="item_txt">官方开源</div>
            <div class="item_txt">项目前端</div>
            <div class="item_txt">项目后端</div>
          </div>
          <div class="item">
            <div class="item_title">自助服务</div>
            <div class="item_txt">个人博客</div>
            <div class="item_txt">个人简介</div>
            <div class="item_txt">个人视频</div>
          </div>
          <div class="item">
            <div class="item_title">其他项目</div>
            <div class="item_txt">XPay支付系统</div>
            <div class="item_txt">数据共享</div>
            <div class="item_txt">待开发...</div>
          </div>
          <div class="item">
            <div class="item_title">友情链接</div>
            <div class="item_txt">宇cccc</div>
            <div class="item_txt">Smartisan</div>
            <div class="item_txt">Vue</div>
          </div>
          <div class="item">
            <div class="item_title">关注我吧</div>
            <div class="item_txt">腾讯 QQ</div>
            <div class="item_txt">新浪微博</div>
            <div class="item_txt">官方邮箱</div>
          </div>
          <div class="item-rig">
            <div class="tel">1012139570</div>
            <div class="itme">周一至周日 10:00-23:00（限Starrer或捐赠人联系)</div>
            <div class="online">
              <div class="online_bott">在线帮助</div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <h4
          class="content-c2"
        >Copyright ©2017, exrick.cn Co., Ltd. All Rights Reserved.本网站设计内容大部分属锤子科技</h4>
        <div class="content-c1">
          <div class="content-c">法律声明</div>
          <div class="content-c">隐私条款</div>
          <div class="content-c">开发者中心</div>
        </div>
      </div>
      <div class="cop">
        <span class="content-c3">蜀ICP备16030308号-1</span>
        <span class="content-c3">蜀ICP证16030308号</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.footer {
  padding: 50px 0 20px;
  border-top: 1px solid #e6e6e6;
  background: #fafafa;
  margin-top: 60px;
  height: 350px;
  // display: flex;
  .container {
    width: 90%;
    margin: 0 auto;
    .item {
      width: 149px;
      line-height: 1;
      float: left;
      .item_title {
        color: #646464;
        font-size: 12px;
        padding: 0 0 14px;
      }
      .item_txt {
        color: #c3c3c3;
        font-size: 12px;
        padding: 6px 0;
      }
    }
    .siteinfo {
      height: 100px;
      padding: 50px 0 130px;
      border-bottom: 1px solid #e6e6e6;
      position: relative;
      .item-rig {
        position: absolute;
        right: 0;
        overflow: hidden;
        line-height: 34px;
        .tel {
          font-size: 30px;
          line-height: 1;
          color: #646464;
          top: -2px;
          position: relative;
        }
        .time {
          clear: both;
          width: 241px;
          font-size: 12px;
          line-height: 18px;
          color: #c3c3c3;
          text-align: right;
        }
        .online {
          clear: both;
          width: 241px;
          font-size: 12px;
          line-height: 18px;
          color: #c3c3c3;
          text-align: right;
          .online_bott {
            width: 130px;
            height: 34px;
            font-size: 14px;
            color: #5079d9;
            border: 1px solid #dcdcdc;
            margin-top: 8px;
            text-align: center;
            line-height: 34px;
          }
        }
      }
    }
  }
  .copyright {
    width: 90%;
    padding: 40px 0 0;
    margin: 0 auto;
    display: flex;
    .content-c2 {
      font-size: 100%;
      font-weight: 400;
      float: left;
      height: 15px;
      line-height: 15px;
      color: #757575;
    }
    .content-c1 {
      margin-left: 3%;
      display: flex;
      .content-c {
        width: 74px;
        text-align: center;
        color: #5079d9;
        border-left: 1px solid #cdcdcd;
        border-right: 1px solid #cdcdcd;
        line-height: 12px;
        font-size: 12px;
      }
    }
  }
  .cop {
    clear: both;
    padding: 10px 0 0;
    height: 15px;
    width: 90%;
    margin: 0 auto;
    .content-c3 {
      margin-right: 20px;
      color: #bdbdbd;
      font-size: 12px;
      height: 12px;
      line-height: 1;
    }
  }
}
</style>