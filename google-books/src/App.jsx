import styles from "./App.module.scss";
import MainPage from "./components/MainPage/MainPage";
import HeaderContainer from "./containers/HeaderContainer/HeaderContainer";

const App = () => {
  return (
    <div className={styles.App}>
      <HeaderContainer />
      <MainPage />
    </div>
  );
};

export default App;
