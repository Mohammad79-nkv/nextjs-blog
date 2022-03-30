import { Fragment } from "react/cjs/react.production.min";
import Header from "./../header/Header";

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
    </Fragment>
  );
};

export default MainLayout;
