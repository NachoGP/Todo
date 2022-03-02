import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor( private store: Store<AppState> ) {
    this.txtInput = new FormControl('', Validators.required );
  }

  ngOnInit(): void {
  }

  agregar() {
    //comprueba que si no se escribe no haga nada:
    if ( this.txtInput.invalid ) { return; }
    //Lllammos al Store para nuestra tarea
    this.store.dispatch( actions.crear({ texto: this.txtInput.value }) );
      //Limpiamos el formulario
    this.txtInput.reset();
  }

}
