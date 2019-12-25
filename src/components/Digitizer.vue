<template>
	<div class="digitizer">
		<vue-p5 @preload="preload" @setup="setup" @draw="draw"></vue-p5>
	</div>
</template>

<script>
import VueP5 from "vue-p5";
import image from "../assets/test.jpg";

export default {
	name: "Digitizer",
	props: {},
	components: {
		"vue-p5": VueP5
	},
	data() {
		return {
			charon: null,
			gridx: this.$store.getters.resolution,
			gridy: this.$store.getters.resolution,
			screenResolution: this.$store.getters.resolution,
			shape: "rect"
		};
	},
	methods: {
		preload(sketch) {
			this.charon = sketch.loadImage(image);
		},
		setup(sketch) {
			sketch.createCanvas(288, 288);
			this.charon.resize(288, 288);
			sketch.noLoop();
			this.charon.loadPixels();
			sketch.background(0);
			sketch.rectMode(sketch.CENTER);
			sketch.noStroke();
		},
		draw(sketch) {

			const resolution = this.screenResolution;

			for (var i = 1; i < resolution; i++) {
				for (var j = 1; j < resolution; j++) {
					sketch.fill(
						this.charon.get(
							i * (this.charon.width / resolution),
							j * (this.charon.height / resolution)
						)
					);
					sketch.push();
					sketch.translate(
						i * (this.charon.width / resolution),
						j * (this.charon.height / resolution)
					);

					if (this.shape === "rect") {
						sketch.rect(0, 0, this.charon.width / resolution, this.charon.height / resolution);
					} else {
						sketch.ellipse(0, 0, this.charon.width / resolution, this.charon.height / resolution);
					}
					sketch.updatePixels();
					sketch.pop();
				}
			}
		},
	},
	computed: {
		resolution() {
			return this.$store.getters.resolution;
		}
	},
	watch: {
		resolution: {
			immediate: true,
			handler(newResolution) {
				/* eslint-disable no-alert, no-console */
				this.screenResolution = newResolution;
				// console.log(this);
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
