import { createSlice } from '@reduxjs/toolkit';

const stateMenu = createSlice({
    name: 'stateMenu',
    initialState: {
        // Вивід кнопок(натурали)
        btns: [
            {
                name: 'paper',
                color: '#5E8BFF',
                active: true,
                annotation: [2, 6, 8, 9],
                id: 1
            },
            {
                name: 'glass',
                color: '#49AD0B',
                active: true,
                annotation: [2, 6, 8],
                id: 2
            },
            {
                name: 'plastic',
                color: '#EEBE40',
                active: true,
                annotation: [1, 2, 6, 8],
                id: 3
            },
            {
                name: 'metal',
                color: '#D73B3B',
                active: true,
                annotation: [2, 6, 8],
                id: 4
            },
            {
                name: 'bio',
                color: '#9F5804',
                active: true,
                annotation: [2, 6, 8],
                id: 5
            },
            {
                name: 'other',
                color: '#E2E2E2',
                active: true,
                annotation: [2, 4, 6, 8],
                id: 6
            },
            {
                name: 'eco',
                color: '#B1B1B1',
                active: true,
                annotation: [3, 5, 7],
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