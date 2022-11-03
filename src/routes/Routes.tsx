import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import CardsView from "../pages/CardsView/CardsView";
import Home from "../pages/Home/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          {/* <AuthContextProvider> */}
          <Route path="/cards" element={<CardsView />} />
          <Route path="/" element={<Home />} />
          {/* </AuthContextProvider> */}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
