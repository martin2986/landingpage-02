import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Suspense } from "react";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import AppRouter from "./router/AppRouter";
import Spinner from "./UI/Spinner";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Suspense fallback={<Spinner />}>
            <AppRouter />
          </Suspense>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
