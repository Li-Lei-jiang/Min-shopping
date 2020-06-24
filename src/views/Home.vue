<template>
  <div class="all">
    <headr @passtoparent="IndexChild"></headr>
    <!-- 未点击时显示首页 -->
    <div v-if="currentIndex === 0">
      <!-- 轮播图 -->
      <slideshow :slideshows="slideshows"></slideshow>
      <!-- 热门活动 -->

      <panel1 :activity="activity"></panel1>
      <!-- 热门商品 -->
      <hotGoods :hotGoods="hotGoods"></hotGoods>
      <!-- 官方推荐 -->
      <officialRecommend :Recommend="Recommend"></officialRecommend>
      <!-- 品牌周边 -->
      <officialRecommend :Recommend="brandrim"></officialRecommend>
      <!-- 品牌精选 -->
      <officialRecommend :Recommend="brandSelection"></officialRecommend>
      <!-- 最后的 -->
      <list :last="last"></list>
       <BackTop></BackTop>
    </div>
    <!-- 点击全部后展示全部的内容 -->
    <div v-else>
     <total></total>
    </div>
    <!-- 底部 -->
    <endss></endss>
  </div>
</template>

<script>
import headr from "../components/headr/headr";
import slideshow from "../components/slideshow/slideshow";
import panel1 from "../components/panel1/panel1";
import hotGoods from "../components/hotGoods/hotGoods";
import officialRecommend from "../components/officialRecommend/officialRecommend";
import list from "../components/last/list";
import endss from "../components/endss/endss";
import total from "../components/total/total";
export default {
  data() {
    return {
      slideshows: [], //轮播图
      activity: [], //活动板块
      hotGoods: [], //热门商品
      Recommend: {}, // 官方推荐
      brandrim: {}, //品牌周边
      brandSelection: {}, //品牌精选
      last: [] ,//最后的一块
      currentIndex:0,//子传过来的值
    };
  },
  components: {
    slideshow,
    headr,
    panel1,
    hotGoods,
    officialRecommend,
    list,
    endss,
    total
  },
  mounted() {
    //获取首页所有数据
    this.$api
      .homeData()
      .then(res => {
        this.slideshows = res.data[0].panelContents;
        this.activity = res.data[1].panelContents;
        this.hotGoods = res.data[2].panelContents;
        this.Recommend = res.data[3];
        this.brandrim = res.data[4];
        this.brandSelection = res.data[5];
        this.last = res.data[6].panelContents;
         console.log(this.slideshows)
        //  console.log(res)
      })
      .catch(err => {
        console.log(err);
      });
    // this.IndexChild()
  },
  methods: {
       //接收子组件传来的值
     IndexChild(index){
        this.currentIndex = index;
        // console.log(this.currentIndex)
      }
  },
  watch: {},
  computed: {}
};
</script>

<style lang='scss' scoped>
.all {
  background: #ededed;
}
</style>