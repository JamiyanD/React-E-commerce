import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
export default function Toolbar() {
  return (
    <div
      style={{ backgroundColor: "#217AFF", color: "white" }}
      className="toolbar "
    >
      <Container className="d-flex ">
        <div className="hstack gap-3">
          <img
            src="https://preview.keenthemes.com/metronic8/demo30/assets/media/svg/misc/layer.svg"
            alt=""
          />
          <div>
            <h4 className="">Chartmix - Finance Team</h4>
            <span className=" fw-semibold">Power Elite Seller</span>
          </div>
        </div>
        <div className="ms-auto hstack gap-4">
          <div>
            <h4 className="">$23,467.92</h4>
            <span className=" fw-semibold">Avg. Monthly Sales</span>
          </div>
          <div>
            <h4 className="">$1,748.03</h4>
            <span className=" fw-semibold">Today Spending</span>
          </div>
          <div>
            <h4 className="">3.8%</h4>
            <span className=" fw-semibold">Overall Share</span>
          </div>
          <div>
            <h4 className="">-7.4%</h4>
            <span className=" fw-semibold">7 Days</span>
          </div>
        </div>
      </Container>
    </div>
  );
}
