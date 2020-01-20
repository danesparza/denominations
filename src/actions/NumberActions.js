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

	updateNumberRow(id, hundreds, twenties, fives, value) {
		AppDispatcher.dispatch({
			actionType: ActionTypes.UPDATE_ROW,
			id: id,
			hundreds: hundreds,
			twenties: twenties,
			fives: fives,
			value: value
		});
	}

}

export default new NumberActions();