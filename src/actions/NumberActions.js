import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from './ActionTypes';

class NumberActions {

	//	Updates the number store with the current array of numbers
	receiveNumberRows(numbers) {
		AppDispatcher.dispatch({
		  actionType: ActionTypes.RECEIVE_ROWS,
		  numbers: numbers
		});
	}

	addNumberRow() {
		AppDispatcher.dispatch({
			actionType: ActionTypes.ADD_ROW
		});
	}

	removeNumberRow(id) {
		AppDispatcher.dispatch({
			actionType: ActionTypes.REMOVE_ROW,
			id: id
		});
	}

}

export default new NumberActions();