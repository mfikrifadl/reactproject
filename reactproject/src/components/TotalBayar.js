import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

export default class TotalBayar extends Component {
  render() {
    const totalBayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);
    return (
      <div className="fixed-bottom">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-4">
            <h4>
              Total Harga :{" "}
              <strong className="float-right mr-2">
                Rp. {numberWithCommas(totalBayar)}
              </strong>
            </h4>
            <Button
              variant="primary"
              block
              className="mb-2 mt-2 mr-2 mt-4"
              size="lg"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
              <strong>Bayar</strong>
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
