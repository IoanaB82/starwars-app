import React  from 'react';
import { themes } from './Themes';
import {empire} from './Themes';

export const initialState = { theme: themes.empire }

export const reducer = (state, action) => {
    switch(action.type) {
        case 'APPLY_THEME': return {
           state
    }
    
    default: throw new Error("this is not a theme");
}

}