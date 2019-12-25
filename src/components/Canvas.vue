<template>
	<div class="canvas">
		<Gameboy/>
	</div>
</template>

<script>
import Gameboy from './Gameboy.vue';

export default {
	name: 'Canvas',
	components: {
		Gameboy
	},
	props: {
	}
}
</script>

<style scoped lang="scss">

$check-light: #1b1b1f;
$check-dark: #151519;

.canvas {
	display: flex;
	flex-grow: 1;
	justify-content: center;
	align-items: flex-end;
	height: 100%;
	background-color: $check-dark;
	background-image: linear-gradient(45deg, $check-light 25%, transparent 25%, transparent 75%, $check-light 75%, $check-light),
	linear-gradient(45deg, $check-light 25%, transparent 25%, transparent 75%, $check-light 75%, $check-light);
	background-position: 0 0, 15px 15px;
	background-size: 30px 30px;
}

</style>
