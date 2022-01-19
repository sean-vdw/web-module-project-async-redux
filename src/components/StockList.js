import React, { useState } from "react";
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

import { getTicker } from "../actions";

const StockList = ({ ticker, isFetching, error, dispatch}) => {
  const[value, setValue] = useState('');
  const date = new Date().toISOString().slice(0, 10);

  const handleClick = () => {
    dispatch(getTicker(value));
  }

  return (
    <Container>
      <div className="card-container">
        <Card>
          <Card.Header>
            <form>
              <input
                onChange={e => setValue(e.target.value)}
                name="ticker"
                type="text"
                placeholder="Enter Ticker Symbol"
              />
              <Button onClick={handleClick} variant="outline-primary" size="sm">Search</Button>
            </form>
          </Card.Header>
          <Card.Body>
            <Card.Title>Today's price data for: <span className="ticker-title">{value}</span></Card.Title>
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
                  <td>{date}</td>
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
    ticker: state.ticker,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps)(StockList);