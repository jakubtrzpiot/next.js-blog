import Navbar from './organisms/Navbar';
import Footer from './organisms/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="grow mt-20 pb-3">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
