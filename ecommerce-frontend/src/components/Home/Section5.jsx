import { Stack } from "react-bootstrap";
import * as React from "react";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import { ProductsContext } from "../../context/products";
import { useEffect, useState, useContext } from "react";

function Section5() {
  const [showProducts, setShowProducts] = useContext(ProductsContext);
  return (
    <section class="">
      <h1 className="text-center dark-blue ">Эрэлттэй бүтээгдэхүүн</h1>

      <TabsUnstyled defaultValue={0} className="">
        <TabsListUnstyled className="d-flex justify-content-center mb-4">
          <TabUnstyled className=" text-muted red bg-white border-0">
            ШИНЭ
          </TabUnstyled>
          <TabUnstyled className=" text-muted mx-1 red bg-white border-0">
            ШИЛДЭГ БОРЛУУЛАЛТТАЙ
          </TabUnstyled>
          <TabUnstyled className=" text-muted red bg-white border-0">
            ХЯМДРАЛТАЙ
          </TabUnstyled>
        </TabsListUnstyled>
        <TabPanelUnstyled value={0} className="section5-tab row  ">
          <div className="col col-lg-8 row mb-5">
            {showProducts.slice(0, 6).map((product) => (
              <div className="hstack col-6">
                <img className="card-img m-3" src={product.filepath} alt="" />
                <div>
                  <p className="dark-blue my-2 ">{product.name}</p>

                  <p className="text-secondary m-2">{product.price}₮</p>
                </div>
              </div>
            ))}
          </div>
          <div className="section5-div col-lg-4 h-100 rounded">
            {" "}
            <p className="text-white m-4 mb-0">Жаяа ХХК</p>
            <h1 className="text-white ms-4 mt-0">Air Jordan 1</h1>
            <button className="btn rounded-5 border border-4 border-white text-white fw-semibold hstack m-4 section3-button">
              Худалдан авах
              <h3 className=" d-inline">
                <i class="bi bi-arrow-right-short text-white "></i>
              </h3>
            </button>
          </div>
        </TabPanelUnstyled>
        <TabPanelUnstyled value={1} className="section5-tab row">
          <div className="col col-lg-8 row mb-5">
            {showProducts.slice(7, 13).map((product) => (
              <div className="hstack col-6">
                <img className="card-img m-3" src={product.filepath} alt="" />
                <div>
                  <p className="dark-blue my-2 ">{product.name}</p>

                  <p className="text-secondary m-2">{product.price}₮</p>
                </div>
              </div>
            ))}
          </div>
          <div className="section5-div col-lg-4 h-100 rounded">
            {" "}
            <p className="text-white m-4 mb-0">Жаяа ХХК</p>
            <h1 className="text-white ms-4 mt-0">Air Jordan 1</h1>
            <button className="btn rounded-5 border border-4 border-white text-white fw-semibold hstack m-4 section3-button">
              Худалдан авах
              <h3 className=" d-inline">
                <i class="bi bi-arrow-right-short text-white "></i>
              </h3>
            </button>
          </div>
        </TabPanelUnstyled>
        <TabPanelUnstyled value={2} className="section5-tab">
          <div className="section5-sale col h-100"></div>
        </TabPanelUnstyled>
      </TabsUnstyled>
    </section>
  );
}
export default Section5;
