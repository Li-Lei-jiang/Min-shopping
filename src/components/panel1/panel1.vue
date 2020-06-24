<template>
  <div>
    <div class="activity-panel">
      <div class="box">
        <div class="content">
          <div v-for="(item,index) in  activity" :key="index" class="content_item">
            <img :src="item.picUrl" alt class="_item_tp" />
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
    activity: {
      type: Array,
      default: () => []
    }
  },
  components: {},
  methods: {},
  mounted() {
    // console.log(this.activity);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.activity-panel {
  background: rgb(237, 237, 237);
  .box {
    width: 90%;
    margin: 0 auto;
    .content:hover{
      .content_item{
        box-shadow:  0 0 38px rgba(0, 0, 0, 0.08) inset;
        transition: all .15s ease;
      }
    }
    .content {
      
      // border: 1px solid #dcdcdc;
      // border-radius: 8px;
      display: flex;
      .content_item {
           width: 24.9%;
    border-right: 1px solid #ededed;
    height: 200px;
    margin: 0 auto;
        ._item_tp {
          width: 100%;
          border-radius: 8px;
          height: 100%;
        }
      }
    }
    
  }
}




</style>