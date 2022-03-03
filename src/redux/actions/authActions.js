import constants from '../constants';

export const login = (dispatch, userDetails) => {
	dispatch({
		type: constants.LOGIN_SUCCESS,
		payload: userDetails,
	});
};

export const signup = (dispatch, userDetails) => {
	dispatch({
		type: constants.REGISTER_SUCCESS,
		payload: userDetails,
	});
};

export const loginFail = (dispatch, error) => {
	dispatch({
		type: constants.LOGIN_FAIL,
		payload: error,
	});
};

export const registerFail = (dispatch, error) => {
	dispatch({
		type: constants.REGISTER_FAIL,
		payload: error,
	});
};

export const logout = (dispatch) => {
	dispatch({
		type: constants.LOGOUT,
	});
};
