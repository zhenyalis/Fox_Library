import {useState} from "react"
import { FaStar } from 'react-icons/fa';
import '../../styles/stylesGlobal/starRating.css';


export const BigRatingStars = () => {

const [rating, setRating] = useState(null)
const [hover, setHover] = useState(null)

    return (
        <>
            {[... Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label>
                        <input type='radio' name='rating' value={ratingValue} onClick={() => setRating(ratingValue)} />
                        <FaStar className='star' color={ratingValue <= (hover || rating ) ? '#000000' : '#b9b9b9'} size={25} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)} />
                    </label>
                    
                ) 
            })}
        </>
    );
};

