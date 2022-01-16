import React, { Fragment } from 'react';
import { Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { AiFillTwitterCircle } from 'react-icons/ai';
import './Verify.css';

const Verify = () => {
    return (
        <Fragment>
          <h3>We need to verify who you are</h3>
          <h3>Paste your twitter handle</h3>
          <div className="text-center p-3">
            <Row>
              <Col></Col>
              <Col xs="6">
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><AiFillTwitterCircle className="text-info" width="1.5em" /></InputGroup.Text>
                  <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Col>
              <Col></Col>
            </Row>
          </div>
          <Button className="pt-1" href="/verify2" variant="outline-primary">Verify</Button>
        </Fragment>
    );
};

export default Verify;
