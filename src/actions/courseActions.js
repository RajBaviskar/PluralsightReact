import * as types from './actionTypes';

export function createCourse(course) {
    // 1. Once user hits save this code gets hit
    //debugger;
    return {type:types.CREATE_COURSE, course};
}