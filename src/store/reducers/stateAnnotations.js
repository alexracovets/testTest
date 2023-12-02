import { createSlice } from '@reduxjs/toolkit';

const stateAnnotations = createSlice({
    name: 'stateAnnotations',
    initialState: {
        // Вивід анотацій
        annotation: [
            {
                position: [-100, 1, 8],
                cameraPosition: [-9.43, 8.94, 16.67],
                color: ["#5E8BFF", "#49AD0B", "#EEBE40", "#D73B3B", "#9F5804", "#E2E2E2", "#B1B1B1"],
                id: 1
            },
            {
                position: [100, 9, -40],
                cameraPosition: [-9.43, 8.94, 16.67],
                color: ["#5E8BFF", "#49AD0B", "#EEBE40", "#D73B3B", "#9F5804", "#E2E2E2", "#B1B1B1"],
                id: 2
            },
            {
                position: [-52, 0, -4],
                cameraPosition: [-9.43, 8.94, 16.67],
                color: ["#5E8BFF", "#49AD0B", "#EEBE40", "#D73B3B", "#9F5804", "#E2E2E2", "#B1B1B1"],
                id: 3
            },
            {
                position: [-85, 5, -7],
                cameraPosition: [-9.43, 8.94, 16.67],
                color: ["#5E8BFF", "#49AD0B", "#EEBE40", "#D73B3B", "#9F5804", "#E2E2E2", "#B1B1B1"],
                id: 4
            },
            {
                position: [-70, 5, -7],
                cameraPosition: [-9.43, 8.94, 16.67],
                color: ["#5E8BFF", "#49AD0B", "#EEBE40", "#D73B3B", "#9F5804", "#E2E2E2", "#B1B1B1"],
                id: 5
            },
            {
                position: [93, 9, -20],
                cameraPosition: [-9.43, 8.94, 16.67],
                color: ["#5E8BFF", "#49AD0B", "#EEBE40", "#D73B3B", "#9F5804", "#E2E2E2", "#B1B1B1"],
                id: 6
            },
            {
                position: [-70, 1, 11],
                cameraPosition: [-9.43, 8.94, 16.67],
                color: ["#5E8BFF", "#49AD0B", "#EEBE40", "#D73B3B", "#9F5804", "#E2E2E2", "#B1B1B1"],
                id: 7
            },
            {
                position: [-95, 8, -46],
                cameraPosition: [-9.43, 8.94, 16.67],
                color: ["#5E8BFF", "#49AD0B", "#EEBE40", "#D73B3B", "#9F5804", "#E2E2E2", "#B1B1B1"],
                id: 8
            },
            {
                position: [105, -2, 14],
                cameraPosition: [-9.43, 8.94, 16.67],
                color: ["#5E8BFF", "#49AD0B", "#EEBE40", "#D73B3B", "#9F5804", "#E2E2E2", "#B1B1B1"],
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