import React, { Component } from "react";
import { Badge, Col, ListGroup, Row } from "react-bootstrap";
import TotalBayar from "./TotalBayar";
export default class Hasil extends Component {
  render() {
    const { keranjangs } = this.props;
    return (
      <Col md={3} mt="2">
        <h4>
          <strong>Hasil</strong>
        </h4>
        <hr />
        <ListGroup variant="flush">
          {keranjangs &&
            keranjangs.map((keranjang) => (
              <ListGroup.Item key={keranjang.id}>
                <Row>
                  <Col xs={2}>
                    <h4>
                      <Badge pill variant="success">
                        {keranjang.jumlah}
                      </Badge>
                    </h4>
                  </Col>
                  <Col>
                    <h5>{keranjang.product.nama}</h5>
                    <p>Rp. {keranjang.product.harga}</p>
                  </Col>
                  <Col>
                    <strong className="float-right">
                      Rp. {keranjang.total_harga}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
        </ListGroup>
        <TotalBayar keranjangs={keranjangs} />
      </Col>
    );
  }
}
