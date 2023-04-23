import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import categories from "../data/categories";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

export default function BlogDetail2() {
  const [categories, setCategories] = useState([]);
  const CATEGORIES_URL = "https://puuzket.onrender.com/products/category";
  async function fetchCategories() {
    const FETCHED_DATA = await fetch(CATEGORIES_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    if (FETCHED_JSON.status == "success") {
      setCategories(FETCHED_JSON.data);
    }
  }
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div
      className="container d-flex gap-5 
    "
    >
      <aside className=" vstack gap-5 d-none d-lg-block">
        <div className=" border border-1 p-3">
          <h3 className="dark-blue">Ангилал</h3>
          <hr />
          {categories.map((category) => {
            return (
              <p
                className="dark-blue pink-hover cursor-pointer"
                // onClick={() => handleCategory(category.category_name)}
              >
                <ArrowForwardIosIcon fontSize="inherit" className="me-1" />
                {category.category_name}
              </p>
            );
          })}
        </div>
        <div className=" border border-1 p-3">
          <h3 className="dark-blue">Шинэ мэдээ</h3>
          <hr />
          <Link to={"/blog-detail"}>
            <div className="">
              <img
                className="w-100 rounded"
                src="https://cdn.itoim.mn/media/imagel/14127/image.jpeg"
                alt=""
              />

              <p className="text-secondary mt-3">2023-03-24</p>
              <p className="dark-blue fw-semibold">
                “Nike”-ийн үүсгэн байгуулагч Фил Найтын амжилтын нууц
              </p>
            </div>
          </Link>
          <Link to={"/blog-detail2"}>
            <div className="my-3 rounded">
              <img
                className="w-100 "
                src="https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2023/03/303995-12032023-1678591463-1915035707-adidas.jpg"
                alt=""
              />
              <p className="text-secondar mt-3">2023-03-24</p>
              <p className="dark-blue fw-semibold">
                Adidas компани Кане Уэстийн 1.2 тэрбум үнэ бүхий пүүзийг хэрхэн
                борлуулахаа мэдэхгүй байна гэжээ
              </p>
            </div>
          </Link>
        </div>
      </aside>
      <div className=" col-lg-9">
        <h1 className="dark-blue">
          Adidas компани Кане Уэстийн 1.2 тэрбум үнэ бүхий пүүзийг хэрхэн
          борлуулахаа мэдэхгүй байна гэжээ
        </h1>
        <p className="text-secondary ">Нийтэлсэн он сар: 2022-03-24</p>
        <img
          className="w-100"
          src="https://i.dailymail.co.uk/1s/2022/10/28/16/63952333-11366133-image-a-1_1666972592281.jpg"
          alt=""
        />
        <p className="text-secondary mt-4 lh-lg">
          Рэппер, загвар зохион бүтээгч Кане Уэсттэй хамтран ажиллах гэрээгээ
          цуцалсны улмаас Adidas компани асар их алдагдал хүлээхээр болж байна
          гэж мэдэгджээ. Тус компани үлдсэн 1.2 тэрбум еврогийн үнэ бүхий Кане
          Уэстийн Yeezy пүүзнүүдийг хэрхэн борлуулж дуусахаа мэдэхгүй байгаа аж.
          Харин Америкийн нэгэн худалдааны сүлжээнээс Yeezy пүүзний борлуулалт
          сайн байгаа, мөн өндөр үнээр зарагдаж байна гэж мэдэгджээ. Учир нь
          хүмүүс цуглуулгадаа зориулан худалдан авдаг болсон байна. Зарим
          дэлгүүрт өнгөрсөн намар 260 ам.долларын үнэтэй байсан Yeezy 350 Zebra
          загварын пүүзийг одоо 340-360 ам.доллароор худалдаалж байгаа аж.
        </p>
        <h5 className="dark-blue">Сэтгэгдэл (0)</h5>
        <p className="text-secondary">Та нэвтрэн орж байж сэтгэгдэл бичнэ.</p>
        <textarea
          class="form-control rounded-3"
          placeholder="Сэтгэглдлээ бичнэ үү"
          style={{ height: "150px" }}
        ></textarea>
        <button className="btn mt-3 btn-outline-dark  ">
          Сэтгэгдэл үлдээх
        </button>
      </div>
    </div>
  );
}
