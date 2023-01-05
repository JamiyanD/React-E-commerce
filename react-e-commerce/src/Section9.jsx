import{Stack} from "react-bootstrap"
function Section9(){
    return(
        <section class="mt-5">
        <Stack direction="horizontal" >
            <h5 class="color ">Latest news</h5>
            <h5 class="color ms-auto">View all</h5>
        </Stack>
        <div class="row">
            <div class="col m-2 border rounded d-flex p-3">
                <img class="w-50" src="./img/Blog-1.png" alt=""></img>
                <div class="ms-3">
                    <button class=" w-50 text-center bg-white border rounded-pill mb-2">22 oct 2021</button>
                    <h5>Who avoids a pain that produces?</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae est ut, iste quaerat suscipit
                        fugit.</p>
                    <p>By spacing tech</p>
                </div>
            </div>
            <div class="col m-2 border rounded d-flex p-3">
                <img class="w-50" src="./img/Blog-2.png" alt=""></img>
                <div class="ms-3">
                    <button class=" w-50 text-center bg-white border rounded-pill mb-2">22 oct 2021</button>
                    <h5>Who avoids a pain that produces?</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae est ut, iste quaerat suscipit
                        fugit.</p>
                    <p>By spacing tech</p>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Section9