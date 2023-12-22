import { createSlice } from '@reduxjs/toolkit';

const stateAnnotations = createSlice({
    name: 'stateAnnotations',
    initialState: {
        // Вивід анотацій
        annotation: [
            {
                position: [-100, 1, 58],
                cameraPosition: [-84, 32, 82],
                color: ["#5E8BFF", "#EEBE40", "#D73B3B", "#9F5804"],
                panoram: [
                    {
                        current: 'panoram/1/1.jpg',
                        startCamera: [0.052, 100.021, 0.082],
                        isShow: true,
                        interactive: {
                            arrow: [
                                {
                                    to: 3,
                                    position: [-110, 30, 0],
                                    rotation: [0, 0.04, 0],
                                    camera: [-0.062, 99.996, 0.078]
                                }
                            ],
                            bounce: [
                                {
                                    to: 2,
                                    position: [-80, 30, -190],
                                    rotation: [0, -1.04, 0],
                                    camera: [0.098, 100, -0.014]
                                },
                            ],
                            mask: []
                        },
                        id: 1
                    },
                    {
                        current: 'panoram/1/3.jpg',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 1,
                                    position: [-42, 40, 80],
                                    rotation: [0, 1.1, 0],
                                    camera: [-0.098, 99.995, -0.016]
                                },
                                // {
                                //     to: 2,
                                //     position: [105, 40, 66],
                                //     rotation: [0, 2.6, 0],
                                //     camera: [0.079, 99.997, 0.060]
                                // }
                            ],
                            mask: []
                        },
                        id: 3
                    }
                ],
                id: 1
            },
            {
                position: [100, 15, 12],
                cameraPosition: [98.7, 50, -24.7],
                color: ["#5E8BFF", "#EEBE40", "#D73B3B", "#9F5804"],
                panoram: [
                    {
                        current: 'panoram/2/1.jpg',
                        startCamera: [-0.091, 100.001, 0.041],
                        isShow: true,
                        interactive: {
                            arrow: [
                                {
                                    to: 2,
                                    position: [0, 40, -100],
                                    rotation: [0, -1.6, 0],
                                    camera: [0.006, 99.991, 0.099]
                                }
                            ],
                            mask: []
                        },
                        id: 1
                    },
                    {
                        current: 'panoram/2/2.jpg',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 1,
                                    position: [10, 40, 110],
                                    rotation: [0, 1.7, 0],
                                    camera: [0.01, 99.983, -0.098]
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
                position: [-52, 1, 46],
                cameraPosition: [-11, 32, 53],
                color: ["#5E8BFF", "#EEBE40", "#D73B3B", "#9F5804"],
                panoram: [
                    {
                        current: 'panoram/3/1.jpg',
                        startCamera: [-0.098, 100.003, -0.020],
                        isShow: true,
                        interactive: {
                            arrow: [
                                {
                                    to: 2,
                                    position: [164, 40, 8],
                                    rotation: [0, 2.87, 0],
                                    camera: [-0.087, 100.0002, -0.049]
                                },
                                {
                                    to: 3,
                                    position: [330, 40, 60],
                                    rotation: [0, 2.52, 0],
                                    camera: [0.071, 100.009, 0.069]
                                }
                            ],
                            mask: []
                        },
                        id: 1
                    },
                    {
                        current: 'panoram/3/2.jpg',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 1,
                                    position: [-130, 40, -5],
                                    rotation: [0, -0.05, 0],
                                    camera: [0.095, 100.014, 0.028]
                                },
                                {
                                    to: 3,
                                    position: [127, 40, 16],
                                    rotation: [0, 3, 0],
                                    camera: [0.08, 100.011, 0.059]
                                }
                            ],
                            mask: []
                        },
                        id: 2
                    },
                    {
                        current: 'panoram/3/3.jpg',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 1,
                                    position: [222, 47, 0],
                                    rotation: [0, 3.08, -0.18],
                                    camera: [0.095, 100.014, 0.028]
                                },
                                {
                                    to: 2,
                                    position: [125, 40, -3],
                                    rotation: [0, -3.07, 0],
                                    camera: [0.097, 100.0123, 0.018]
                                }
                            ],
                            mask: []
                        },
                        id: 3
                    }
                ],
                id: 3
            },
            {
                position: [-85, 10.5, 43],
                cameraPosition: [-79, 38.7, 59.7],
                color: ["#5E8BFF", "#EEBE40", "#D73B3B", "#9F5804"],
                panoram: [
                    {
                        current: 'panoram/4/1.jpg',
                        startCamera: [-0.097, 100.0146, -0.021],
                        isShow: true,
                        interactive: {
                            arrow: [
                                {
                                    to: 2,
                                    position: [31, 30, 74],
                                    rotation: [0, 1.99, 0],
                                    camera: [0.097, 100.015, 0.015]
                                },
                                {
                                    to: 3,
                                    position: [55, 30, -60],
                                    rotation: [0, 3.89, 0],
                                    camera: [0.086, 99.986, 0.048]
                                }
                            ],
                            mask: [
                                {
                                    image: 'panoram/4/mask/1.png',
                                    args: {
                                        width: 115,
                                        height: 115,
                                        position: [152, 2, 37.54],
                                        rotation: [-0.02, 4.54, 0]
                                    }
                                }
                            ]
                        },
                        id: 1
                    },
                    {
                        current: 'panoram/4/2.jpg',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 1,
                                    position: [70, 30, -5],
                                    rotation: [0, 3.18, 0],
                                    camera: [0.079, 100.004, 0.061]
                                },
                                {
                                    to: 3,
                                    position: [40, 30, 100],
                                    rotation: [0, 1.9, 0],
                                    camera: [0.097, 100.017, -0.012]
                                }
                            ],
                            mask: []
                        },
                        id: 2
                    },
                    {
                        current: 'panoram/4/3.jpg',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 1,
                                    position: [80, 30, 43],
                                    rotation: [0, 2.61, 0],
                                    camera: [0.1, 99.996, -0.001]
                                },
                                {
                                    to: 2,
                                    position: [110, 30, -30],
                                    rotation: [0, 3.46, 0],
                                    camera: [0.097, 100.017, 0.018]
                                },
                                {
                                    to: 4,
                                    position: [-110, 30, 20],
                                    rotation: [0, 0.21, 0],
                                    camera: [0.092, 99.992, -0.039]
                                }
                            ],
                            mask: []
                        },
                        id: 3
                    },
                    {
                        current: 'panoram/4/4.jpg',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 3,
                                    position: [106, 40, -36],
                                    rotation: [0, 3.44, 0],
                                    camera: [-0.097, 100.006, -0.024]
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
                position: [-70, 11.3, 43],
                cameraPosition: [-52.8, 37.4, 55.8],
                color: ["#5E8BFF", "#EEBE40", "#D73B3B", "#9F5804"],
                panoram: [
                    {
                        current: 'panoram/5/1.jpg',
                        startCamera: [-0.097, 100.021, -0.013],
                        isShow: true,
                        interactive: {
                            arrow: [
                                {
                                    to: 2,
                                    position: [110, 30, -12],
                                    rotation: [0, 3.24, 0],
                                    camera: [0.098, 99.998, 0.017]
                                },
                                {
                                    to: 3,
                                    position: [210, 30, -28],
                                    rotation: [0, 3.32, 0],
                                    camera: [0.096, 100.004, 0.027]
                                }
                            ],
                            mask: [
                                {
                                    image: 'panoram/5/mask/1.png',
                                    args: {
                                        width: 188,
                                        height: 220,
                                        position: [-138, -72, -110],
                                        rotation: [0, 0.4, -0.04]
                                    }
                                }
                            ]
                        },
                        id: 1
                    },
                    {
                        current: 'panoram/5/2.jpg',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 1,
                                    position: [90, 30, 46],
                                    rotation: [0, 2.88, 0],
                                    camera: [0.096, 100.004, 0.027]
                                },
                                {
                                    to: 3,
                                    position: [-120, 30, -8],
                                    rotation: [0, -0.02, 0],
                                    camera: [0.098, 99.994, 0.018]
                                }
                            ],
                            mask: []
                        },
                        id: 2
                    },
                    {
                        current: 'panoram/5/3.jpg',
                        isShow: false,
                        interactive: {
                            arrow: [
                                {
                                    to: 1,
                                    position: [180, 30, 55],
                                    rotation: [0, 2.98, 0],
                                    camera: [0.091, 100.027, 0.032]
                                },
                                {
                                    to: 2,
                                    position: [80, 30, 30],
                                    rotation: [0, 2.82, 0],
                                    camera: [-0.094, 99.993, -0.031]
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
                position: [93, 15, 30],
                cameraPosition: [74.4, 41.8, 19.6],
                color: ["#5E8BFF", "#EEBE40", "#D73B3B", "#9F5804"],
                panoram: [
                    {
                        current: 'panoram/6/1.jpg',
                        startCamera: [-0.099, 100.010, -0.008],
                        isShow: true,
                        interactive: {
                            arrow: [],
                            mask: [
                                {
                                    image: 'panoram/6/mask/1.png',
                                    args: {
                                        width: 106,
                                        height: 100,
                                        position: [129, 24, 0],
                                        rotation: [0, 4.73, 0]
                                    }
                                }
                            ]
                        },
                        id: 1
                    }
                ],
                id: 6
            },
            {
                position: [-70, 1.5, 61],
                cameraPosition: [-49, 26.8, 77.5],
                color: ["#5E8BFF", "#EEBE40", "#D73B3B", "#9F5804"],
                panoram: [
                    {
                        current: 'panoram/7/1.jpg',
                        startCamera: [0.096, 100.017, 0.019],
                        isShow: true,
                        interactive: {
                            arrow: [],
                            mask: [
                                {
                                    image: 'panoram/7/mask/1.png',
                                    args: {
                                        width: 97,
                                        height: 83,
                                        position: [-128, 32, -37],
                                        rotation: [0.05, 1.74, -0.06]
                                    }
                                }
                            ]
                        },
                        id: 1
                    }
                ],
                id: 7
            },
            {
                position: [-92, 0, 23],
                cameraPosition: [-122.8, 42.7, 19.7],
                color: ["#5E8BFF", "#EEBE40", "#D73B3B", "#9F5804"],
                panoram: [
                    {
                        current: 'panoram/8/1.jpg',
                        startCamera: [-0.097, 100, -0.022],
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
            // {
            //     position: [105, -2.5, 64],
            //     cameraPosition: [97, 24.3, 95],
            //     color: ["#5E8BFF", "#EEBE40", "#D73B3B", "#9F5804"],
            //     id: 9
            // }
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