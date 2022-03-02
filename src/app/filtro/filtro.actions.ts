import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todas' | 'completadas' | 'pendientes';


export const setFiltro = createAction(
    '[Filtro] Set Filtro',
    props<{ filtro: filtrosValidos }>()
);

