import { useAuthContext } from "./useAuthContext";
import { useBlogsContext } from "./useBlogsContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: blogsDispatch } = useBlogsContext();

  const logout = () => {
    //remove user from the storage
    localStorage.removeItem("user");

    //dispatch logout action
    dispatch({ type: "LOGOUT" });
    blogsDispatch({ type: "SET_WORKOUTS", payload: null });
  };

  return { logout };
};
