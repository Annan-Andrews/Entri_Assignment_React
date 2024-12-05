import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Product(props){

  return(

    <Card>
      <Card.Img variant="top" src={props.productData.image} />
      <Card.Body>
        <Link to={`/product-details/${props.productData.id}`}>
          <Card.Title>{props.productData.title}</Card.Title>
        </Link>
        <Card.Text>${props.productData.price}</Card.Text>
        <Card.Text>{props.productData.description}</Card.Text>
        <Button variant="primary">Buy</Button>
        <Button variant="warning">Add to Cart</Button>
      </Card.Body>
    </Card>

  )
}

export default Product