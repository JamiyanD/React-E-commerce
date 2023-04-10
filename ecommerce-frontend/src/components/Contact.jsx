import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import GoogleMapReact from "google-map-react";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Contact() {
  const defaultProps = {
    center: {
      lat: 37.7749,
      lng: -122.4194,
    },
    zoom: 11,
  };

  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  return (
    <div className="container ">
      <div className="d-flex gap-5 my-5">
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
            (+976)-99882655
          </p>
          <p className="text-secondary">
            <FontAwesomeIcon
              className="me-2"
              icon={faLocationDot}
              size="xl"
              style={{ color: "#dd3636" }}
            />
            БГД 17-р хороо Максмол худалдааны төвийн баруун талд өөрийн оффис
            байр.
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
      <div>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10696.455222449256!2d106.92076028772159!3d47.914835371338675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d969250b4dca6f5%3A0x458d53bf252ffc5c!2sPeace%20Tower%2C%20Ulaanbaatar!5e0!3m2!1sen!2smn!4v1633434386176!5m2!1sen!2smn"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          className=""
        ></iframe> */}
        <MapContainer
          center={[51.505, -0.09]}
          zoom={10}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* {restaurants.map((map) => {
          console.log(map.address.coord[0]);
          return ( */}
          <Marker position={[-73.98241999999999, 40.579505]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          {/* );
        })} */}
        </MapContainer>
      </div>
    </div>
  );
}
