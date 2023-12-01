import { createSlice } from '@reduxjs/toolkit';

const stateMenu = createSlice({
    name: 'stateMenu',
    initialState: {
        // Вивід кнопок(натурали)
        btns: [
            {
                name: 'paper',
                active: true,
                color: '#5E8BFF',
                annotation: [2, 6, 8, 9],
                annotationImage: './img/annotations/paper.svg',
                id: 1
            },
            {
                name: 'glass',
                active: true,
                color: '#49AD0B',
                annotation: [2, 6, 8],
                annotationImage: './img/annotations/glass.svg',
                id: 2
            },
            {
                name: 'plastic',
                active: true,
                color: '#EEBE40',
                annotation: [1, 2, 6, 8],
                annotationImage: './img/annotations/paper.svg',
                id: 3
            },
            {
                name: 'metal',
                active: true,
                color: '#D73B3B',
                annotation: [2, 6, 8],
                annotationImage: './img/annotations/metal.svg',
                id: 4
            },
            {
                name: 'bio',
                active: true,
                color: '#9F5804',
                annotation: [2, 6, 8],
                id: 5
            },
            {
                name: 'other',
                active: true,
                color: '#E2E2E2',
                annotation: [2, 4, 6, 8],
                annotationImage: './img/annotations/eco-report.svg',
                id: 6
            },
            {
                name: 'eco',
                active: true,
                color: '#B1B1B1',
                annotation: [3, 5, 7],
                annotationImage: './img/annotations/eco-zone.svg',
                id: 7
            }

        ],
        // Вивід кнопок(лінки)
        links: [
            {
                name: 'report',
                color: '#4B51FF',
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