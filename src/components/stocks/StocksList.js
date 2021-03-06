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
  Stack,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './stockslist.css';
import { filter } from '../../redux/stokes/stokes';
import fmpLogo from '../../img/fmp_log.jpg';

export default function StocksList() {
  let list = [];
  const dispatch = useDispatch();
  const store = useSelector((state) => state.stocksReducer);
  const { filteredArr, stocksList } = store;

  const [searchTerm, setSearchTerm] = useState();
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    dispatch(filter(e.target.value));
  };

  if (filteredArr.length === 0 && searchTerm !== '') {
    list = stocksList;
  } else {
    list = filteredArr;
  }

  return (
    <>
      <Stack gap={3} className="px-3">
        <Card>
          <Card.Header className="d-flex align-me">
            <img className="logo" src={fmpLogo} alt="" />
            <h2>Financial Modeling Prep</h2>
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                The best way you can predict the future is
                <strong> TO CREATE IT</strong>
                .
              </p>
              <footer className="blockquote-footer">
                Someone famous said that
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
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
              <Card border="secondary">
                <Card.Body>
                  <Card.Title>{stock.name}</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      Change :
                      {stock.change}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Price :
                      {stock.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Changes % :
                      {stock.changesPercentage}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <NavLink className="item" to={`/${stock.symbol}`}>
                        more..
                      </NavLink>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Stack>
    </>
  );
}
