<template>
  <!-- <div class="good">
    <ul class="items">
      <li v-for="(item,index) in topics" class="item">
        <div class="img">
          <img :src="item.author.avatar_url" alt="">
        </div>
        <div class="top">
          <span>精华</span>    
        </div>
        <div class="title">{{item.title}}</div>
      </li>
    </ul>
  </div> -->
  <div class="good">
    <topic-list :topics="topics"></topic-list>

    <!-- 加载组件 -->
    <infinite-loading @infinite="infiniteHandler" v-show="loadingIsShow"></infinite-loading>
  </div>
</template>
<!-- <script src="https://unpkg.com/axios/dist/axios.min.js"></script> -->
<script>
  // import axios from 'axios';

  //引入请求数据的模块
  import {getTopicList} from "@/getdata/index.js";
  // 引入主题 列表 组件
import TopicList from "@/components/topics/TopicList";
// 加载 上下滑动模块
import InfiniteLoading from 'vue-infinite-loading';
  export default {
    name: 'Good',

    // 数据
    data () {
      return {
        topics:[],
        // 页面
        page:1,
        // 控制 页面滑动到底部 如果有数据 就 显示loading  如果没有就 不显示
        loadingIsShow:true,
      }
    },
    // 加载组件
    components:{
      TopicList,
      InfiniteLoading
    },
    // 钩子函数
    mounted(){
      getTopicList({
        tab:'good',
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

          getTopicList({tab:'good',limit:10,page:++(this.page)}).then(data=>{
            // console.log(data) 
            this.topics = this.topics.concat(data.data.data);
          })

          // 重新请求数据
          $state.loaded();  
        }, 1000);
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  /*引入基本样式*/
  @import '../../assets/sass/base.scss';

 .good{
    margin-top:rem(50px);
  }
  
</style>
