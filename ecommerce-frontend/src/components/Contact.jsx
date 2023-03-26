import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import GoogleMapReact from "google-map-react";

export default function Contact() {
  const defaultProps = {
    center: {
      lat: 37.7749,
      lng: -122.4194,
    },
    zoom: 11,
  };
  return (
    <div className="container ">
      <div className="d-flex gap-5">
        <div className="border-end w-50 ">
          <h1 className="dark-blue">Холбоо барих</h1>
          <p className="dark-blue fw-semibold">
            {" "}
            <FontAwesomeIcon
              icon={faPhone}
              size="xl"
              style={{ color: "#28d25b" }}
              className="me-2"
            />
            (+976)-7575-8873
          </p>
          <p className="text-secondary">
            <FontAwesomeIcon
              className="me-2"
              icon={faLocationDot}
              size="xl"
              style={{ color: "#dd3636" }}
            />
            БГД 29-р хороо Хархорин захын зүүн талд хуучнаар (СХД 1-р хороолол
            19-ны автобусны буудлын урд талд “Хар хорин” хороолол)
          </p>
          <p className="text-secondary">
            <FontAwesomeIcon
              icon={faClock}
              size="xl"
              style={{ color: "#949494" }}
              className="me-2"
            />
            Даваа-Баасан: 9:00-19:00
          </p>
          <p className="text-secondary">
            {" "}
            <FontAwesomeIcon
              icon={faClock}
              size="xl"
              style={{ color: "#949494" }}
              className="me-2"
            />
            Бямба-Ням: 10:00-19:00
          </p>
          <p className="text-secondary">duurenjargaljamyan@gmail.com</p>
          <div className="d-flex align-items-center gap-2">
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ color: "#0091ff" }}
              size="xl"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              size="xl"
              style={{ color: "#00b3ff" }}
            />
          </div>
        </div>
        <div className="w-50">
          <h1 className="dark-blue">Санал сэтгэгдэл</h1>
          <p className="text-secondary fs-4">
            Танд санал хүсэлт байвал бидэнд илгээгээрэй.
          </p>
          <div className="d-flex">
            <input
              type=""
              name=""
              class="form-control rounded-3 w-50 me-4 p-3"
              placeholder="Таны нэр"
            />
            <input
              type=""
              name=""
              class="form-control rounded-3 w-50 p-3"
              placeholder="Имэйл хаяг"
            />
          </div>
          <input
            type=""
            name=""
            class="form-control rounded-3 w-100 my-4 p-3"
            placeholder="Агуулга"
          />
          <textarea
            placeholder="Таны сэтгэгдэл"
            className="form-control rounded-3 w-100 p-3"
            rows="4"
          />
          <button className="border-0 rounded-4 btn pink-bg text-white btn-dark fw-semibold mt-4">
            Илгээх <ArrowForwardIcon />
          </button>
        </div>
      </div>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={37.7749} lng={-122.4194} text="My Marker" />
        </GoogleMapReact>
      </div>
    </div>
  );
}
const AnyReactComponent = ({ text }) => <div>{text}</div>;
