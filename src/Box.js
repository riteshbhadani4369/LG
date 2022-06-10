import './Box.css'
function Box(props) {
   return(
         <div className='box'>
            <img src={props.img} />
            <h2>{props.Name}<i className="fa-solid fa-angle-right"></i></h2>
         </div>
   ); 
}
export default Box;