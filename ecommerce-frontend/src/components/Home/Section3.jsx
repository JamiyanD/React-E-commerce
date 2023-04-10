import { Stack } from "react-bootstrap";
function Section3() {
  return (
    <div class=" hstack gap-5 section3-div ">
      <div className="section3-div1 col-4 p-3 h-100 rounded">
        <h1 className="text-white m-4">Nike Lebron XIX “Hardwood Classic”</h1>
        <button className="btn rounded-5 border border-4 border-white text-white fw-semibold hstack m-4 section3-button">
          Худалдан авах
          <h3 className=" d-inline">
            <i class="bi bi-arrow-right-short text-white "></i>
          </h3>
        </button>
      </div>
      <div className="section3-div2 col-4 p-3 h-100 rounded">
        <h1 className="text-white m-4 "> Air Force 1'07</h1>
        <button className="btn rounded-5 border border-4 border-white text-white fw-semibold hstack m-4 section3-button">
          Худалдан авах
          <h3 className=" d-inline">
            <i class="bi bi-arrow-right-short text-white "></i>
          </h3>
        </button>
      </div>
      <div className="d-flex flex-column justify-content-between h-100 col  ">
        <div className="section3-div3 rounded">
          {" "}
          <h1 className="text-white m-4 ">Jordan 1</h1>
          <button className="btn rounded-5 border border-4 border-white text-white fw-semibold hstack m-4 section3-button">
            Худалдан авах
            <h3 className=" d-inline">
              <i class="bi bi-arrow-right-short text-white "></i>
            </h3>
          </button>
        </div>
        <div className="section3-div4 rounded">
          {" "}
          <h1 className="text-white m-4 ">Air Flightposite</h1>
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
