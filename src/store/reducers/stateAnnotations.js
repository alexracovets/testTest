import { createSlice } from '@reduxjs/toolkit';

const stateAnnotations = createSlice({
    name: 'stateAnnotations',
    initialState: {
        // Вивід анотацій
        annotation: [
            {
                position: [-100, 0, 58],
                cameraPosition: [-84, 32, 82],
                color: ["#5E8BFF", "#49AD0B", "#EEBE40", "#D73B3B", "#9F5804", "#E2E2E2", "#B1B1B1"],
                id: 1
            },
            {
                position: [100, 13.3, 12],
                cameraPosition: [98.7, 50, -24.7],
                color: ["#5E8BFF", "#49AD0B", "#EEBE40", "#D73B3B", "#9F5804", "#E2E2E2", "#B1B1B1"],
                id: 2
            },
            {
                position: [-52, -0.2, 46],
                cameraPosition: [-11, 32, 53],
                color: ["#5E8BFF"],
                id: 3
            },
            {
                position: [-85, 9.7, 43],
                cameraPosition: [-79, 38.7, 59.7],
                color: ["#5E8BFF", "#49AD0B", "#EEBE40", "#D73B3B", "#9F5804", "#E2E2E2", "#B1B1B1"],
                id: 4
            },
            {
                position: [-70, 10.2, 43],
                cameraPosition: [-52.8, 37.4, 55.8],
                color: ["#5E8BFF", "#49AD0B", "#EEBE40", "#D73B3B", "#9F5804", "#E2E2E2", "#B1B1B1"],
                id: 5
            },
            {
                position: [93, 13.3, 30],
                cameraPosition: [74.4, 41.8, 19.6],
                color: ["#5E8BFF", "#49AD0B", "#EEBE40", "#D73B3B", "#9F5804", "#E2E2E2", "#B1B1B1"],
                id: 6
            },
            {
                position: [-70, 0.7, 61],
                cameraPosition: [-49, 26.8, 77.5],
                color: ["#5E8BFF", "#49AD0B", "#EEBE40", "#D73B3B", "#9F5804", "#E2E2E2", "#B1B1B1"],
                id: 7
            },
            {
                position: [-95, 7.6, 4],
                cameraPosition: [-122.8, 42.7, 19.7],
                color: ["#5E8BFF", "#49AD0B", "#EEBE40", "#D73B3B", "#9F5804", "#E2E2E2", "#B1B1B1"],
                id: 8
            },
            {
                position: [105, -2.5, 64],
                cameraPosition: [97, 24.3, 95],
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