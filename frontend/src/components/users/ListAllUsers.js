import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllUsersAction } from "../../redux/actions/usersActions";
import LoadingComponent from "../modal/LoadingComponent";
import UsersComponent from "./UsersComponent";

//Actios

const ListAllUsers = () => {
  const dispatch = useDispatch();
  const getAllUsersState = useSelector((state) => state.getAllUsers);
  const { users, loading, error, success: usersSuccess } = getAllUsersState;

  useEffect(() => {
    if (usersSuccess) {
    } else {
      dispatch(getAllUsersAction());
    }
  }, [dispatch, usersSuccess]);

  return (
    <div>
      {loading ? (
        <LoadingComponent />
      ) : error ? (
        <h1>Error</h1>
      ) : (
        <div>
          {users.map((user) => (
            <div>
              <UsersComponent
                key={user.uid}
                email={user.email}
                displayName={user.displayName}
                photoURL={user.photoURL}
              />
              <Link to={`/drawing/${user.uid}`}> Ver </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListAllUsers;
