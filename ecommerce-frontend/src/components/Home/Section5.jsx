import { Stack } from "react-bootstrap";
import * as React from "react";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";

function Section5() {
  return (
    <section class="">
      <h1 className="text-center dark-blue ">Эрэлттэй бүтээгдэхүүн</h1>

      <TabsUnstyled defaultValue={0} className="">
        <TabsListUnstyled className="d-flex justify-content-center mb-4">
          <TabUnstyled className=" text-muted red bg-white border-0">
            ШИНЭ
          </TabUnstyled>
          <TabUnstyled className=" text-muted mx-5 red bg-white border-0">
            ШИЛДЭГ БОРЛУУЛАЛТТАЙ
          </TabUnstyled>
          <TabUnstyled className=" text-muted red bg-white border-0">
            ХЯМДРАЛТАЙ
          </TabUnstyled>
        </TabsListUnstyled>
        <TabPanelUnstyled value={0} className="section5-tab hstack gap-5 ">
          <div className="col">
            <div className="hstack ">
              <img
                className="card-img m-3"
                src="https://res.cloudinary.com/dq1ncokzr/image/upload/v1681111792/s4fpedcowsjgfo816hf4.jpg"
                alt=""
              />
              <div>
                <p className="dark-blue my-2 ">Jordan Luka 1</p>

                <p className="text-secondary m-2">539,900₮</p>
              </div>
            </div>
            <div className="hstack">
              <img
                className="card-img m-3"
                src="https://res.cloudinary.com/dq1ncokzr/image/upload/v1681125762/zkdbgxcv8yyxiasv2zef.jpg"
                alt=""
              />
              <div>
                <p className="dark-blue my-2 ">Air Max Excee</p>

                <p className="text-secondary m-2">339,900₮</p>
              </div>
            </div>
            <div className="hstack">
              <img
                className="card-img m-3"
                src="https://res.cloudinary.com/dq1ncokzr/image/upload/v1681125860/wnl8j7dt9o8dziotf28s.jpg"
                alt=""
              />
              <div>
                <p className="dark-blue my-2 ">Air Max 90</p>

                <p className="text-secondary m-2">429,900₮</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="hstack">
              <img
                className="card-img m-3"
                src="https://res.cloudinary.com/dq1ncokzr/image/upload/v1681125940/kldhzvixrhmrfkae2ldj.jpg"
                alt=""
              />
              <div>
                <p className="dark-blue my-2 ">Nike Dunk Low (GS)</p>

                <p className="text-secondary m-2">239,900₮</p>
              </div>
            </div>
            <div className="hstack">
              <img
                className="card-img m-3"
                src="https://res.cloudinary.com/dq1ncokzr/image/upload/v1681126172/fega29b1lc3bq2mcpnmf.jpg"
                alt=""
              />
              <div>
                <p className="dark-blue my-2 ">Kyrie Low 5</p>

                <p className="text-secondary m-2">339,900₮</p>
              </div>
            </div>
            <div className="hstack">
              <img
                className="card-img m-3"
                src="https://res.cloudinary.com/dq1ncokzr/image/upload/v1681126045/fmtlep192l7oqv1pxwqt.jpg"
                alt=""
              />
              <div>
                <p className="dark-blue my-2 ">Air Force 1</p>

                <p className="text-secondary m-2">439,900₮ </p>
              </div>
            </div>
          </div>

          <div className="section5-div col h-100">
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
        <TabPanelUnstyled value={1} className="section5-tab hstack gap-5">
          <div className="col">
            <div className="hstack ">
              <img
                className="card-img m-3"
                src="https://res.cloudinary.com/dq1ncokzr/image/upload/v1681111792/s4fpedcowsjgfo816hf4.jpg"
                alt=""
              />
              <div>
                <p className="dark-blue my-2 ">Jordan Luka 1</p>

                <p className="text-secondary m-2">539,900₮</p>
              </div>
            </div>
            <div className="hstack">
              <img
                className="card-img m-3"
                src="https://res.cloudinary.com/dq1ncokzr/image/upload/v1681125762/zkdbgxcv8yyxiasv2zef.jpg"
                alt=""
              />
              <div>
                <p className="dark-blue my-2 ">Air Max Excee</p>

                <p className="text-secondary m-2">339,900₮</p>
              </div>
            </div>
            <div className="hstack">
              <img
                className="card-img m-3"
                src="https://res.cloudinary.com/dq1ncokzr/image/upload/v1681125860/wnl8j7dt9o8dziotf28s.jpg"
                alt=""
              />
              <div>
                <p className="dark-blue my-2 ">Air Max 90</p>

                <p className="text-secondary m-2">429,900₮</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="hstack">
              <img
                className="card-img m-3"
                src="https://res.cloudinary.com/dq1ncokzr/image/upload/v1681125940/kldhzvixrhmrfkae2ldj.jpg"
                alt=""
              />
              <div>
                <p className="dark-blue my-2 ">Nike Dunk Low (GS)</p>

                <p className="text-secondary m-2">239,900₮</p>
              </div>
            </div>
            <div className="hstack">
              <img
                className="card-img m-3"
                src="https://res.cloudinary.com/dq1ncokzr/image/upload/v1681126172/fega29b1lc3bq2mcpnmf.jpg"
                alt=""
              />
              <div>
                <p className="dark-blue my-2 ">Kyrie Low 5</p>

                <p className="text-secondary m-2">339,900₮</p>
              </div>
            </div>
            <div className="hstack">
              <img
                className="card-img m-3"
                src="https://res.cloudinary.com/dq1ncokzr/image/upload/v1681126413/pcotr1nkn7hbiyxu9en1.jpg"
                alt=""
              />
              <div>
                <p className="dark-blue my-2 ">Nike Dunk high</p>

                <p className="text-secondary m-2">339,900₮ </p>
              </div>
            </div>
          </div>

          <div className="section5-div col h-100 rounded">
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
