import { Card, Container, Form } from "react-bootstrap";
import Row  from "react-bootstrap/Row";
import { data } from "../helpers/data";
import { Col } from "react-bootstrap/esm";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  return (
    <>
    <Form.Control 
        placeholder = "Search a player"
        className="w-50 m-auto"/> 
        <Container className="rounded-4 my-4 p-3 card-container">
            <Row className="justify-content-center g-3">
                {data.map((player, i) => (
                // console.log(player)
                <Col x1={3} lg={4} md={6} key={i}>
                    {/* <Card>
                        <Card.Img variant="top" src={player.img} />
                        <Card.Footer>
                            <Card.Title>{player.name}</Card.Title>
                        </Card.Footer>
                    </Card> */}
                    <PlayerCard {...player} />
                </Col>
                ))}
            </Row>
        </Container>
    </>
  );
};

export default CardContainer