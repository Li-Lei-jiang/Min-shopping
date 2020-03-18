<template>
  <div>
    <div class="signin">
      <div class="warp">
        <div class="diasignin">
          <h4 class="w">注册 XMall 账号</h4>
          <div class="contens">
            <div class="contens-form">
              <div class="form-input">
                <input type="text" v-model="userId" placeholder="账号" class="inpu-form" />
              </div>
              <div class="form-input">
                <input type="password" v-model="passw" placeholder="密码" class="inpu-form" />
              </div>
              <div class="form-input">
                <input type="password" v-model="password" placeholder="重复密码" class="inpu-form" />
              </div>
              <!-- 图片验证 -->
              <div style="margin-bottom: 15px">
                <!-- 点击式按钮建议高度介于36px与46px  -->
                <!-- 嵌入式仅需设置宽度，高度根据宽度自适应，最小宽度为200px -->
                <div
                  id="vaptchaContainer"
                  style="width: 368px;height: 36px;text-align:center;line-height:36px;"
                >
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
                  <div class="inpu-txt">我已阅读并同意遵守</div>
                </div>
                <div style="margin-left: 5px;">
                  <a href="#">法律声明</a>
                  和
                  <a href="#">隐私条款</a>
                </div>
              </div>
              <div class="login" @click="tosignin">注册</div>
              <div class="brder"></div>
              <div class="ends">
                <span style="color: rgb(153, 153, 153);">如果您已拥有 XMall 账号，则可在此</span>
                <a href="#" style="margin-left:6px;" @click="toLogin">登录</a>
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
      userId: "", //账号
      passw: "", //密码
      password: "" //重复输入的值
    };
  },
  components: {},
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
    tosignin() {
      let Obj = {};
      Obj.username = this.userId;
      Obj.password = this.passw;
      // console.log(this.userId)
      this.$api
        .register(Obj)
        .then(res => {
            if(res.code === 200){
                this.$Message.success('注册成功');
                 this.$router.push("/login");
            }else if(res.code === 500){
                this.$Message.success("用户名已存在");
            }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
    // inputval(e){
    //     console.log(this.userId)
    // }
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
.signin {
  overflow-x: hidden;
  overflow-y: hidden;
  .warp {
    background-size: 100px;
    min-height: 800px;
    min-width: 630px;
    .diasignin {
      width: 450px;
      //   transform: translate(-50%, -50%);
      //   position: absolute;
      //   top: 50%;
      //   left: 50%;
      margin: 0 auto;
      border: 1px solid #dadada;
      border-radius: 10px;
      box-shadow: 0 9px 30px -6px rgba(0, 0, 0, 0.2),
        0 18px 20px -10px rgba(0, 0, 0, 0.04),
        0 18px 20px -10px rgba(0, 0, 0, 0.04),
        0 10px 20px -10px rgba(0, 0, 0, 0.04);
      .w {
        padding: 0;
        text-align: center;
        color: #666;
        border-bottom: 1px solid #dcdcdc;
        box-shadow: none;
        font-weight: 700;
        font-size: 20px;
        height: 60px;
        line-height: 60px;
      }
      .contens {
        margin-top: 20px;
        .contens-form {
          padding: 0 40px 22px;
          .form-input {
            height: 50px;
            margin-bottom: 15px;
          }
          .inpu-form {
            width: 100%;
            height: 100%;
            padding-left: 2%;
            color: #cdcdcd;
            border: 1px solid #ccc;
            border-radius: 6px;
          }
          .pr {
            display: flex;
            // justify-content: space-between;
            margin-bottom: 30px;
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
            margin-bottom: 30px;
          }
          .brder {
            margin-top: 10px;
            margin-bottom: 10px;
            border-bottom: 1px solid #ccc;
          }
          .ends {
            text-align: center;
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