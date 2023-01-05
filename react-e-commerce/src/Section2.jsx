import { Stack } from 'react-bootstrap'
function Section2() {
    return (
        <section className="carousel slide mt-5 w-100 bg-warning" id="carousel-demo" data-bs-ride="carousel">
            <div className='carousel-indicators'>
                <button type='button' data-bs-target="carousel-demo" data-bs-slide-to="0" class="active"></button>
                <button type='button' data-bs-target="carousel-demo" data-bs-slide-to="1" ></button>
                <button type='button' data-bs-target="carousel-demo" data-bs-slide-to="2"></button>
            </div>
            <div class="carousel-inner w-100 h-100">
                <Stack direction="horizontal" gap={5} className="carousel-item h-100 w-100">
                    <div className='d-flex col-3 justify-content-between h-100 align-items-center border rounded p-3 ms-5'>
                        <img className="h-100 col-6" src="./img/speaker.png" alt=""></img>
                        <p1 className="col-5 color"><strong>Speaker</strong><br></br>(6 items)</p1>
                    </div>
                    <div className="d-flex col-3 justify-content-between h-100 align-items-center border rounded p-3">
                        <img className="h-100 col-6" src="./img/laptop.png" alt=""></img>
                        <p1 className="color"><strong>Speaker</strong><br></br>(6 items)</p1>
                    </div>
                    <div className="d-flex col-3 justify-content-between h-100 align-items-center border rounded p-3">
                        <img className="h-100 col-6" src="./img/camera.png" alt=""></img>
                        <p1 className="color"><strong>Speaker</strong><br></br>(6 items)</p1>
                    </div>
                </Stack>
              
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carousel-demo" data-bs-slide="prev">
                <span class="carousel=control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel-demo" data-bs-slide="next">
                <span class="carousel=control-next-icon"></span>
            </button>
        </section>
    )
}
export default Section2