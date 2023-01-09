
function Section2Func(props){
    return( 
      
                <div  className="w-100 d-flex justify-content-evenly align-items-center mt-5 ">
                    <div className='d-flex col-10 justify-content-between h-75 align-items-center border rounded p-3 '>
                        <img className="carousel2-img w-50" src={props.imgUrl} alt=""></img>
                        <p1 className="col-5 color"><strong>{props.name}</strong><br></br>({props.items} items)</p1>
                    </div>
                 
                </div>
            
            
    )
}
export default Section2Func