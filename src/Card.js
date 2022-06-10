import './Card.css';
import { Row, Col } from 'react-bootstrap';
function Card(props) {
    return (
        <>
            <Row className="pro d-flex">
                <Col className="Product" align="center">
                    <img src={props.imgsrc} ></img>
                    <h6>{props.title}</h6>
                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><br></br>
                    <a href="#">{props.installment}</a>
                    <div className='d-flex offer align-items-center justify-content-center'>
                        <div className='final_price'>{props.price}</div>
                        <div>
                            <div>
                                <del>{props.del}</del>
                            </div>
                            <div className='offer_price'>
                                <span>{props.off}</span >
                            </div>
                        </div>
                    </div>
                    <p>{props.member}<span className='color'>{props.member_price}</span></p>
                </Col>
            </Row>
        </>
    );
}
export default Card;