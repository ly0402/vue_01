// 用来请求数据的 模块
// 加载 axios 模块(用来 发送 ajax 的请求的)
import axios from 'axios';

// 基本的配置
var $http = axios.create({
    baseURL: 'https://www.vue-js.com/api/v1/',
    headers: { 'X-Custom-Header': 'foobar' }
});

//请求主题列表的函数
function getTopicList(params){
	// //请求数据
	// axios({
	//     method:'get',
	//     url:'https://www.vue-js.com/api/v1/topics',
	//     // 参数
	//     params: {
	//       tab:'good'
	//     },
	// }).then((data)=>{
	//     this.topics = data.data.data
	// });

	// 默认的参数

	//params是从TopicList.vue中钩子函数传过来的 比如tab:ask tab:good
    // props: ["topics"]  接收父组件里的钩子函数的值 
    var newParams = Object.assign({
        limit:10  //设置查多少条数据
    }, params) //这个params是接收的上面的params 

    // 返回值 返回给上面的getTopicList() 谁调用返回给谁
    return $http({
        // 请求的方法
        method: 'get', 
        // 请求的url 会拼接 到 baseURL 中
        url: '/topics',
        params: newParams
    });
}

//查主题、内容的函数
function getTopicShow(id){
	return $http({
		method:'get',
		//请求的url会拼接到baseURL中
		url:'/topic/'+id,

	})
}

//暴露对象
export { getTopicList, getTopicShow}