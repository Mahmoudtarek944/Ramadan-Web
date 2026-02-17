import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navImg from "../../assets/Screenshot 2026-02-16 044507.png";
function NavBar() {
  return (
    <>
      <Navbar
        // expand="lg"
        className="fixed-top border-0 fs-5 fw-bolder"
        style={{
          backgroundColor: "rgba(15, 23, 42, 0.3)",
          backdropFilter: "blur(2px)",
          zIndex: 1050,
          borderBottomColor: "1px solid rgba(252, 211, 77, 0.2)",
        }}
      >
        <Container>
          <Navbar.Brand href="/" style={{ color: "#f7c948" }}>
            <img src={navImg} alt="navImg" className="rounded-circle navImg" />
          </Navbar.Brand>
          <Nav>
            <Nav.Link
              href="/"
              className="fw-bold navLink"
              style={{ color: "#f7c948" }}
            >
              الرئيسيه
            </Nav.Link>
            <Nav.Link
              href="/ward"
              className="fw-bold navLink"
              style={{ color: "#f7c948" }}
            >
              الورد اليومي
            </Nav.Link>
            <Nav.Link
              href="/azkar"
              className="fw-bold navLink"
              style={{ color: "#f7c948" }}
            >
              الاذكار
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
