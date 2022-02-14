<template>
	<div id="app">
		<HelloWorld />
		<!-- 图片预览模块 -->
		<img-preview :imgPre="false" :articleId="'Doc'"></img-preview>
	</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
	name: "app",
	data() {
		return {};
	},
	components: {
		HelloWorld
	},
	methods: {}
};
</script>

<style scope lang='scss'>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>