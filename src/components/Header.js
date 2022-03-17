import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import leftarrow from '../img/left-arrow.svg';
import settings from '../img/settings.svg';
import mic from '../img/mic.svg';

import './header.css';

export default function Header() {
  const store = useSelector((state) => state.stocksReducer);
  const { header } = store;
  return (
    <>
      <Container>
        <Row className="align-middle">
          <Col className="align">
            <NavLink className="icon" to="/">
              <img src={leftarrow} alt="" />
            </NavLink>
          </Col>
          <Col>
            <div>
              <p className="header">{header}</p>
            </div>
          </Col>
          <Col className="align">
            <div className="icon d-flex justify-content-end">
              <img src={mic} alt="" />
              <img src={settings} alt="" />
            </div>
          </Col>
        </Row>
      </Container>

      <hr />
    </>
  );
}
