/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Card,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { fetchDetail } from '../../redux/stokes/stokes';
import './details.css';

export default function Details() {
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetail(id));
  }, [params]);

  const store = useSelector((state) => state.stocksReducer);
  const { stockDetails } = store;

  if (stockDetails.length > 0) {
    const {
      symbol,
      image,
      companyName,
      description,
      exchangeShortName,
      fullTimeEmployees,
      website,
    } = stockDetails[0];

    return (
      <>
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Img
                  className="w-50 .d-inline-flex align-self-center"
                  variant="top"
                  src={image}
                />
                <Card.Body>
                  <Card.Title>{companyName}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    <span>Exchange Name : </span>
                    {exchangeShortName}
                  </ListGroupItem>
                  <ListGroupItem>
                    <span> Number Of Emplyees : </span>
                    {fullTimeEmployees}
                  </ListGroupItem>
                  <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href={website}>website</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }

  return <>loading.....</>;
}
