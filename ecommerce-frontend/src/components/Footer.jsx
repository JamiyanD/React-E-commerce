import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer class="dark-blue-bg my-5  green">
      <div class="row container mx-auto text-white py-5">
        <div class=" col-md-3 text-center mb-5">
          <img
            style={{ width: "100px", height: "80px" }}
            src="https://cdn.shopify.com/s/files/1/0593/6850/5511/files/JAYA_x_240x240.png?v=1667232437"
            alt=""
          ></img>
          <p class=" text-center mt-3 ">Пүүз, кет бүх төрлийн худалдаа</p>
        </div>
        <div class=" col-6 col-md-3">
          <p class="fs-5 mb-4">ЧУХАЛ ХОЛБООС</p>
          <ul class="text-secondary vstack gap-2 p-0">
            <Link to={"/"}>
              <li>Нүүр</li>
            </Link>
            <Link to={"/about-us"}>
              <li>Бидний тухай</li>
            </Link>
            <Link to={"/blog"}>
              <li>Мэдээ</li>
            </Link>
            <Link to={"/register"}>
              <li>Нэвтрэх/ Бүртгүүлэх</li>
            </Link>
            <Link to={"/contact"}>
              <li>Холбоо Барих</li>
            </Link>
          </ul>
        </div>
        <div class="col-md-3 d-none d-md-block">
          <p class="fs-5 mb-4">ДЭЛГҮҮР</p>
          <ul class="text-secondary vstack gap-2 p-0">
            <li>Жордан</li>
            <li>Чөлөөт пүүз</li>
            <li>Спорт кет</li>
            <li>Сагсны пүүз</li>
            <li>Кет</li>
          </ul>
        </div>
        <div class="col-6 col-md-3">
          <p class="fs-5 mb-4">БИДЭНТЭЙ ХОЛБОГДОХ</p>
          <ul class="text-secondary vstack gap-2 p-0">
            <li>(+976)-9988-2655</li>
            <li>
              Даваа–Баасан: 9:00-19:00 <br />
              Бямба-Ням: 10:00-19:00
            </li>
            <li>d.jamiyan48@gmail.com</li>
            <li className="d-flex align-items-center gap-2">
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
            </li>
          </ul>
        </div>
      </div>
      <hr className="text-secondary m-0" />
      <div className="d-flex justify-content-around container text-white ">
        <p class=" my-4">2023 Жаяа ХХК</p>
        <p class=" my-4 ">Developed by Jaya</p>
      </div>
    </footer>
  );
}
export default Footer;
