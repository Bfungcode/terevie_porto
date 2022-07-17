import { Container, Row, Col, Button } from "react-bootstrap"
import logoImage from "../assets/bg/icon1.jpeg"
const Intro = () => {
    return (
        <div className="intro">
            <Container className="text-white text-center d-flex justify-content-center align-items-center">
                <Row>
                    <Col>
                        <div>
                            <img className="logo-icon" src={logoImage}></img>
                        </div>
                        <div className="title">TEREVIE</div>
                        <div className="title">MOVIE FETCH API EXAMPLE</div>
                        <div className="introButton mt-4 text-center">
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Intro