
import { getUser } from "../../api/api";

//import { auth } from "../../firebase";


export const fetchUser = (list, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));

  auth.onAuthStateChanged((user) =>{

    if (user) {
      getUser().then(data => {
      
        dispatch(setUser(data.userInfo));
      });
    }

  })

};

export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});
