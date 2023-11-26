import NavBar from "./NavBar";


const Layout = (props) => {

  return (
    <>
      <NavBar />
      <main className="container">{props.children}</main>
    </>
  );
};

export default Layout;