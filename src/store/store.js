import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX);

export const store = new VueX.Store({
    state: {
        resolution: 0,
        saveCount: 0,
        activePalette: 2,
        palettes: [
            {
                id: 1,
                active: true,
                name: "Rainy Day",
                colours: [
                    'rgb(27, 18, 36)',
                    'rgb(72, 93, 127)',
                    'rgb(107, 194, 189)',
                    'rgb(204, 249, 245)'
                ]
            },
            {
                id: 2,
                active: false,
                name: "Smalls",
                colours: [
                    'rgb(17, 9, 25)',
                    'rgb(99, 77, 142)',
                    'rgb(139, 128, 194)',
                    'rgb(232, 232, 242)'
                ]
            },
            {
                id: 3,
                active: false,
                name: "Warm Rain",
                colours: [
                    'rgb(28, 17, 36)',
                    'rgb(128, 73, 74)',
                    'rgb(190, 111, 105)',
                    'rgb(249, 236, 207)'
                ]
            },
            {
                id: 4,
                active: false,
                name: "Jungle",
                colours: [
                    'rgb(19, 36, 17)',
                    'rgb(77, 129, 102)',
                    'rgb(126, 194, 108)',
                    'rgb(249, 245, 207)'
                ]
            },
            {
                id: 5,
                active: false,
                name: "Toxic Forest",
                colours: [
                    'rgb(27, 18, 36)',
                    'rgb(92, 74, 127)',
                    'rgb(179, 193, 107)',
                    'rgb(237, 255, 234)'
                ]
            },
            {
                id: 6,
                active: false,
                name: "AYY4",
                colours: [
                    'rgb(1, 48, 58)',
                    'rgb(254, 119, 120)',
                    'rgb(255, 207, 149)',
                    'rgb(241, 241, 217)'
                ]
            },
            {
                id: 7,
                active: false,
                name: "Pocket Grey",
                colours: [
                    'rgb(43, 43, 39)',
                    'rgb(112, 107, 102)',
                    'rgb(168, 158, 148)',
                    'rgb(224, 219, 207)'
                ]
            },
            {
                id: 8,
                active: false,
                name: "Classic",
                colours: [
                    'rgb(36, 48, 55)',
                    'rgb(63, 82, 61)',
                    'rgb(117, 132, 70)',
                    'rgb(171, 181, 107)'
                ]
            }
            
        ]
    },
    mutations: {
        change(state, resolution) {
            state.resolution = resolution
        },
        clickSave(state) {
            state.saveCount = state.saveCount + 1;
        },
        updatePalette(state, paletteID) {
            state.palettes.map(palette => {
                if (palette.id === paletteID) {
                    palette.active = true;
                } else {
                    palette.active = false;
                }
                return palette;
            });
        
        
        }
    },
    getters: {
        resolution: state => state.resolution,
        saveCount: state => state.saveCount,
        palettes: state => state.palettes,
        activePalette: state => {
            return state.palettes.filter(palette => {
                return palette.active;
            })[0];
        }
    }
})