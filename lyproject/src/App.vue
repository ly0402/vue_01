<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->

    <!-- 放子组件的视图 -->
    <router-view/>

    <!-- {{$route.path}} -->

    <!-- {{respath}} -->
    
    <nav class="footer">
      <ul>
        <router-link to="/index" tag="li" :class="respath=='index'?'bg':''">首页</router-link>
        <router-link to="/gzh" tag="li" :class="respath=='gzh'?'bg':''">公众号</router-link>
        <router-link to="/aboutus" tag="li" :class="respath=='aboutus'?'bg':''">关于我们</router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',

 //计算属性
 computed:{
  //计算路径
  respath:function(){
    //把路径分割成数组
    // console.log(this.$route.path.split('/'));
    var pathArr=this.$route.path.split('/');

    // 返回表示一级路由
    return pathArr[1];
    // console.log(pathArr);
    // return '北京烤鸭';
    //字符串的切割
  }
 }
}

</script>

<style lang="scss">

  /*引入基本样式*/
  @import './assets/sass/base.scss';

  

  /*底部导航*/
  nav.footer{
    color:white;
    width:100%;
    height:rem(80px);
    position:fixed;
    bottom:0;
    left:0;
    background:#1b6331;
    ul{
      display:flex;
      /*justify-content:space-around;*/
      line-height:rem(80px);
      /*align-items:center;*/
      li{
        width:33.333333333333333333333333333333333333333%;
        color:#fff;
        font-size:rem(28px);
        text-align:center;
        cursor:pointer;
      }
      li.bg{
        background:#369614;
        color:#fff;
      }
    }
  }
  

</style>
