import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_COURSE:
            // state.push(action.course);
            // return state;
            // 2 . from courseACtion execution comes to reducer based on type 
            //debugger;
            return [...state,
            Object.assign({}, action.course)
        ];

        default:
            return state;
    }
}