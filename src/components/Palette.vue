<template>
	<div
		class="sidebar__palette"
		v-on:click="clickPalette(id)"
		v-bind:class="active ? 'is-active' : ''"
	>
		<label class="sidebar__palette-label">
			<div class="sidebar__palette-colours">
				<div
					v-for="colour in colours"
					v-bind:key="colour.id"
					v-bind:style="{ backgroundColor: colour }"
					class="sidebar__palette-colour"
				></div>
			</div>
			<span class="sidebar__palette-name">{{ name }}</span>
			<div class="sidebar__palette-fill"></div>
		</label>
	</div>
</template>

<script>
export default {
	name: "Palette",
	props: {
		id: {
			type: Number,
			required: true
		},
		active: {
			type: Boolean,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		colours: {
			type: Array,
			required: true
		}
	},
	methods: {
		clickPalette(id) {
			this.$store.commit("updatePalette", id);
		}
	}
};
</script>

<style scoped lang="scss">
.sidebar__palette {
	flex-basis: 50%;
	position: relative;
	margin-bottom: 30px;
	padding-right: 18px;
	padding-left: 18px;
	text-align: center;

	&.is-active {
		.sidebar__palette-name {
			transition-delay: 0.3s;
			color: #ffffff;
		}

		.sidebar__palette-fill {
			transition: transform 0.4s ease-in-out,
				opacity 0.3s 0.1s ease-in-out;
			transform: scale(1);
			opacity: 1;
		}
	}

	&-label {
		font-size: 12px;
		font-weight: bolder;
		display: block;
		position: relative;
		z-index: 1;
		cursor: pointer;
		letter-spacing: 0.01em;
		text-transform: uppercase;
		color: #64686f;
	}

	&-colours {
		display: flex;
		overflow: hidden;
		position: relative;
		width: 100%;
		margin-bottom: 10px;
		border: 2px solid white;
		border-radius: 8px;

		&:after {
			display: block;
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			content: "";
			border: 2px solid rgba(0, 0, 0, 0.35);
			border-radius: 6px;

			mix-blend-mode: overlay;
		}
	}

	&-colour {
		flex-grow: 1;
		height: 36px;
	}

	&-name {
		transition: color 0.2s ease-in-out;
		color: inherit;
	}

	&-fill {
		position: absolute;
		z-index: -1;
		top: -10px;
		right: -10px;
		bottom: -10px;
		left: -10px;
		transition: transform 0.4s ease-in-out, opacity 0.3s ease-in-out;
		transform: scale(0);
		opacity: 0;
		border-radius: 15px;
		background-color: #31313c;
	}
}
</style>