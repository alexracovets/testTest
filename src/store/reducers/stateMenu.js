import { createSlice } from '@reduxjs/toolkit';

const stateMenu = createSlice({
    name: 'stateMenu',
    initialState: {
        // Вивід кнопок(натурали)
        btns: [
            {
                text: 'menu.paper',
                image: './img/menu/paper.svg',
                active: true,
                className: 'paper',
                color: '#0d276b',
                annotation: [2, 6, 8, 9],
                annotationImage: './img/annotations/paper.svg',
                id: 1
            },
            {
                text: 'menu.glass',
                image: './img/menu/glass.svg',
                active: true,
                className: 'glass',
                color: '#0e3d02',
                annotation: [2, 6, 8],
                annotationImage: './img/annotations/glass.svg',
                id: 2
            },
            {
                text: 'menu.plastic',
                image: './img/menu/plastic.svg',
                active: true,
                className: 'plastic',
                color: '#8f680e',
                annotation: [1, 2, 6, 8],
                annotationImage: './img/annotations/paper.svg',
                id: 3
            },
            {
                text: 'menu.metal',
                image: './img/menu/metal.svg',
                active: true,
                className: 'metal',
                color: '#940807',
                annotation: [2, 6, 8],
                annotationImage: './img/annotations/metal.svg',
                id: 4
            },
            {
                text: 'menu.bio',
                image: './img/menu/bio-waste.svg',
                active: true,
                className: 'bio',
                color: '#2C1902',
                annotation: [2, 6, 8],
                id: 5
            },
            {
                text: 'menu.otherWaste',
                image: './img/menu/eco-report.svg',
                active: true,
                className: 'other',
                color: '#4a4848',
                annotation: [2, 4, 6, 8],
                annotationImage: './img/annotations/eco-report.svg',
                id: 7
            },
            {
                text: 'menu.ecoZone',
                image: './img/menu/eco-zone.svg',
                active: true,
                className: 'eco',
                color: '#b8b8b8',
                annotation: [3, 5, 7],
                annotationImage: './img/annotations/eco-zone.svg',
                id: 6
            }
        ],
        // Вивід кнопок(лінки)
        links: [
            {
                text: 'menu.ecoReport',
                image: './img/menu/eco-report.svg',
                className: 'report',
                active: false,
                link: 'https://lookerstudio.google.com/embed/reporting/ac15aa9f-0a5d-4c64-bd57-01ba0314d92e/page/FXHYD',
                id: 8
            }
        ]
    },
    reducers: {
        changeActiveStatus: (state, action) => {
            const id = action.payload;
            const button = state.btns.find(btn => btn.id === id);
            button.active = !button.active
        }
    }
});

export const { changeActiveStatus } = stateMenu.actions;

export default stateMenu.reducer;