import constants from "../constants";
let initialState = { userData: {} };
export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case constants.LOGIN_SUCCESS:
			return {
				...state,
				userData: action.payload,
			};
		default:
			return state;
	}
};
