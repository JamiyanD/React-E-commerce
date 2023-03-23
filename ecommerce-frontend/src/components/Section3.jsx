import { Stack } from "react-bootstrap";
function Section3() {
  return (
    <div class="my-5 hstack gap-5 section3-div">
      <div className="section3-div1 col p-5 h-100">
        <h1 className="text-white m-4">
          Бэлэг<br></br> дурсгал
        </h1>
        <button className="btn rounded-5 border border-4 border-white text-white fw-semibold hstack m-4 section3-button">
          Худалдан авах
          <h3 className=" d-inline">
            <i class="bi bi-arrow-right-short text-white "></i>
          </h3>
        </button>
      </div>
      <div className="section3-div2 col p-3 h-100">
        <p className="text-white m-4 mb-0">Сурагчийн хэрэгсэл</p>
        <h1 className="text-white ms-4 mt-0">Дэвтэр</h1>
        <button className="btn rounded-5 border border-4 border-white text-white fw-semibold hstack m-4 section3-button">
          Худалдан авах
          <h3 className=" d-inline">
            <i class="bi bi-arrow-right-short text-white "></i>
          </h3>
        </button>
      </div>
      <div className="d-flex flex-column justify-content-between h-100 col ">
        <div className="section3-div3 ">
          {" "}
          <p className="text-white m-4 mb-0">Сурагчийн хэрэгсэл</p>
          <h1 className="text-white ms-4 mt-0">Дэвтэр</h1>
          <button className="btn rounded-5 border border-4 border-white text-white fw-semibold hstack m-4 section3-button">
            Худалдан авах
            <h3 className=" d-inline">
              <i class="bi bi-arrow-right-short text-white "></i>
            </h3>
          </button>
        </div>
        <div className="section3-div4 ">
          {" "}
          <p className="text-white m-4 mb-0">Сурагчийн хэрэгсэл</p>
          <h1 className="text-white ms-4 mt-0">Дэвтэр</h1>
          <button className="btn rounded-5 border border-4 border-white text-white fw-semibold hstack m-4 section3-button">
            Худалдан авах
            <h3 className=" d-inline">
              <i class="bi bi-arrow-right-short text-white "></i>
            </h3>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Section3;
