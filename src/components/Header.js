import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <Nav className="header">
        <Nav.Item>
          <Nav.Link>
            <Link className="item" to="/">
              List
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link className="item" to="/details">
              Details
            </Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <hr />
    </>
  );
}
