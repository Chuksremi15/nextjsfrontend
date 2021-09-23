import "../styles/globals.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
// import { Provider } from "next-auth/client";
import NextNProgress from "nextjs-progressbar";

// Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../redux/store";
import { useLayoutEffect } from "react";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../redux/actions/auth";
import { Alert } from "../components/Layout/Alert";

function MyApp({ Component, pageProps }) {
  // const { token, refreshToken } = useSelector((store) => {
  //   const {
  //     success: { login: loginSuccess },
  //     errors: { login: loginError },
  //   } = store.ajaxStatuses;

  //   const { loginLoading } = store.loadingIndicator;
  //   const {
  //     user: { token, refreshToken },
  //   } = store.personalInformationData;

  //   return {
  //     loginSuccess,
  //     loginError,
  //     loginLoading,
  //     token,
  //     refreshToken,
  //   };
  // });

  const token = "";

  useLayoutEffect(() => {
    if (token) {
      const exp = jwtDecode(token).exp;
      const tokenIsValid = !(Date.now() >= exp * 1000);
      if (tokenIsValid) {
      } else {
        dispatch();
      }
    }
  }, []);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NextNProgress height={6} color="#00a69c" />
          <Alert />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
