import Header from "../Header";
import { useLocation } from "react-router-dom";
function MainLayout({ children }) {
  let location = useLocation();
  console.log("🚀 ~ MainLayout ~ location:", location);

  return (
    <>
      {location.pathname !== "/login" && <Header />}

      {children}
    </>
  );
}

export default MainLayout;
