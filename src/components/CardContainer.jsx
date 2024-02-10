import { Card, Container, Form } from "react-bootstrap";
import Row  from "react-bootstrap/Row";
import { data } from "../helpers/data"

const CardContainer = () => {
  return (
    <>
    <Form.Control 
        placeholder = "Search a player"
        className="w-50 m-auto"/> 
    <Container>
        <Row>
            {data.map((player, i) => 
            // console.log(player)
            <Card>
                <Card.Img variant="top" src={player.img} />
                <Card.Footer>
                    <Card.Title>{player.name}</Card.Title>
                </Card.Footer>
            </Card>
            )}
        </Row>
    </Container>
    </>
  )
}

export default CardContainer