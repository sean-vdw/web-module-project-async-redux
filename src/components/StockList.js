import React from "react";
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

import { getTicker } from "../actions";

const StockList = ({ ticker, isFetching, error, dispatch}) => {

  const handleClick = () => {
    dispatch(getTicker());
  }

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
              <Button onClick={handleClick} variant="outline-primary" size="sm">Search</Button>
            </form>
          </Card.Header>
          <Card.Body>
            <Card.Title>Ticker: </Card.Title>
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
                  <td>2022-01-19</td>
                  <td>{ticker['1. open']}</td>
                  <td>{ticker['2. high']}</td>
                  <td>{ticker['3. low']}</td>
                  <td>{ticker['4. close']}</td>
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
    metaData: state.metaData,
    ticker: state.ticker,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps)(StockList);