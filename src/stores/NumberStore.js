import { Store } from "flux/utils";
import AppDispatcher from "../dispatcher/AppDispatcher";
import ActionTypes from "../actions/ActionTypes";
import uuidv4 from 'uuid/v4';

//  Use this to store numbers and communicate that the set of numbers has changed
class NumberStore extends Store {

  constructor() {
    super(AppDispatcher);

    //  The set of number rows:
    this.numbers = [];
  }

  //  Get the rows
  getRows() {
    return this.numbers;
  }

  __onDispatch(action) {
    
    switch (action.actionType) {
      case ActionTypes.RECEIVE_ROWS:
        
        this.numbers = action.numbers;

        this.__emitChange();
        break;      
      case ActionTypes.ADD_ROW:
      
        //  Add a new row:
        const uid = uuidv4();
        
        //  Get the current array -- add a row to the end of it.
        let newRows = this.numbers.concat({id: uid, hundreds: true, twenties: true, fives: true, value: 0})

        //  Set the new array collection
        this.numbers = newRows;    

        this.__emitChange();
        break;
      case ActionTypes.REMOVE_ROW:

        //  Filter out this id
        let updatedRows = this.numbers.filter(r => r.id !== action.id);

        //  Set the new array collection
        this.numbers = updatedRows;    

        this.__emitChange();
        break;
      case ActionTypes.UPDATE_ROW:

        //find the index of object from array that you want to update
        let objIndex = this.numbers.findIndex(obj => obj.id === action.id);

        // make new object of updated object.   
        let updatedObj = { ...this.numbers[objIndex], hundreds: action.hundreds, twenties: action.twenties, fives: action.fives, value: action.value};

        // make final new array of objects by combining updated object.
        let updatedNumbers = [
          ...this.numbers.slice(0, objIndex),
          updatedObj,
          ...this.numbers.slice(objIndex + 1),
        ];

        //  Update the contained array:
        this.numbers = updatedNumbers;
        this.__emitChange();
        
        break;
      default:
      // no op
    }
  }
}

export default new NumberStore();