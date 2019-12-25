<template>
	<div id="app">
		<Sidebar />
		<Canvas />
	</div>
</template>

<script>

import { store } from './store/store';
import Canvas from "./components/Canvas.vue";
import Sidebar from "./components/Sidebar.vue";
import "normalize.css/normalize.css";

export default {
	name: "app",
	store,
	components: {
		Canvas,
		Sidebar
	}
};
</script>

<style>
* {
	box-sizing: inherit;
}

html {
	box-sizing: border-box;
	height: 100%;
}

body {
	font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
	Roboto, Ubuntu;
	display: flex;
	justify-content: center;
	height: 100%;
	background-color: #e8e8f2;

	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

#app {
	display: flex;
	overflow: hidden;
	width: 100%;
	max-width: 1260px;
	margin: 80px;
	border-radius: 10px;
	background-color: #15151a;
	box-shadow: 0 5px 40px rgba(27, 23, 60, 0.3), 0 4px 10px rgba(42, 38, 72, 0.3);
}

</style>
