<template>
	<div class="sidebar__control">
		<label class="sidebar__control-label">Palettes</label>
		<div class="sidebar__palettes">
			<Palette
				v-for="palette in palettes"
				v-bind:key="palette.id"
				v-bind:id="palette.id"
				v-bind:active="palette.active"
				v-bind:name="palette.name"
				v-bind:colours="palette.colours"
			/>
		</div>
	</div>
</template>

<script>
import Palette from "./Palette.vue";

export default {
	name: "PaletteSelector",
	components: {
		Palette
	},
	data() {
		return {
			palettes: this.$store.getters.palettes
		};
	},
	mounted() {}
};
</script>

<style scoped lang="scss">
.sidebar__palettes {
	display: flex;
	flex-grow: 1;
	flex-basis: 100%;
	flex-wrap: wrap;
	margin-right: -18px;
	margin-left: -18px;
}
</style>
