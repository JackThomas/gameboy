<template>
	<div class="digitizer">
		<vue-p5 @preload="preload" @setup="setup" @draw="draw"></vue-p5>
	</div>
</template>

<script>
import VueP5 from "vue-p5";
import image from "../assets/test-2.png";

export default {
	name: "Digitizer",
	props: {},
	components: {
		"vue-p5": VueP5
	},
	data() {
		return {
			sketch: null,
			image: null,
			width: 288,
			height: 288,
			screenResolution: this.$store.getters.resolution,
			shape: "rct",
			activePalette: this.$store.getters.activePalette.colours
		};
	},
	methods: {
		preload(sketch) {
			this.image = sketch.loadImage(image);
			this.updateSketch(sketch);
		},
		setup(sketch) {
			sketch.createCanvas(this.width, this.width);

			if (this.image.height > this.height) {
				this.image.resize(0, this.height);
			}
			if (this.image.width > this.width) {
				this.image.resize(this.width, 0);
			}

			sketch.noLoop();
			this.image.loadPixels();
			sketch.noStroke();
			this.updateSketch(sketch);
		},
		draw(sketch, save = false) {
			const resolution = this.screenResolution;
			const palette = this.activePalette;
			const blockSize = this.width / resolution;
			const lightnessSplit = 100 / palette.length;

			/* eslint-disable no-alert, no-console */

			if (sketch !== null) {
				sketch.clear();
			
				for (var i = 1; i < resolution; i++) {
					for (var j = 1; j < resolution; j++) {
						
						
						const fill = this.image.get(i * (blockSize), j * (blockSize));
						const lightness = sketch.lightness(fill);

						const pixel = {
							container: blockSize,
							size: blockSize - 2,
							variation: (fill[3] !== 0) ? 0.9 : 0.5,
							// variation: (fill[3] !== 0) ?  ((lightness / 100) * 0.5) : 0.75,
							background: (fill[3] !== 0) ? fill : 'transparent',
						}

						if (pixel.background !== 'transparent') {

							for (var p = palette.length; p > 0; p--) {
								let low = (p * lightnessSplit) - lightnessSplit;
								let high = p * lightnessSplit;

								if (lightness > low && lightness < high) {
									sketch.fill(palette[p - 1]);
								}
							}

						} else {
							const emptyFillBase = sketch.color(0, 0, 0);
							const emptyFillColour = sketch.color(palette[3]);
							const emptyFill = sketch.lerpColor(emptyFillBase, emptyFillColour, 0.33);
							sketch.fill(emptyFill);
						}

						sketch.push();
						sketch.translate(
							(i * pixel.container) - (1 * blockSize) ,
							(j * pixel.container) - (1 * blockSize)
						);

						if (this.shape === "rect") {
							sketch.rect(pixel.container, pixel.container, pixel.size * pixel.variation, pixel.size * pixel.variation);
						} else {
							// sketch.ellipse(pixelSize, pixelSize, (pixel.size) * pixel.variation, (pixel.size) * pixel.variation);
							sketch.ellipse(pixel.container, pixel.container, pixel.size * pixel.variation, pixel.size * pixel.variation);
						}
						sketch.updatePixels();
						sketch.pop();

					}
				}
				if (save === true) {
					/* eslint-disable no-alert, no-console */
					console.log('save canvas');
					sketch.saveCanvas('myCanvas', 'jpg');
				}
			}
			this.updateSketch(sketch);
		},
		updateSketch(sketch) {
			this.sketch = sketch;
		}
	},
	computed: {
		resolution() {
			return this.$store.getters.resolution;
		},
		palette() {
			return this.$store.getters.activePalette;
		},
		saveCount() {
			return this.$store.getters.saveCount;
		}
	},
	watch: {
		resolution: {
			handler(newResolution) {
				this.screenResolution = newResolution;
				this.draw(this.sketch);
			}
		},
		palette: {
			handler(newPalette) {
				this.activePalette = newPalette.colours;
				this.draw(this.sketch);
			}
		},
		saveCount: {
			handler(newCount) {
				/* eslint-disable no-alert, no-console */
				console.log('click', newCount);
				this.draw(this.sketch, true);
				// this.$store.commit('clickSave', this.$store.getters.saveCount + 1);
			}
		}
	},
	render(h) {
		return h(VueP5, { on: this });
	}
};
</script>

<style scoped lang="scss">
.digitizer {
	display: flex;
	flex-direction: column;
	position: relative;
	z-index: 1;
	width: 300px;
	height: 300px;
	margin: auto;
	border-radius: 8px;
	background-image: linear-gradient(
		0deg,
		rgba(#ffffff, 0.1) 0%,
		rgba(#000000, 0.25) 100%
	);

	&:after {
		position: absolute;
		top: 3px;
		right: 3px;
		bottom: 3px;
		left: 3px;
		content: "";
		border-radius: 5px;
		background-color: #000000;
	}

	> div {
		overflow: hidden;
		position: relative;
		z-index: 10;
		width: 288px;
		height: 288px;
		margin: auto;
		border-radius: 2px;
	}
}
</style>
