import { createSlice } from '@reduxjs/toolkit';

const stateAnnotations = createSlice({
    name: 'stateAnnotations',
    initialState: {

        // ID Вимкнений кнопок для анотацій
        disabledAnnotation: [],

        //Прив'язка кнопок до анотацій, по номеру анотацій та масивом прив'язаних кнопок
        annotationsButtons: {
            1: [3],
            2: [2, 4, 5, 7],
            3: [6],
            4: [7],
            5: [6],
            6: [2, 4, 5, 7],
            7: [6],
            8: [2, 4, 5, 7],
            9: [1],
        },

        // Вивід анотацій
        annotation: [
            {
                position: [-20, 0, 9],
                cameraPosition: [-9.43, 8.94, 16.67],
                color: ["#5E8BFF"],
                content: 'annotation.first',
                src: './img/pop_annotation/1.jpg',
                music: '1',
                panorama: true,
                id: 1
            },
            {
                position: [-10, 0, 9],
                cameraPosition: [-9.43, 8.94, 16.67],
                color: ["#49AD0B"],
                content: 'annotation.first',
                src: './img/pop_annotation/1.jpg',
                music: '1',
                panorama: true,
                id: 2
            },
            {
                position: [0, 0, 9],
                cameraPosition: [-9.43, 8.94, 16.67],
                color: ["#EEBE40"],
                content: 'annotation.first',
                src: './img/pop_annotation/1.jpg',
                music: '1',
                panorama: true,
                id: 3
            },
            {
                position: [10, 0, 9],
                cameraPosition: [-9.43, 8.94, 16.67],
                color: ["#D73B3B"],
                content: 'annotation.first',
                src: './img/pop_annotation/1.jpg',
                music: '1',
                panorama: true,
                id: 4
            },
            {
                position: [20, 0, 9],
                cameraPosition: [-9.43, 8.94, 16.67],
                color: ["#9F5804"],
                content: 'annotation.first',
                src: './img/pop_annotation/1.jpg',
                music: '1',
                panorama: true,
                id: 5
            },
            {
                position: [30, 0, 9],
                cameraPosition: [-9.43, 8.94, 16.67],
                color: ["#E2E2E2"],
                content: 'annotation.first',
                src: './img/pop_annotation/1.jpg',
                music: '1',
                panorama: true,
                id: 6
            },
            {
                position: [40, 0, 9],
                cameraPosition: [-9.43, 8.94, 16.67],
                color: ["#B1B1B1"],
                content: 'annotation.first',
                src: './img/pop_annotation/1.jpg',
                music: '1',
                panorama: true,
                id: 7
            }
        ]
    },
    reducers: {
        changeActiveColors: (state, action) => {
            const { color, annotation } = action.payload;
            annotation.forEach(element => {
                const anno = state.annotation.find(item => item.id === element);
                if (anno) {
                    if (anno.color.includes(color)) {
                        anno.color = anno.color.filter(exist => exist !== color)
                    } else {
                        anno.color.push(color)
                    }
                }

            });
        },
    }
});

export const { changeActiveColors } = stateAnnotations.actions;

export default stateAnnotations.reducer;