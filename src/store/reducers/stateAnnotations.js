import { createSlice } from '@reduxjs/toolkit';

const stateAnnotations = createSlice({
    name: 'stateAnnotations',
    initialState: {
        // Вивід анотацій
        annotation: [
            {
                position: [-100, 0, 58],
                cameraPosition: [-84, 32, 82],
                color: ["#5E8BFF", "#EEBE40", "#D73B3B", "#9F5804"],
                panoram: [
                    {
                        current: 'panoram/1/1.jpg',
                        cameraPosition: [0, 0, 0],
                        isShow: true,
                        interactive: {
                            arrow: [
                                {
                                    to: 2,
                                    position: [-80, 30, -190],
                                    rotation: [0, -1.04, 0],
                                    camera: [0.098, 100, -0.014]
                                },
                                {
                                    to: 3,
                                    position: [-110, 30, 0],
                                    rotation: [0, 0.04, 0],
                                    camera: [-0.062, 99.996, 0.078]
                                }
                            ],
                            mask: []
                        },
                        id: 1
                    },
                    {
                        current: 'panoram/1/2.jpg',
                        cameraPosition: [0, 0, 0],
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 1,
                                    position: [135, 40, 67],
                                    rotation: [0, 2.6, 0],
                                    camera: [-0.02, 100.01, -0.097]
                                },
                                {
                                    to: 3,
                                    position: [65, 40, 100],
                                    rotation: [0, 2.2, 0],
                                    camera: [0.08, 99.991, 0.059]
                                }
                            ],
                            mask: []
                        },
                        id: 2
                    },
                    {
                        current: 'panoram/1/3.jpg',
                        cameraPosition: [0, 0, 0],
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 1,
                                    position: [-42, 40, 80],
                                    rotation: [0, 1.1, 0],
                                    camera: [-0.098, 99.995, -0.016]
                                },
                                {
                                    to: 2,
                                    position: [105, 40, 66],
                                    rotation: [0, 2.6, 0],
                                    camera: [0.079, 99.997, 0.060]
                                }
                            ],
                            mask: []
                        },
                        id: 3
                    }
                ],
                id: 1
            },
            {
                position: [100, 13.3, 12],
                cameraPosition: [98.7, 50, -24.7],
                color: ["#5E8BFF", "#EEBE40", "#D73B3B", "#9F5804"],
                panoram: [
                    {
                        current: 'panoram/2/1.jpg',
                        cameraPosition: [0, 0, 0],
                        isShow: true,
                        interactive: {
                            arrow: [
                                {
                                    to: 2,
                                    position: [10, 40, 110],
                                    rotation: [0, 1.7, 0]
                                }
                            ],
                            mask: []
                        },
                        id: 1
                    },
                    {
                        current: 'panoram/2/2.jpg',
                        cameraPosition: [0, 0, 0],
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 1,
                                    position: [0, 40, -100],
                                    rotation: [0, -1.6, 0]
                                }
                            ],
                            mask: []
                        },
                        id: 2
                    }
                ],
                id: 2
            },
            {
                position: [-52, -0.2, 46],
                cameraPosition: [-11, 32, 53],
                color: ["#5E8BFF", "#EEBE40", "#D73B3B", "#9F5804"],
                id: 3
            },
            {
                position: [-85, 9.7, 43],
                cameraPosition: [-79, 38.7, 59.7],
                color: ["#5E8BFF", "#EEBE40", "#D73B3B", "#9F5804"],
                panoram: [
                    {
                        current: 'panoram/4/1.jpg',
                        cameraPosition: [0, 0, 0],
                        isShow: true,
                        interactive: {
                            arrow: [
                                {
                                    to: 2,
                                    position: [104, 40, -33],
                                    rotation: [0, -2.9, 0]
                                },
                                {
                                    to: 3,
                                    position: [185, 30, -30],
                                    rotation: [0, -3.4, 0]
                                }
                            ],
                            mask: []
                        },
                        id: 1
                    },
                    {
                        current: 'panoram/4/2.jpg',
                        cameraPosition: [0, 0, 0],
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 1,
                                    position: [-94, 40, 15],
                                    rotation: [0, 0.1, 0]
                                },
                                {
                                    to: 3,
                                    position: [108, 30, -3],
                                    rotation: [0, 3.1, 0]
                                },
                                {
                                    to: 4,
                                    position: [66, 30, 50],
                                    rotation: [0, 2.5, 0]
                                }
                            ],
                            mask: []
                        },
                        id: 2
                    },
                    {
                        current: 'panoram/4/3.jpg',
                        cameraPosition: [0, 0, 0],
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 1,
                                    position: [65, 30, 160],
                                    rotation: [0, 2.1, 0]
                                },
                                {
                                    to: 2,
                                    position: [32, 30, 91],
                                    rotation: [0, 1.6, 0]
                                },
                                {
                                    to: 4,
                                    position: [56, 30, 0],
                                    rotation: [0, 3.2, 0]
                                }
                            ],
                            mask: []
                        },
                        id: 3
                    },
                    {
                        current: 'panoram/4/4.jpg',
                        cameraPosition: [0, 0, 0],
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 1,
                                    position: [62, 40, -120],
                                    rotation: [0, -1.7, 0]
                                },
                                {
                                    to: 2,
                                    position: [50, 30, -43],
                                    rotation: [0, -2.5, 0]
                                },
                                {
                                    to: 3,
                                    position: [-8, 30, 62],
                                    rotation: [0, 1.3, 0]
                                }
                            ],
                            mask: []
                        },
                        id: 4
                    }
                ],
                id: 4
            },
            {
                position: [-70, 10.2, 43],
                cameraPosition: [-52.8, 37.4, 55.8],
                color: ["#5E8BFF", "#EEBE40", "#D73B3B", "#9F5804"],
                panoram: [
                    {
                        current: 'panoram/5/1.jpg',
                        cameraPosition: [0, 0, 0],
                        isShow: true,
                        interactive: {
                            arrow: [
                                {
                                    to: 2,
                                    position: [90, 30, 20],
                                    rotation: [0, -3.5, 0]
                                },
                                {
                                    to: 3,
                                    position: [161, 30, 48],
                                    rotation: [0, 2.8, 0]
                                }
                            ],
                            mask: []
                        },
                        id: 1
                    },
                    {
                        current: 'panoram/5/2.jpg',
                        cameraPosition: [0, 0, 0],
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 1,
                                    position: [-115, 30, -13],
                                    rotation: [0, -0.2, 0]
                                },
                                {
                                    to: 3,
                                    position: [81, 30, 43],
                                    rotation: [0, -3.2, 0]
                                }
                            ],
                            mask: []
                        },
                        id: 2
                    },
                    {
                        current: 'panoram/5/3.jpg',
                        cameraPosition: [0, 0, 0],
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 1,
                                    position: [175, 30, -25],
                                    rotation: [0, 3.4, 0]
                                },
                                {
                                    to: 2,
                                    position: [80, 30, -10],
                                    rotation: [0, 3.1, 0]
                                },
                            ],
                            mask: []
                        },
                        id: 3
                    }
                ],
                id: 5
            },
            {
                position: [93, 13.3, 30],
                cameraPosition: [74.4, 41.8, 19.6],
                color: ["#5E8BFF", "#EEBE40", "#D73B3B", "#9F5804"],
                panoram: [
                    {
                        current: 'panoram/6/1.jpg',
                        cameraPosition: [0, 0, 0],
                        isShow: true,
                        interactive: {
                            arrow: [],
                            mask: []
                        },
                        id: 1
                    }
                ],
                id: 6
            },
            {
                position: [-70, 0.7, 61],
                cameraPosition: [-49, 26.8, 77.5],
                color: ["#5E8BFF", "#EEBE40", "#D73B3B", "#9F5804"],
                panoram: [
                    {
                        current: 'panoram/7/1.jpg',
                        cameraPosition: [0, 0, 0],
                        isShow: true,
                        interactive: {
                            arrow: [],
                            mask: []
                        },
                        id: 1
                    }
                ],
                id: 7
            },
            {
                position: [-95, 7.6, 4],
                cameraPosition: [-122.8, 42.7, 19.7],
                color: ["#5E8BFF", "#EEBE40", "#D73B3B", "#9F5804"],
                panoram: [
                    {
                        current: 'panoram/8/1.jpg',
                        cameraPosition: [0, 0, 0],
                        isShow: true,
                        interactive: {
                            arrow: [],
                            mask: [
                                {
                                    image: 'panoram/8/mask/1.png',
                                    args: {
                                        width: 30,
                                        height: 21,
                                        position: [38.00, 88.08, 24.00],
                                        rotation: [0, -2.41, 0]
                                    }
                                }
                            ]
                        },
                        id: 1
                    }
                ],
                id: 8
            },
            {
                position: [105, -2.5, 64],
                cameraPosition: [97, 24.3, 95],
                color: ["#5E8BFF", "#EEBE40", "#D73B3B", "#9F5804"],
                id: 9
            }
        ]
    },
    reducers: {
        changeActiveColors: (state, action) => {
            const { color, annotation } = action.payload;
            annotation.forEach(element => {
                const anno = state.annotation.find(item => item.id === element);
                anno?.color.includes(color)
                    ? anno.color = anno.color.filter(exist => exist !== color)
                    : anno.color.push(color)
            });
        },
    }
});

export const { changeActiveColors } = stateAnnotations.actions;

export default stateAnnotations.reducer;