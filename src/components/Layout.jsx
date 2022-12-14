import Navbar from './organisms/Navbar';
import Footer from './organisms/Footer';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className="grow mt-20 pb-6">{children}</main>
    <Footer />
  </>
);

export default Layout;
