<template>
	<div class="gameboy">
		<div class="gameboy-screen">
			<Digitizer />
		</div>
	</div>
</template>

<script>

import Digitizer from './Digitizer.vue';

export default {
	name: 'Gameboy',
	components: {
		Digitizer
	},
	props: {

	}
}
</script>

<style scoped lang="scss">

.gameboy {
	position: relative;
	width: 540px;
	height: 640px;
	border-top-left-radius: 25px;
	border-top-right-radius: 25px;
	background: #eff1f3;

	&:after {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 110%;
		content: '';
		border-radius: inherit;
		box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.3);
	}

	&-screen {
		display: flex;
		position: relative;
		height: 390px;
		margin-top: 50px;
		margin-right: 30px;
		margin-left: 30px;
		border-radius: 15px;
		border-bottom-right-radius: 70px;
		background-image: linear-gradient(0deg, rgba(78, 78, 78, 0.1) 0%, rgba(0, 0, 0, 0.2) 100%);;

		&:after {
			position: absolute;
			top: 4px;
			right: 4px;
			bottom: 4px;
			left: 4px;
			content: '';
			border: 4px solid #1d1f1f;
			border-radius: 12px;
			border-bottom-right-radius: 67px;
			background: #2a2e2f;
			box-shadow: inset 0 1px 1px 1px rgba(255, 255, 255, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.1);
		}
	}
}

</style>
