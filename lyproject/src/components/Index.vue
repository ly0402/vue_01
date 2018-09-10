<template>
  <div class="index">

    <!-- 顶部导航 -->
      <!-- <nav class="header">
        <ul>
          <router-link to="/index" tag="li" :class="$route.path=='/index'?'bg':''">全部</router-link>
          <router-link to="/index/good" tag="li" :class="$route.path=='/index/good'?'bg':''">精华</router-link>
          <router-link to="/index/weex" tag="li" :class="$route.path=='/index/weex'?'bg':''">weex</router-link>
          <router-link to="/index/share" tag="li" :class="$route.path=='/index/share'?'bg':''">分享</router-link>
          <router-link to="/index/ask" tag="li" :class="$route.path=='/index/ask'?'bg':''">问答</router-link>
          <router-link to="/index/job" tag="li" :class="$route.path=='/index/job'?'bg':''">招聘</router-link>
        
        </ul>
      </nav> -->


      <!-- 顶部的导航 -->
    <nav class="header">
      <!-- Swiper -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <router-link to="/index/" tag="a" :class=" (respath=='' || respath==undefined)?'itemStyle':'' ">
              全部
            </router-link>
          </div>
          <div class="swiper-slide">
            <router-link to="/index/good" tag="a" :class=" respath=='good'?'itemStyle':'' ">
              精华
              </router-link>
          </div>
          <div class="swiper-slide">
            <router-link to="/index/weex" tag="a" :class=" respath=='weex'?'itemStyle':'' ">
              WEEX
            </router-link>
          </div>
          <div class="swiper-slide">
            <router-link to="/index/share" tag="a" :class=" respath=='share'?'itemStyle':'' ">
              分享
            </router-link>
          </div>
          <div class="swiper-slide">
            <router-link to="/index/ask" tag="a" :class=" respath=='ask'?'itemStyle':'' ">
              问答
              </router-link>
          </div>
          <div class="swiper-slide">
            <router-link to="/index/job" tag="a" :class=" respath=='job'?'itemStyle':'' ">
              招聘
              </router-link>
          </div>
          <div class="swiper-slide">
            <router-link to="/index/api" tag="a" :class=" respath=='api'?'itemStyle':'' ">
              API
            </router-link>
          </div>
          <div class="swiper-slide">
            <router-link to="/index/study" tag="a" :class=" respath=='study'?'itemStyle':'' ">
              参考
            </router-link>
          </div>  
        </div>
      </div>
    </nav>
  

       <!-- 放子组件的视图 -->
       <router-view/>

       <!-- <h1>
         {{msg}}
       </h1> -->
       
  </div>
</template>

  <script src="node_modules/swiper/dist/js/swiper.min.js"></script>
<script>
export default {
  name: 'Index',
  // data () {
  //   return {
  //     msg: this.$route
  //   }
  // }
  // 计算属性
  computed:{
    // 计算路径
    respath:function(){
      // 把路径分割成数组
      var pathArr = this.$route.path.split('/');
      console.log(pathArr);
      // 返回表示一级路由的str

      console.log(pathArr[2]);

      return pathArr[2];
    }
  },

  // 钩子函数
  mounted(){
    // 自己的 js 就写在这里面了
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 6,
      spaceBetween: 20,
    }); 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
   /*加载基础样式*/
  @import '../assets/sass/base.scss';

  /*顶部导航*/
  nav.header{
    color:white;
    width:100%;
    height:rem(50px);
    position:fixed;
    top:0;
    left:0;
    background:#f6f6f6;
    /*ul{
      display:flex;
      justify-content:space-around;
      text-align:center;
      line-height:rem(50px);
      li{
        width:100%;
        color:#1b6331;
        font-size:rem(18px);
        text-align:center;
        cursor:pointer;
      }
      li.bg{

        border-radius:rem(8px);
        background:#369614;
        color:#fff;*/

       /*swiper 的导航组件*/
      .swiper-container{
        .swiper-slide{
          font-size: rem(34px);
          text-align: center;
          a{
            line-height: rem(50px);
            color: #369614;
            padding: rem(3px) rem(10px);
            border-radius: rem(5px);
          }
          .itemStyle{
            background: #369614;
            color: #fff;          
        }
      }
    }
  }
</style>
