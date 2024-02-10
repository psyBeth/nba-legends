import { Card, Container, Form } from "react-bootstrap";
import Row  from "react-bootstrap/Row";
import { data } from "../helpers/data";

import { Col } from "react-bootstrap/esm";
import PlayerCard from "./PlayerCard";
import { useState } from "react";

const CardContainer = () => {
    const [search,setSearch] = useState("")
    const handleChange = (e) => {
        setSearch(e.target.value)
        //! setter methods run asynchronously. We cannot instantly access the updated state within the function.
        // console.log(search, "intro");
    }
    console.log(search, "extro");

    const filteredData = data.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase().trim()));
  return (
    <>
    <Form.Control 
        placeholder = "Search a player"
        className="w-50 m-auto"
        onChange={handleChange}
        // onChange={(e) => console.log(e.target.value)}
        /> 
        <Container className="rounded-4 my-4 p-3 card-container">
            <Row className="justify-content-center g-3">
                {/* {data.map((player, i) => (
                <Col x1={3} lg={4} md={6} key={i}>
                    {/* <Card>
                        <Card.Img variant="top" src={player.img} />
                        <Card.Footer>
                            <Card.Title>{player.name}</Card.Title>
                        </Card.Footer>
                    </Card> */}
                    {/* <PlayerCard {...player} />
                </Col> */}
                {filteredData.map((player, i) => (
                    <Col xl={3} lg={4} md={6} key={i}>
                        <PlayerCard {...player} />
                    </Col>
                ))}
                
            </Row>
        </Container>
    </>
  );
};

export default CardContainer