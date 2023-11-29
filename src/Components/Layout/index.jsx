import NavBar from "../NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main className="flex flex-col items-center mt-5">{children}</main>
    </div>
  );
};

export default Layout;
