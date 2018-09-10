<template>
  <div class="study">
    <topic-list :topics="topics"></topic-list>
    <!-- 加载组件 -->
    <infinite-loading @infinite="infiniteHandler" v-show="loadingIsShow"></infinite-loading>
  </div>
</template>
<!-- <script src="https://unpkg.com/axios/dist/axios.min.js"></script> -->
<script>
  // import axios from 'axios';
  // 引入请求数据的模块
import { getTopicList } from "@/getdata/index.js"

// 引入主题 列表 组件
import TopicList from "@/components/topics/TopicList";

// 加载 上下滑动模块
import InfiniteLoading from 'vue-infinite-loading';
export default {
  name:'Study',

  // 数据
  data () {
    return {
      topics:[],
      //页面
      page:1,
      // 控制 页面滑动到底部 如果有数据 就 显示loading  如果没有就 不显示
      loadingIsShow:true
    }
  },
  // 钩子函数
 
   mounted(){
    getTopicList({
      tab:'study',
      limit:20,
      page:this.page
    }).then((data)=>{
      this.topics = data.data.data
      // console.log(data.data.data)
    })
  },
  methods: {
    infiniteHandler($state) {
      setTimeout(() => {

        getTopicList({tab:'study',limit:10,page:++(this.page)}).then(data=>{
          // console.log(data) 
          this.topics = this.topics.concat(data.data.data);
        })

        // 重新请求数据
        $state.loaded();  
      }, 1000);
    },
  },
   // 加载组件
  components:{
    TopicList,
    InfiniteLoading
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  /*引入基本样式*/
/*  @import '../../assets/sass/base.scss';

 .study{
    margin-top:rem(50px);
  }
  
  .items{
    width:100%;
    .item{
      display:flex;

      height:rem(100px);
      border-bottom:1px solid #ccc;
      padding:0 rem(8px);
      .img{
        display:flex;
        img{
          display:block;
          align-self:center;
          width:rem(60px);
          height:rem(60px);
        }
      }
      .top{
        display:flex;
        margin:0 rem(14px);
        span{
          display:block;
          align-self:center;
          width:rem(65px);
          height:rem(40px);
          background:#369614;
          color:#fff;
          font-size:rem(22px);
          text-align:center;
          line-height:rem(40px);
          border-radius:rem(8px);
        }
      }
      .title {
        color:#333;
        font-size:rem(28px);
        line-height:rem(100px);
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
      }
    }
  }*/
</style>
