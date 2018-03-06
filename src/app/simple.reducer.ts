import { Action, ActionReducer } from '@ngrx/store';

export function simpleReducer(state: string = 'Hello World', action: Action) {
    console.log(action.type, state);

    switch (action.type) {
        case 'SPANISH':
            return 'Hola';
        
        case 'FRENCH':
            return 'bonjour';
        
        default:
            return state;    
    }
}

