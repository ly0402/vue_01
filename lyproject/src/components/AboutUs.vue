<template>
  <div class="aboutus">
    <h1>关于</h1>
    <hr/>
    <p>
    	Vue 中文社区是全球最大的 Vueframework 中文开源技术社区，致力于 Vue 在中国的学习、推广、研究工作。
    </p>
    <p>
    	Vue 中文社区正在努力建设中，如果你有什么想法，欢迎<span><a href="">吐槽</a></span>。
    </p>
    <img src="static/images/group.png">
    <p>群二维码</p>
    <p>尽管建了QQ群，但是还是希望大家尽量有问题在社区讨论，这样才可以有一些沉淀和积累，不至于每天都有人在问同样的问题，通过对问题的总结和用文字表达的过程，自己也可以对知识进行一个梳理。</p>
    <div class="bottom">
	    <h1 class="bottom">移动客户端</h1>
	    <hr/>
	    <p>客户端目前正在加急开发中…静请期待</p>
	</div>
  </div>
</template>

<script>
export default {
  name: 'Aboutus',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  /*引入基本样式*/
  @import '../assets/sass/base.scss';

  .aboutus{
  	width:90%;
  	margin:rem(28px) auto;
  	p{
  		font-size:rem(15px);
  		margin-top:rem(20px);
  		padding:rem(20px);
  	}
  	span{
		a{
			color: #778087;
			
		}
		:hover{
			text-decoration:underline;		
		}
  	}
  	img{
  		width:rem(120px);
	    margin-left:rem(20px);
	    border:none;
  	}
  	.bottom{
  		margin-top:rem(200px);
  	}
  }
</style>
