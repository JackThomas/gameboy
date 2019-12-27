<template>
	<div class="sidebar__control">
		<label class="sidebar__control-label">Resolution</label>
		<div class="sidebar__control-value">{{ $store.getters.resolution }}	</div>
		<input type="range" name="control-resolution" class="sidebar__control-input sidebar__control-input--range"/>
	</div>
</template>

<script>

import Rangeable from 'rangeable';
import 'rangeable/src/scss/app.scss';

export default {
	name: "RangeSlider",
	data() {
		return {
			range: 0
		};
	},
	mounted() {
		const vm = this;
		const value = 40;
		const rangeSlider = new Rangeable('input', {
			type: "single",
			tooltips: false,
			min: 10,
			max: 70,
			step: 1,
			value: value,
			vertical: false,
			controls: undefined,
			onInit: () =>  {
				// do something when the instance has loaded
				vm.range = value;
				vm.$store.commit('change', value);
			},
			onStart: () =>  {
				// do something on mousedown/touchstart
			},
			onChange: () =>  {
				vm.range = rangeSlider.getValue();
				vm.$store.commit('change', parseInt(rangeSlider.getValue()));

			},
			onEnd: () =>  {
				// do something on mouseup/touchend
			}
		});
	}
};

</script>

<style lang="scss">

$range-body: #31313d;
$range-body-fill: #58a5ff;
$handle-body-color: #d6d6d8;
$handle-body-active-color: #58a5ff;
$handle-border-color: #ffffff;
$bar-size: 8px;
$handle-border: 8px;
$handle-size: 28px;

.rangeable-container {
	width: 100%;
	margin-bottom: 20px;
	cursor: pointer;

	&.focus {
		.rangeable-handle {
			border: 1px solid #74b9ff;
		}
	}

	/* track */
	.rangeable-track {
		position: relative;
		width: 100%;
		height: $bar-size;
		border-radius: $bar-size / 2;
		background-color: $range-body;
	}

	/* progress bar */
	.rangeable-progress {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: $bar-size;
		transform-origin: 0 0 0;
		border-radius: $bar-size / 2;
		background-color: $range-body-fill;
	}

	/* handle */
	.rangeable-handle {
		position: absolute;
		top: 50%;
		width: $handle-size;
		height: $handle-size;
		border: $handle-border solid $handle-border-color;
		border-radius: 50%;
		background-color: $handle-body-color;
		transition: background-color 0.2s ease-in-out;

		&.active {
			background-color: $handle-body-active-color;
			z-index: 10;
		}
	}
}

.rangeable-input {
	overflow: hidden;
	clip: rect(0px, 0px, 0px, 0px);
	position: absolute;
	width: 1px;
	height: 1px;
	margin: -1px;
	padding: 0;
	border: 0 none;

	&:focus {
		& + .rangeable-track {
			.rangeable-handle {
				border: 1px solid var(--primary);
			}
		}
	}
}

</style>
