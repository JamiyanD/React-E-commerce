import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarOfLife,
  faHouseUser,
  faAddressBook,
  faUsers,
  faShoePrints,
} from "@fortawesome/free-solid-svg-icons";
import MenuBookIcon from "@mui/icons-material/MenuBook";
export default function AboutUs() {
  return (
    <div>
      <h1 className="dark-blue fs-2 text-center my-5">Киткат ХХК</h1>
      <div className="container d-flex gap-5 ">
        <div className="w-50 ">
          <p className="text-secondary fs-5 lh-lg">
            Манай компани 2007 оноос хойш Монгол улсын гадаад худалдаа
            үйлчилгээний салбарт тасралтгүйгээр үйл ажиллагаа эрхэлж байна.
            Компанийн үүсгэн байгуулагч болоод удирдах ажилтнууд нь тухайн
            салбарт 15 гаруй жил ажилласан туршлагатай, салбартаа тэргүүлэх
            зэргийн залуу мэргэжилтнүүдтэй ажиллаж байна.
          </p>
          <p className="text-secondary fs-5 lh-lg">
            2007 онд анх “Sky star” нэртэйгээр Интернэт кафе чиглэлээр үйл
            ажиллагаа явуулж эхэлсэн бөгөөд өдгөө нэрээ “Дөрвөлжин үсэг” ХХК
            болгон өөрчилж одоог хүртэл тогтвортой үйл ажиллагаа явуулсаар
            байна.
          </p>
        </div>
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-flat-design-people-waving-illustration_52683-79273.jpg?w=1380&t=st=1679813560~exp=1679814160~hmac=ab1c4d5d73195ac0d3841775e60ce25d06a92ac3c9ec141e0cdfec36e8d9780e"
          alt=""
          className="col-5 mx-auto"
        />
      </div>
      <div className="container d-flex gap-5 my-5">
        <img
          src="https://img.freepik.com/premium-vector/smiling-young-man-face-icon_768258-1952.jpg?w=996"
          alt=""
          className="col-4 mx-auto"
        />
        <div className="w-50">
          <h1 className="dark-blue fs-2 text-center mb-5">Мэндчилгээ</h1>
          <p className="text-secondary fs-5 lh-lg">
            Мэндчилгээ “Дөрвөлжин Үсэг” “ХХК-ийн хамт олон НЭГДСЭН МЕНЕЖМЕНТИЙН
            ТОГТОЛЦООГ үйл ажиллагаандаа амжилттай хэрэгжүүлж, шинэ оны босгон
            дээр Чанарын менежментийн тогтолцоог нэвтрүүлэн компанийнхаа
            өрсөлдөх чадвар, үнэ цэнэ, бүтээмжийг нэмэгдүүлэхэд нэг сэтгэлээр
            хичээн зүтгэж, нэг баг болон ажилласан баялаг бүтээгч хамт олонд
            баярлалаа. Компанийн 15 жилийн түүхийг бүтээлцсэн нийт ажилтнууддаа
            баярлалаа.
          </p>
          <div className="d-flex justify-content-center gap-1">
            <FontAwesomeIcon icon={faStar} style={{ color: "#ffcf24" }} />
            <FontAwesomeIcon icon={faStarOfLife} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#ffcf24" }} />
            <FontAwesomeIcon icon={faStarOfLife} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#ffcf24" }} />
          </div>
          <p className="text-secondary fs-5 text-center my-3">
            Та бүхэнд ажлын амжилт хүсье!
          </p>
          <h3 className="dark-blue text-center">Захирал Э.Мөнх-Од</h3>
        </div>
      </div>
      <div className="hstack py-5">
        <img
          src="https://img.freepik.com/free-photo/one-white-sneaker-shoe-isolated-white_93675-133980.jpg?w=1380&t=st=1679817952~exp=1679818552~hmac=b09f6be798b2c6614d1d4edebe96901f5ac19bd717c4e3ca0b14ce395ff5e784"
          alt=""
          className="w-25"
        />
        <img
          src="https://img.freepik.com/free-photo/background-red-retro-model-tennis_1203-3993.jpg?w=1380&t=st=1679833558~exp=1679834158~hmac=490e2847771123833c282d86e19642c680966fb84fa91a22d481a4288f4550e5"
          alt=""
          className="w-25"
        />
        <img
          src="https://img.freepik.com/free-photo/new-pair-white-sneakers-isolated-white_93675-135053.jpg?w=1380&t=st=1679833446~exp=1679834046~hmac=03e93b312619ae2a5afe8d3e8019491bce2dbf90ab0cf107a715900d39ed95dd"
          alt=""
          className="w-25"
        />
        <img
          src="https://img.freepik.com/free-vector/realistic-sport-shoes-composition_1284-17524.jpg?w=1380&t=st=1679833486~exp=1679834086~hmac=efa4dae41e6021020430cae355a5209783c5a2c49fb62939d385a241b6b6fae5"
          alt=""
          className="w-25"
        />
      </div>
      <p className="fs-5 pink text-center m-0">
        БИДНИЙ БҮТЭЭЛ АМЖИЛТ ДАГУУЛНА.
      </p>
      <h1 className="dark-blue fs-2 text-center mb-5 mt-0">Эрхэм зорилго</h1>
      <p className="text-secondary fs-5 text-center container lh-lg">
        Бичиг хэрэг, Хаяг рекламын бүх төрлийн үйлчилгээгээр дагнасан, дэлхийн
        жишигт нийцсэн, сүүлийн үеийн дэвшилтэт техник технологийг компанидаа
        нэвтрүүлж, хэрэглэгчдэдээ хурдан шуурхай, чанартай бүтээгдэхүүн хүргэх
        замаар монгол улсын хөгжил дэвшил, эдийн засгийн өсөлтөд хувь нэмрээ
        оруулсан үндэсний шилдэг компани байхад оршино.
      </p>
      <div className="container d-flex gap-5 my-5 py-5">
        <div className="col-5 mx-auto position-relative">
          <img
            src="https://img.freepik.com/free-photo/new-sneakers_93675-130032.jpg?w=1380&t=st=1679499554~exp=1679500154~hmac=5c0f10e4ed882e89543abd0a3a53b8e6457e0c8b54a68e881a28e03dc537c31b"
            alt=""
            className="w-100"
          />
          <img
            src="https://img.freepik.com/free-photo/new-sneakers_93675-130455.jpg?w=740&t=st=1679828486~exp=1679829086~hmac=0217f2fa60e55e44980b2f8a084447d432c7a56262120fd8587a5b51bfe8ba39"
            alt=""
            className="position-absolute about-us-absolute-img "
          />
        </div>
        <div className="w-50 p-5 lh-lg">
          <h1 className="dark-blue fs-2 mb-5 ">Эрхэмлэх зүйлс</h1>

          <ul>
            <li className="text-secondary fs-5 ">
              Бид бизнесийн ёс зүйг эрхэмлэн ажиллахын зэрэгцээ харилцагчийн
              итгэлтэй хамтрагч нь байх болно.
            </li>
            <li className="text-secondary fs-5">
              Бид үргэлж шинийг сэтгэж, шинийг эрэлхийлж олон улсад шинээр
              нэвтэрч буй дэвшилтэт технологи, материал, бүтээгдэхүүнийг
              үйлдвэрлэлдээ нэвтрүүлж ажиллана.
            </li>
            <li className="text-secondary fs-5">
              Бид багаар ажиллах чадвартай мэдлэгтэй, чадварлаг туршлагатай,
              үнэнч шударга, найрсаг, зарчимч, бүтээлч хандлагыг эрхэмлэж хамтын
              хүчээр ихийг бүтээнэ.
            </li>
            <li className="text-secondary fs-5">
              Бид хамтдаа хөгжиж, нэг зорилго, нэг хүсэл тэмүүлэлтэй, нэг зүгт
              харж ажиллана.
            </li>
          </ul>
        </div>
      </div>
      <div className="container d-flex gap-5 my-5 about-us-background-img">
        <div className="">
          <h1 className="dark-blue fs-2 mb-5 ">
            Үйл ажиллагааны үндсэн чиглэл
          </h1>
          <p className="text-secondary fs-5">
            Бичиг хэрэг, Бэлэг дурсгал , Хэвлэлийн дизайнер, Эх бэлтгэгч,
            Хүргэлтийн үйлчилгээ
          </p>
          <div className="d-flex my-5">
            <div className="hstack gap-4 me-5">
              <FontAwesomeIcon icon={faShoePrints} size="2xl" />
              <div className="">
                <p className="text-secondary fw-semibold m-0">Барааны Төрөл</p>
                <h1 className="dark-blue m-0">4+</h1>
              </div>
            </div>
            <div className="hstack gap-4">
              <FontAwesomeIcon icon={faAddressBook} size="2xl" />
              <div className="">
                <p className="text-secondary fw-semibold m-0">Барааны Тоо</p>
                <h1 className="dark-blue m-0">1000+</h1>
              </div>
            </div>
          </div>
          <div className="d-flex ">
            <div className="hstack gap-4 me-4">
              <FontAwesomeIcon icon={faHouseUser} size="2xl" />
              <div className="">
                <p className="text-secondary fw-semibold m-0">
                  Харилцагчийн Тоо
                </p>
                <h1 className="dark-blue m-0">30+</h1>
              </div>
            </div>
            <div className="hstack gap-4">
              <FontAwesomeIcon icon={faUsers} size="2xl" />
              <div className="">
                <p className="text-secondary fw-semibold m-0">Баг Хамт Олон</p>
                <h1 className="dark-blue m-0">10+</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}