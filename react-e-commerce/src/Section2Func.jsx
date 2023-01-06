
function Section2Func(props){
    return( 
      
                <div  className="w-100 d-flex justify-content-evenly align-items-center mt-5 ">
                    <div className='d-flex justify-content-between h-75 align-items-center border rounded p-3 '>
                        <img className="carousel2-img  col-6 " src={props.imgUrl} alt=""></img>
                        <p1 className="col-5 color"><strong>{props.name}</strong><br></br>({props.items} items)</p1>
                    </div>
                    {/* <div className="d-flex col-3 justify-content-between h-75 align-items-center border rounded p-3">
                        <img className="carousel2-img col-6 " src={props.imgUrl2} alt=""></img>
                        <p1 className="color"><strong>{props.name2}</strong><br></br>({props.items2} items)</p1>
                    </div>
                    <div className="d-flex col-3 justify-content-between h-75 align-items-center border rounded p-3">
                        <img className="carousel2-img col-6 " src={props.imgUrl3} alt=""></img>
                        <p1 className="color"><strong>{props.name3}</strong><br></br>({props.items3} items)</p1>
                    </div> */}
                </div>
            
            
    )
}
export default Section2Func