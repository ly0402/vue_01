<template>
  <div class="topiclist">
    <ul class="items">
      <li v-for="(item,index) in topics" class="item">
        <div class="img">
          <img :src="item.author.avatar_url" alt="">
        </div>
        <div class="top" :class="{topStyle:item.top}">
          <span v-if="item.top">置顶</span>  
          <span v-else-if="item.good">精华</span>
          <span v-else>{{tab[item.tab]}}</span>
        </div>
        <router-link :to=" '/index/topic/'+item.id  " tag="div" class="title">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>


// 引入请求数据的模块
import { getTopicList } from "@/getdata/index.js";

export default {
  name: "TopicList",
  // 数据
  data() {
    return {
      tab: {
        weex: "weex",
        share: "分享",
        ask: "问答",
        job: "招聘",
        api: "API",
        study: "参考"
      }
    };
  },

  
  //接收  父组件传递过来的值
  props: ["topics"]

};

</script>











<style lang="scss">
  /*引入基本样式*/
  @import '../../assets/sass/base.scss';

.topiclist{
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
        margin:0 rem(14px);
          align-self:center;
          width:rem(65px);
          height:rem(40px);
          background:#e5e5e5;
          color:#999;
          font-size:rem(22px);
          text-align:center;
          line-height:rem(40px);
          border-radius:rem(8px);
       
      }
      .title {
        width: rem(550px);
        color:#333;
        font-size:rem(28px);
        line-height:rem(100px);
        /*处理文本超出容器,超出的部分用 ... 代替*/
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
      }
      .topStyle {
        background:#369614;
        color:#fff;
      }
    }
  }
</style>
