import Navbar from "./Navbar";

const Layout = ({ children }) => {
      return (
        <>
            <Navbar />
            <div className="content" style={{margin:'10px 20px'}}>
                {children}
            </div>
        </>
    );
}

export default Layout;