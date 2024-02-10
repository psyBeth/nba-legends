import { Card } from "react-bootstrap"

const PlayerCard = ({img,name}) => {
  return (
    <Card className="rounded-2 m-auto player-card">
        <Card.Img variant="top" src={img} />
        <Card.Footer>
            <Card.Title>{name}</Card.Title>
        </Card.Footer>
    </Card> 
  )
}

export default PlayerCard