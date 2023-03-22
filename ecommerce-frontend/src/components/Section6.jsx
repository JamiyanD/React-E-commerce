import { Stack } from "react-bootstrap";
import * as React from "react";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";

function Section6() {
  return (
    <section class="my-5">
      <h1 className="text-center dark-blue">Эрэлттэй бүтээгдэхүүн</h1>

      <TabsUnstyled defaultValue={0}>
        <TabsListUnstyled className="d-flex justify-content-center my-5">
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
                src="https://img.freepik.com/premium-photo/3d-rendering-soccer-ball-isolated-white-background_47726-9818.jpg?w=826"
                alt=""
              />
              <p>
                ТЭМДЭГЛЭЛИЙН ДЭВТЭР 117Х79мм <br />
                ₮2,000
              </p>
            </div>
            <div className="hstack">
              <img
                className="card-img m-3"
                src="https://img.freepik.com/premium-photo/3d-rendering-soccer-ball-isolated-white-background_47726-9818.jpg?w=826"
                alt=""
              />
              <p>
                ТЭМДЭГЛЭЛИЙН ДЭВТЭР 117Х79мм <br />
                ₮2,000
              </p>
            </div>
            <div className="hstack">
              <img
                className="card-img m-3"
                src="https://img.freepik.com/premium-photo/3d-rendering-soccer-ball-isolated-white-background_47726-9818.jpg?w=826"
                alt=""
              />
              <p>
                ТЭМДЭГЛЭЛИЙН ДЭВТЭР 117Х79мм <br />
                ₮2,000
              </p>
            </div>
          </div>
          <div className="col">
            <div className="hstack">
              <img
                className="card-img m-3"
                src="https://img.freepik.com/premium-photo/3d-rendering-soccer-ball-isolated-white-background_47726-9818.jpg?w=826"
                alt=""
              />
              <p>
                ТЭМДЭГЛЭЛИЙН ДЭВТЭР 117Х79мм <br />
                ₮2,000
              </p>
            </div>
            <div className="hstack">
              <img
                className="card-img m-3"
                src="https://img.freepik.com/premium-photo/3d-rendering-soccer-ball-isolated-white-background_47726-9818.jpg?w=826"
                alt=""
              />
              <p>
                ТЭМДЭГЛЭЛИЙН ДЭВТЭР 117Х79мм <br />
                ₮2,000
              </p>
            </div>
            <div className="hstack">
              <img
                className="card-img m-3"
                src="https://img.freepik.com/premium-photo/3d-rendering-soccer-ball-isolated-white-background_47726-9818.jpg?w=826"
                alt=""
              />
              <p>
                ТЭМДЭГЛЭЛИЙН ДЭВТЭР 117Х79мм <br />
                ₮2,000
              </p>
            </div>
          </div>

          <div className="section5-div col h-100">
            {" "}
            <p className="text-white m-4 mb-0">Киткат ХХК</p>
            <h1 className="text-white ms-4 mt-0">
              Онлайн
              <br /> дэлгүүр
            </h1>
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
                src="https://img.freepik.com/free-photo/shoes_1203-8153.jpg?w=1380&t=st=1679496573~exp=1679497173~hmac=6ab86931f35b6506dd844fcf08f30404e5e25832975d2762c33cece0eb69f84d"
                alt=""
              />
              <p>
                ТЭМДЭГЛЭЛИЙН ДЭВТЭР 117Х79мм <br />
                ₮2,000
              </p>
            </div>
            <div className="hstack">
              <img
                className="card-img m-3"
                src="https://img.freepik.com/free-photo/shoes_1203-8153.jpg?w=1380&t=st=1679496573~exp=1679497173~hmac=6ab86931f35b6506dd844fcf08f30404e5e25832975d2762c33cece0eb69f84d"
                alt=""
              />
              <p>
                ТЭМДЭГЛЭЛИЙН ДЭВТЭР 117Х79мм <br />
                ₮2,000
              </p>
            </div>
            <div className="hstack">
              <img
                className="card-img m-3"
                src="https://img.freepik.com/free-photo/shoes_1203-8153.jpg?w=1380&t=st=1679496573~exp=1679497173~hmac=6ab86931f35b6506dd844fcf08f30404e5e25832975d2762c33cece0eb69f84d"
                alt=""
              />
              <p>
                ТЭМДЭГЛЭЛИЙН ДЭВТЭР 117Х79мм <br />
                ₮2,000
              </p>
            </div>
          </div>
          <div className="col">
            <div className="hstack">
              <img
                className="card-img m-3"
                src="https://img.freepik.com/free-photo/shoes_1203-8153.jpg?w=1380&t=st=1679496573~exp=1679497173~hmac=6ab86931f35b6506dd844fcf08f30404e5e25832975d2762c33cece0eb69f84d"
                alt=""
              />
              <p>
                ТЭМДЭГЛЭЛИЙН ДЭВТЭР 117Х79мм <br />
                ₮2,000
              </p>
            </div>
            <div className="hstack">
              <img
                className="card-img m-3"
                src="https://img.freepik.com/free-photo/shoes_1203-8153.jpg?w=1380&t=st=1679496573~exp=1679497173~hmac=6ab86931f35b6506dd844fcf08f30404e5e25832975d2762c33cece0eb69f84d"
                alt=""
              />
              <p>
                ТЭМДЭГЛЭЛИЙН ДЭВТЭР 117Х79мм <br />
                ₮2,000
              </p>
            </div>
            <div className="hstack">
              <img
                className="card-img m-3"
                src="https://img.freepik.com/free-photo/shoes_1203-8153.jpg?w=1380&t=st=1679496573~exp=1679497173~hmac=6ab86931f35b6506dd844fcf08f30404e5e25832975d2762c33cece0eb69f84d"
                alt=""
              />
              <p>
                ТЭМДЭГЛЭЛИЙН ДЭВТЭР 117Х79мм <br />
                ₮2,000
              </p>
            </div>
          </div>

          <div className="section5-div col h-100">
            {" "}
            <p className="text-white m-4 mb-0">Киткат ХХК</p>
            <h1 className="text-white ms-4 mt-0">
              Онлайн
              <br /> дэлгүүр
            </h1>
            <button className="btn rounded-5 border border-4 border-white text-white fw-semibold hstack m-4 section3-button">
              Худалдан авах
              <h3 className=" d-inline">
                <i class="bi bi-arrow-right-short text-white "></i>
              </h3>
            </button>
          </div>
        </TabPanelUnstyled>
        <TabPanelUnstyled value={2} className="section5-tab">
          <div className="section5-div col h-100">
            {" "}
            <p className="text-white m-4 mb-0">Киткат ХХК</p>
            <h1 className="text-white ms-4 mt-0">
              Онлайн
              <br /> дэлгүүр
            </h1>
            <button className="btn rounded-5 border border-4 border-white text-white fw-semibold hstack m-4 section3-button">
              Худалдан авах
              <h3 className=" d-inline">
                <i class="bi bi-arrow-right-short text-white "></i>
              </h3>
            </button>
          </div>
        </TabPanelUnstyled>
      </TabsUnstyled>
    </section>
  );
}
export default Section6;
