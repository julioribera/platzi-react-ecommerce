import NavBar from "../NavBar";

const Layout = ({ children }) => {
  return (
    <div className="max-w-5xl mx-auto">
      <NavBar />
      <main className="px-8 py-2">{children}</main>
    </div>
  );
};

export default Layout;
