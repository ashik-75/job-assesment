import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function RootLayout() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-144px)] max-w-7xl mx-auto p-5">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
