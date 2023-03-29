function Footer() {
  return (
    <footer class="dark-blue-bg my-5  green">
      <div class="row container mx-auto text-white py-5">
        <div class="col text-center">
          <img
            className="w-50"
            src="https://logodix.com/logo/1167676.png"
            alt=""
          ></img>
          <p class=" text-start ">
            Бичиг хэрэг, Хаяг рекламын бүх төрлийн үйлчилгээ
          </p>
        </div>
        <div class="col">
          <p class="fs-5 mb-4">ЧУХАЛ ХОЛБООС</p>
          <ul class="text-secondary vstack gap-2 p-0">
            <li>Нүүр</li>
            <li>Холбоо Барих</li>
            <li>Нэвтрэх/ Бүртгүүлэх</li>
            <li>Үйлчилгээний нөхцөл</li>
            <li>Хүргэлтийн Нөхцөл</li>
          </ul>
        </div>
        <div class="col">
          <p class="fs-5 mb-4">ДЭЛГҮҮР</p>
          <ul class="text-secondary vstack gap-2 p-0">
            <li>Бичиг хэрэг</li>
            <li>Бэлэг дурсгал</li>
            <li>Хэвлэлийн Материал</li>
            <li>Хаяг Хэвлэлийн Үйлдвэрлэл</li>
          </ul>
        </div>
        <div class="col">
          <p class="fs-5 mb-4">БИДЭНТЭЙ ХОЛБОГДОХ</p>
          <ul class="text-secondary vstack gap-2 p-0">
            <li>(+976)-9988-2655</li>
            <li>
              Даваа–Баасан: 9:00-19:00 <br />
              Бямба-Ням: 10:00-19:00
            </li>
            <li>d.jamiyan48@gmail.com</li>
            <li>Jaya Jaya</li>
          </ul>
        </div>
      </div>
      <hr className="text-secondary m-0" />
      <div className="d-flex justify-content-around container text-white ">
        <p class=" my-4">2023 Киткат ХХК</p>
        <p class=" my-4 ">Developed by Jaya</p>
      </div>
    </footer>
  );
}
export default Footer;
