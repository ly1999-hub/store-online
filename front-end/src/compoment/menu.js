import {Nav} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/style/menu.css'

function  Menu() {

    return(
            <Nav>
                <Nav.Item>
                    <Nav.Link href={"/register"}> Register </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href={"/todolist"}> Todolist </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href={"/login"}> Login</Nav.Link>
                </Nav.Item>
                <Nav.Item className="icon-center">
                    <FontAwesomeIcon icon={faUser} />
                </Nav.Item>
                
            </Nav>
        )
}
export default Menu;