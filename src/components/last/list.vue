<template>
  <div>
    <div class="activity-panel">
      <ul class="box">
        <li class="conys" v-for="(item,index) in last" :key="index">
          <img :src="item.picUrl" alt class="conys_tp" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    last: {
      type: Array,
      value: () => []
    }
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.activity-panel {
  width: 90%;
  margin: 0 auto;
  .box:hover{
      .conys{
          box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
      }
  }
  .box {
    overflow: hidden;
    list-style: none;
    position: relative;
    z-index: 0;
    margin-top: 25px;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.14);
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
    .conys {
      float: left;
      position: relative;
      box-sizing: border-box;
      width: 25%;
      height: 200px;
      text-align: center;
      .conys_tp {
        width: 305px;
        height: 200px;
      }
    }
  }
}
</style>