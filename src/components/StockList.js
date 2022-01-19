import React, { useEffect } from "react";
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

import { getStock } from "../actions";

const StockList = ({ stock, isFetching, error, dispatch}) => {

  useEffect(() => {
    dispatch(getStock());
  }, []);

  return (
    <Container>
      <div className="card-container">
        <Card>
          <Card.Header>
            <form>
              <input
                name="ticker"
                placeholder="Enter Ticker Symbol"
              />
              <Button variant="outline-primary" size="sm">Search</Button>
            </form>
          </Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>Last updated: </Card.Text>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Open</th>
                  <th>High</th>
                  <th>Low</th>
                  <th>Close</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    stock: state.stock,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps)(StockList);