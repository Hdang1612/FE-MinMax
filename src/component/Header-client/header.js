// import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSearch } from "react-icons/fa";
// import NavDropdown from "react-bootstrap/NavDropdown";
import "./style.css"
function HeaderClient() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary header-client">
        <Container>
          <Navbar.Brand href="#home" className="logo">MinMax</Navbar.Brand> 
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto mx-auto">
              <Nav.Link className="nav-item active-color" href="#features">Trang chủ</Nav.Link>
              <Nav.Link className="nav-item" href="#pricing">Sản phẩm</Nav.Link>
              <Nav.Link className="nav-item" href="#pricing">Khuyến mãi</Nav.Link>
              <Nav.Link className="nav-item" href="#pricing">Liên hệ</Nav.Link>
              <Nav.Link className="nav-item " href="#pricing"><FaSearch className="search-icon"/></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <button className="login-btn py-2">Đăng nhập</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default HeaderClient;
