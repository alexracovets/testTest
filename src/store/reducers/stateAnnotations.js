import { createSlice } from '@reduxjs/toolkit';

const stateAnnotations = createSlice({
    name: 'stateAnnotations',
    initialState: {
        // Вивід анотацій
        annotation: [
            {
                position: [-20, 0, 9],
                cameraPosition: [-9.43, 8.94, 16.67],
                color: ["#5E8BFF"],
                id: 1
            },
            {
                position: [-10, 0, 9],
                cameraPosition: [-9.43, 8.94, 16.67],
                color: ["#49AD0B"],
                id: 2
            },
            {
                position: [0, 0, 9],
                cameraPosition: [-9.43, 8.94, 16.67],
                color: ["#EEBE40"],
                id: 3
            },
            {
                position: [10, 0, 9],
                cameraPosition: [-9.43, 8.94, 16.67],
                color: ["#D73B3B"],
                id: 4
            },
            {
                position: [20, 0, 9],
                cameraPosition: [-9.43, 8.94, 16.67],
                color: ["#9F5804"],
                id: 5
            },
            {
                position: [30, 0, 9],
                cameraPosition: [-9.43, 8.94, 16.67],
                color: ["#E2E2E2"],
                id: 6
            },
            {
                position: [40, 0, 9],
                cameraPosition: [-9.43, 8.94, 16.67],
                color: ["#B1B1B1"],
                id: 7
            },
            {
                position: [50, 0, 9],
                cameraPosition: [-9.43, 8.94, 16.67],
                color: ["#5E8BFF", '#49AD0B','#EEBE40','#D73B3B','#9F5804','#E2E2E2','#B1B1B1'],
                id: 8
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