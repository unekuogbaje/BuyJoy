import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { 
  Row, 
  Col, 
  Image, 
  ListGroup, 
  Card, 
  Button,
  Form 
} from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';

const ProductScreen = () => {
  const { id: productId } = useParams();
  const product = products.find((p) => p._id === productId);

  return (
    <Fragment>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid/>
        </Col>

        <Col md={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h1>{product.name}</h1>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
        
        </Col>
      </Row>
    </Fragment>
  )
}

export default ProductScreen;