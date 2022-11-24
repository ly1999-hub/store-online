import Container from 'react-bootstrap/Container';
import {Component, React} from "react";
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Nav} from "react-bootstrap";


import axios from "axios";

let endpoint = "http://localhost:8080";

class TagLists extends Component{
    constructor(props){
        super(props);
        this.state={
            attires:[]
        }
    }
    componentDidMount() {
        this.getAttire();
    }

    getAttire=()=>{
        axios.get(endpoint+"/attire").then((res)=>{
            this.setState({
                attires:res.data.map(attire => {
                    return(
                        <>
                            <Col sm={2}>
                                <Nav.Link href={"attire/"+attire._id}>
                                    <Card>
                                        <Card.Img src={attire.img} />
                                        <Card.Body>
                                            <Card.Title>{attire.name}</Card.Title>
                                            <Card.Text>{attire.description}</Card.Text>
                                        </Card.Body>
                                        <Button>buy</Button>
                                    </Card>
                                </Nav.Link>
                            </Col>
                        </> 
                    )
                })
            })
        })
    }
    render(){
        return(
            <Container>
                <div style={{display:"flex"}}>{this.state.attires}</div>
                <h1>attire</h1>
            </Container>
        )
    }
}

export default TagLists;