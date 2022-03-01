import constants from "../constants";
import { useDispatch } from "react-redux";
export const login = (userDetails) => {
	const dispatch = useDispatch();
	dispatch({
		type: constants.LOGIN_SUCCESS,
		payload: userDetails,
	});
};
