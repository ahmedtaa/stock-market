/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  Card,
  ListGroup,
  Container,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import arrow from '../../img/left-arrow.svg';
import './stockslist.css';
import { filter } from '../../redux/stokes/stokes';

export default function MissionsList() {
  let list = [];
  const dispatch = useDispatch();
  const store = useSelector((state) => state.stocksReducer);
  const { filteredArr, stocksList } = store;

  const [searchTerm, setSearchTerm] = useState();
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    dispatch(filter(e.target.value));
  };
  if (filteredArr.length === 0 && searchTerm === '') {
    list = stocksList;
  } else {
    list = filteredArr;
  }
  return (
    <>
      <Container fluid>
        <InputGroup>
          <FormControl
            placeholder="Search Company"
            onChange={handleSearch}
            value={searchTerm}
          />
        </InputGroup>
      </Container>
      <Row xs={2} md={4} className="g-4">
        {list.map((stock) => (
          <Col key={stock.symbol}>
            <Card>
              <Card.Body>
                <Card.Title>
                  {stock.name}
                  <NavLink className="item" to={`/${stock.symbol}`}>
                    <img src={arrow} alt="" />
                  </NavLink>
                </Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>{stock.change}</ListGroup.Item>
                  <ListGroup.Item>{stock.price}</ListGroup.Item>
                  <ListGroup.Item>{stock.changesPercentage}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
