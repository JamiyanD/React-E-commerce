import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import categories from "../data/categories";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
export default function Blog() {
  return (
    <div className="container d-flex gap-5">
      <aside className=" vstack gap-5 w-25">
        <div className=" border border-1 p-3">
          <h3 className="dark-blue">Хайлт</h3>
          <div className="hstack">
            <input
              type=""
              name=""
              class="form-control rounded-3 w-75 me-3"
              placeholder="Бүтээгдэхүүн хайх"
            />
            <button className="border-0 rounded-4 btn pink-bg text-white  btn-dark ">
              ХАЙХ
            </button>
          </div>
        </div>
        <div className=" border border-1 p-3">
          <h3 className=" dark-blue">Ангилал сонгох</h3>
          <hr />
          <p className="dark-blue">Мэдээ</p>
        </div>
        <div className=" border border-1 p-3">
          <h3 className="dark-blue">Шинэ мэдээ</h3>
          <hr />
          <div className="">
            <img
              className="w-100"
              src="https://cdn.itoim.mn/media/imagel/14127/image.jpeg"
              alt=""
            />

            <p className="text-secondar mt-3">2023-03-24</p>
            <p className="dark-blue fw-semibold">
              “Nike”-ийн үүсгэн байгуулагч Фил Найтын амжилтын нууц
            </p>
          </div>
          <div className="my-3">
            <img
              className="w-100"
              src="https://cdn.itoim.mn/media/imagel/14127/image.jpeg"
              alt=""
            />
            <p className="text-secondar mt-3">2023-03-24</p>
            <p className="dark-blue fw-semibold">
              “Nike”-ийн үүсгэн байгуулагч Фил Найтын амжилтын нууц
            </p>
          </div>
        </div>
      </aside>
      <div className="d-flex flex-wrap w-75">
        <div className=" blog-card  ">
          <img
            className="w-100"
            src="https://cdn.itoim.mn/media/imagel/14127/image.jpeg"
            alt=""
          />
          <p className="text-secondary my-3">Нийтэлсэн он сар: 2022-03-24</p>
          <p className="dark-blue fw-semibold">
            “Nike”-ийн үүсгэн байгуулагч Фил Найтын амжилтын нууц
          </p>
          <p className="dark-blue">Дэлгэрэнгүй...+</p>
        </div>
        <div className="blog-card  ">
          <img
            className="w-100"
            src="https://cdn.itoim.mn/media/imagel/14127/image.jpeg"
            alt=""
          />
          <p className="text-secondary my-3">Нийтэлсэн он сар: 2022-03-24</p>
          <p className="dark-blue fw-semibold">
            “Nike”-ийн үүсгэн байгуулагч Фил Найтын амжилтын нууц
          </p>
          <p className="dark-blue">Дэлгэрэнгүй...+</p>
        </div>
        <div className="blog-card  ">
          <img
            className="w-100"
            src="https://cdn.itoim.mn/media/imagel/14127/image.jpeg"
            alt=""
          />
          <p className="text-secondary my-3">Нийтэлсэн он сар: 2022-03-24</p>
          <p className="dark-blue fw-semibold">
            “Nike”-ийн үүсгэн байгуулагч Фил Найтын амжилтын нууц
          </p>
          <p className="dark-blue">Дэлгэрэнгүй...+</p>
        </div>
      </div>
    </div>
  );
}
