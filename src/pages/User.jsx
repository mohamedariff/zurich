import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "../components/Avatar";
import Layout from "../components/Layout";

import { fetchUsers } from "../redux/userSlice";

function User() {
  const dispatch = useDispatch();

  const { data, page, isLoading, totalPage, error } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (!totalPage) {
      dispatch(fetchUsers(page));
    }
    if (page < totalPage) {
      dispatch(fetchUsers(page + 1));
    }
  }, [dispatch, page, totalPage]);

  const filteredName = data?.filter(
    (user) => user.first_name.startsWith("G") || user.last_name.startsWith("W")
  );

  if (error) return <h4 style={{ color: "red" }}>{error}</h4>;

  return (
    <Layout>
      <h1>Protected Users Page</h1>

      {isLoading ? (
        <h4>Loading..</h4>
      ) : (
        filteredName.map((user, index) => {
          return (
            <Avatar
              key={`${user.id}_${index}`}
              style={{ marginRight: 10 }}
              height={45}
              width={45}
              {...user}
            />
          );
        })
      )}
    </Layout>
  );
}

export default User;
