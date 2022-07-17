import { Navbar, Container, Nav } from "react-bootstrap"
const NavigationBar = () => {
    return (
        <div className="logo">
            <Navbar variant="dark">
                <Container>
                    <nav-Brand></nav-Brand>
                    <nav>
                        <Nav.Link href="#trending"></Nav.Link>
                    </nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavigationBar