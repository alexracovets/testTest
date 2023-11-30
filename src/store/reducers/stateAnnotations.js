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
                position: [50, 0, 9],
                cameraPosition: [-9.43, 8.94, 16.67],
                color: ["#8f680e"],
                content: 'annotation.first',
                src: './img/pop_annotation/1.jpg',
                music: '1',
                panorama: true,
                id: 1
            },
            {
                position: [-7.4, 0, 7.5],
                cameraPosition: [-5.24, 5.72, 15.05],
                color: ["#0d276b", "#0e3d02", "#8f680e", "#940807", "#2C1902", "#4a4848"],
                content: 'annotation.second',
                src: './img/pop_annotation/2.jpg',
                music: '2',
                panorama: true,
                id: 2
            },
        ]
    },
    reducers: {

    }
});

// export const { } = stateAnnotations.actions;

export default stateAnnotations.reducer;