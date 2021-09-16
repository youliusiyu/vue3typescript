// 注意 axios 对象中，属性 baseURL 设置为 '/api'（ 这里容易踩坑，因为在我把配置跨域代理、封装axios请求等之后，请求接口时，告诉我接口找不到，最开始我写的 `baseURL: '/'`，所以跨域代理配置的 '/api'， 在此处就需要一致，即设置 `baseURL: '/api'` ）
// module.exports = {
// 	devServer: {
// 		open: true, // auto open brower 项目启动后自动打开浏览器...
// 		disableHostCheck: false,
// 		host: "0.0.0.0",
// 		port: 8099, // 修改端口号
// 		https: false,
// 		hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
// 		proxy: {
// 			// string | Object 解决跨域问题
// 			"/api": {
// 				target: "http://xxxxxx:xxx", // 对应自己的 跨域地址 即请求的后端地址
// 				changeOrigin: true,
// 				ws: true,
// 				pathRewrite: {
// 					"^/api": ""
// 				}
// 			}
// 		}
// 	}
// }
