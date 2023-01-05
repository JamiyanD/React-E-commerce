function Section1 (){
    return(
        <section id="carousel-demo" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="carousel-demo" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="carousel-demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="carousel-demo" data-bs-slide-to="2"></button>
        </div>
        <div class="carousel-inner w-100  h-100">
            <div class="carousel-item active d-flex justify-content-between h-100">
                <div class="d-flex flex-column justify-content-center align-items-center w-50">
                    <h1 class="w-50  text-start color">Canon <br></br>camera</h1>
                    <div class="w-50 d-flex ">
                        <button class="bg-warning text-white border-0 rounded me-2">Shop now</button>
                        <button class="color border-secondary rounded ">View more</button>
                    </div>
                </div>
                <img class="h-100 me-5" src="./img/camera.png" alt=""></img>
            </div>
            <div class="carousel-item h-100 ">
                <img class="h-100 w-100 me-5" src="./img/speaker.png" alt=""></img>
            </div>
            <div class="carousel-item h-100"><img class="h-100 w-100 me-5" src="./img/laptop.png" alt=""></img></div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel-demo" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel-demo" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
    </section>
    )
}

export default Section1