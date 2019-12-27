<template>
	<div class="sidebar">
		<div class="sidebar__header">
			<div class="sidebar__logo"></div>
		</div>
		<div class="sidebar__controls">
			<RangeSlider/>
			<PaletteSelector/>
			<div class="sidebar__control">
				<button class="sidebar__control-button" @click="click">Export PNG ({{ this.counter }})</button>
			</div>
		</div>
	</div>
</template>

<script>

import RangeSlider from "./RangeSlider.vue";
import PaletteSelector from "./PaletteSelector.vue";

export default {
	name: "Sidebar",
	components: {
		RangeSlider,
		PaletteSelector
	},
	data() {
		return {
			counter: 0
		};
	},
	methods: {
		click() {
			this.$store.commit('clickSave');
			this.counter = this.$store.getters.saveCount;
		}
	},
	props: {}
};

</script>

<style lang="scss">
.sidebar {
	display: flex;
	flex-direction: column;
	width: 330px;
	height: 100%;
	border-right: 1px solid #28282d;
}

.sidebar__header {
	height: 185px;
	margin-bottom: 40px;
}

.sidebar__logo {
}

.sidebar__controls {
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	padding: 40px;
}

.sidebar__control {
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 30px;

	&:last-of-type {
		margin-top: auto;
		margin-bottom: 0;
	}

	&-label {
		font-size: 12px;
		font-weight: bolder;
		flex-grow: 1;
		margin-bottom: 30px;
		letter-spacing: 0.01em;
		text-transform: uppercase;
		color: #64686f;
	}

	&-value {
		font-size: 12px;
		font-weight: bolder;
		text-align: right;
		letter-spacing: 0.01em;
		text-transform: uppercase;
		color: #ffffff;
	}

	&-input {
		flex-basis: 100%;

		&--range {
		}
	}

	&-button {
		font-size: 12px;
		font-weight: bolder;
		width: 100%;
		padding: 20px;
		cursor: pointer;
		transition: background-color 0.3s ease-in-out;
		letter-spacing: 0.01em;
		text-transform: uppercase;
		color: #ffffff;
		border: 0;
		border-radius: 5px;
		background-color: #31313c;

		&:hover {
			background-color: lighten(#31313c, 5%);
		}
	}
}

</style>
