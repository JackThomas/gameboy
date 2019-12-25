<template>
	<div class="sidebar">
		<div class="sidebar__header">
			<div class="sidebar__logo"></div>
		</div>
		<div class="sidebar__controls">
			<RangeSlider/>
			<div class="sidebar__control">
				<label class="sidebar__control-label">Palettes</label>
				<div class="sidebar__palettes">
					<div class="sidebar__palette">
						<label class="sidebar__palette-label">
							<input type="radio" name="control-palette" class="sidebar__palette-input" />
							<div class="sidebar__palette-colours">
								<div class="sidebar__palette-colour" style="background:#1b1224;"></div>
								<div class="sidebar__palette-colour" style="background:#485d7f;"></div>
								<div class="sidebar__palette-colour" style="background:#6bc2bd;"></div>
								<div class="sidebar__palette-colour" style="background:#ccf9f5;"></div>
							</div>
							<span class="sidebar__palette-name">Rainy Day</span>
							<div class="sidebar__palette-fill"></div>
						</label>
					</div>

					<div class="sidebar__palette">
						<label class="sidebar__palette-label">
							<input type="radio" name="control-palette" class="sidebar__palette-input" />
							<div class="sidebar__palette-colours">
								<div class="sidebar__palette-colour" style="background:#1b1224;"></div>
								<div class="sidebar__palette-colour" style="background:#485d7f;"></div>
								<div class="sidebar__palette-colour" style="background:#6bc2bd;"></div>
								<div class="sidebar__palette-colour" style="background:#ccf9f5;"></div>
							</div>
							<span class="sidebar__palette-name">Rainy Day</span>
							<div class="sidebar__palette-fill"></div>
						</label>
					</div>
				</div>
			</div>
			<div class="sidebar__control">
				<button class="sidebar__control-button">Export PNG</button>
			</div>
		</div>
	</div>
</template>

<script>

import RangeSlider from "./RangeSlider.vue";

export default {
	name: "Sidebar",
	components: {
		RangeSlider
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

.sidebar__palettes {
	display: flex;
	flex-grow: 1;
	flex-basis: 100%;
	flex-wrap: wrap;
	margin-right: -18px;
	margin-left: -18px;
}

.sidebar__palette {
	flex-basis: 50%;
	position: relative;
	margin-bottom: 30px;
	padding-right: 18px;
	padding-left: 18px;
	text-align: center;

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

	&-input {
		display: none;
		visibility: hidden;

		&:checked {
			~ .sidebar__palette-name {
				transition-delay: 0.3s;
				color: #ffffff;
			}

			~ .sidebar__palette-fill {
				transition: transform 0.4s ease-in-out, opacity 0.3s 0.1s ease-in-out;
				transform: scale(1);
				opacity: 1;
			}
		}
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
			content: '';
			border: 2px solid rgba(0,0,0,0.35);
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
