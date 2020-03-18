<template>
  <div>
    <div class="login">
      <div class="warp">
        <div class="dialogin">
          <div class="title">
            <h4 class="title_txt">使用 XMall 账号 登录官网</h4>
          </div>
          <div class="content">
            <div class="cont-form">
              <div class="form-input">
                <input type="text" v-model="value" placeholder="账号" class="inpu-form" />
              </div>
              <div class="form-input">
                <input type="password" v-model="value18" placeholder="密码" class="inpu-form" />
              </div>
              <!-- 图片验证 -->
              <div style="margin-bottom: 15px">
                <!-- 点击式按钮建议高度介于36px与46px  -->
                <!-- 嵌入式仅需设置宽度，高度根据宽度自适应，最小宽度为200px -->
                <div id="vaptchaContainer" style="width: 368px;height: 36px;">
                  <!--vaptcha-container是用来引入VAPTCHA的容器，下面代码为预加载动画，仅供参考-->
                  <div class="vaptcha-init-main">
                    <div class="vaptcha-init-loading">
                      <a href="/" target="_blank">
                        <img src="https://r.vaptcha.com/public/img/vaptcha-loading.gif" />
                      </a>
                      <span class="vaptcha-text">Vaptcha启动中...</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 分界线 -->
              <div class="pr">
                <div class="checkbox">
                  <div class="inpu">
                    <input type="checkbox" class="inpu-checkbox" />
                  </div>
                  <div class="inpu-txt">记住密码</div>
                </div>
                <div>
                  <a href="#" class="register" @click="toSignin">注册 XMall 账号</a>
                  <a href="#" class="forget">忘记密码 ？</a>
                </div>
              </div>
              <div class="login" @click="tologin">登录</div>
              <div class="backs" @click="goBack">返回</div>
              <div class="brder"></div>
              <div class="footer">
                <div class="other">其他账号登录:</div>
                <a href="#">
                  <img src="../../image/aa.png" class="other-tp" />
                </a>
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
      value: "",
      value18: ""
    };
  },
  components: {},
  methods: {
    toSignin() {
      this.$router.push("/signin");
    },
    tologin() {
      let Obj = {};
      Obj.username = this.value;
      Obj.password = this.value18;
      // console.log(this.userId)
      this.$api
        .login(Obj)
        .then(res => {
          if (res.code == 200) {
            this.$Message.success("登录成功");
            localStorage.setItem("user", JSON.stringify(res.data.user));
            localStorage.setItem("adminToken", res.data.token);
            this.$router.push("/");
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    goBack(){
      this.$router.push('/')
    }
  },
  mounted() {},
  watch: {},
  computed: {},
  updated() {
    let that = this;
    vaptcha({
      vid: "5e1447a84c6b8b41680b918d", // 验证单元id
      type: "click", // 显示类型 点击式
      scene: 0, // 场景值 默认0
      container: "#vaptchaContainer", // 容器，可为Element 或者 selector
      offline_server: "http://localhost:8080/" //离线模式服务端地址
      //可选参数
      //lang: 'zh-CN', // 语言 默认zh-CN,可选值zh-CN,en,zh-TW
      //https: true, // 使用https 默认 true
      //style: 'dark' //按钮样式 默认dark，可选值 dark,light
      //color: '#57ABFF' //按钮颜色 默认值#57ABFF
    }).then(function(vaptchaObj) {
      that.vaptchaObj = vaptchaObj; //将VAPTCHA验证实例保存到局部变量中
      that.vaptchaObj.render(); // 调用验证实例 vpObj 的 render 方法加载验证按钮
      //获取token的方式一：
      //vaptchaObj.renderTokenInput('.login-form')//以form的方式提交数据时，使用此函数向表单添加token值
      //获取token的方式二：
      //   that.vaptchaObj.listen('pass', function() {
      //   // 验证成功进行后续操作
      //   var data = {
      //     //表单数据
      //     token: vaptchaObj.getToken()
      //   }
      //   $.post('login',data, function(r) {
      //     if(r.code !== 200) {
      //       console.log('登录失败');
      //       vaptchaObj.reset(); //重置验证码
      //     }
      //   })
      // })
      //关闭验证弹窗时触发
      that.vaptchaObj.listen("close", function() {
        //验证弹窗关闭触发
      });
    });
  }
};
</script>

<style scoped lang='scss'>
.login {
  overflow-x: hidden;
  overflow-y: hidden;
  .warp {
    background-size: 100px;
    min-height: 800px;
    min-width: 630px;
    .dialogin {
      width: 450px;
      margin: 0 auto;
      // transform: translate(-50%, -50%);
      // position: absolute;
      // top: 50%;
      // left: 50%;
      border: 1px solid #dadada;
      border-radius: 10px;
      box-shadow: 0 9px 30px -6px rgba(0, 0, 0, 0.2),
        0 18px 20px -10px rgba(0, 0, 0, 0.04),
        0 18px 20px -10px rgba(0, 0, 0, 0.04),
        0 10px 20px -10px rgba(0, 0, 0, 0.04);
      .title {
        background-image: url("../../image/smartisan_4ada7fecea.png");
        background-repeat: no-repeat;
        background-position: top;
        position: relative;
        box-sizing: content-box;
        margin: 23px 0 50px;
        padding: 75px 0 0;
        box-shadow: none;
        background-size: 140px;
        height: 92px;
        .title_txt {
          position: absolute;
          bottom: 0;
          width: 100%;
          text-align: center;
          line-height: 1em;
          height: auto;
          font-size: 20px;
          color: #333;
          font-weight: 400;
        }
      }
      .content {
        padding: 0 40px 22px;
        .cont-form {
          .form-input {
            height: 50px;
            margin-bottom: 15px;
            .inpu-form {
              width: 100%;
              height: 100%;
              padding-left: 2%;
              color: #cdcdcd;
              border: 1px solid #ccc;
              border-radius: 6px;
            }
          }
          .pr {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
            position: relative;
            .checkbox {
              display: flex;
              .inpu {
                color: #999;
                width: 18px;
                height: 18px;
                background-color: #fff;
                z-index: 1;
                .inpu-checkbox {
                  width: 100%;
                  height: 100%;
                }
              }
              .inpu-txt {
                font-size: 14px;
                padding-left: 5px;
              }
            }
            .register {
              padding: 1px 10px 0;
              border-right: 1px solid #ccc;
            }
            .forget {
              padding: 1px 0px 0px 10px;
            }
          }
          .login {
            margin-top: 25px;
            color: #fff;
            background-color: #a9a9a9;
            border: 1px solid #afafaf;
            margin: 0px;
            width: 100%;
            height: 48px;
            font-size: 14px;
            text-align: center;
            line-height: 48px;
            border-radius: 4px;
          }
          .backs {
            margin-top: 15px;
            margin-bottom: 20px;
            color: #646464;
            // background-color: #a9a9a9;
            border: 1px solid #e1e1e1;
            margin: 0px;
            width: 100%;
            background: #eee;
            height: 48px;
            font-size: 14px;
            text-align: center;
            line-height: 48px;
            border-radius: 4px;
          }
          .brder {
            margin-top: 10px;
            border-bottom: 1px solid #ccc;
          }
          .footer {
            display: flex;
            .other {
              margin: 20px 5px 0 0;
              width: auto;
              color: #bbb;
              font-size: 12px;
              cursor: default;
              color: #999;
            }
            .other-tp {
              height: 15px;
              margin-top: 22px;
            }
          }
        }
      }
    }
  }
}
</style>

<style>
.vaptcha-init-main {
  display: table;
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
}
​ .vaptcha-init-loading {
  display: table-cell;
  vertical-align: middle;
  line-height: 36px;
  text-align: center;
}
​ .vaptcha-init-loading > a {
  display: inline-block;
  width: 18px;
  height: 18px;
  border: none;
}
​ .vaptcha-init-loading > a img {
  vertical-align: middle;
}
​ .vaptcha-init-loading .vaptcha-text {
  font-family: sans-serif;
  font-size: 12px;
  color: #cccccc;
  margin-left: 6px;
  vertical-align: middle;
}
</style>