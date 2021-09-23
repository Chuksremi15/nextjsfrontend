// HOC/withAuth.jsx
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const protectedRoute = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();

    const { token, isLoggedIn } = useSelector((state) => {
      const {
        user: { token },
        isLoggedIn,
      } = state.personalInformationData;

      return { token, isLoggedIn };
    });

    useEffect(async () => {
      if (!token) {
        Router.replace("/");
      }
    }, []);

    if (token) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default protectedRoute;
