import{useState} from "react"
import { Link } from 'react-router-dom';
import{BoolksInfo,WrapperBooks,BooksImages,BooksName,BooksRatings,ButtonOrder,AuthorNameBooks}from "./style"
import { TBooks } from '../../types/types';
import { RatingStars } from '../RatingStars/RatingStars';
import { useDispatch, useSelector } from 'react-redux';
import { addItems } from '../../redux/slices/orderSlice';
import { ButtonAvailable } from '../../UX/ButtonAvailable/ButtonAvailable';
import { ButtonTaken } from '../../UX/ButttonTaken/ButtonTaken';
import { config } from "../Config/ConfigText";

export const BooksBlock = (props: TBooks) => {

    const dispatch = useDispatch(); 
    const addedProduct = useSelector((state: any) => state.order.items.find((obj: any) => obj.id === props.id))

    const [booksStatus, setBooksStatus] = useState(false)
    const status = booksStatus ? <ButtonTaken/> : <ButtonAvailable />
    const toggleStatus = () => {
       setBooksStatus(!booksStatus)
    }

    const onClickAdd = () => {
        const item = {
            id: props.id,
            name:props.name,
            imageUrl:props.imageUrl,
            author:props.author,
            status:booksStatus,
        }
        
        dispatch(addItems(item))
    }

    return (
        <WrapperBooks key={props.id}>
            <Link to={`/all-books/${props.id}`} state={props}><BooksImages src={props.imageUrl}/></Link>
            <BoolksInfo>
                <button onClick={toggleStatus}>{status}</button>
                <Link to={`/all-books/${props.id}`} state={props}><BooksName>{props.name}</BooksName></Link> 
                <AuthorNameBooks>{props.author}</AuthorNameBooks>
                <BooksRatings ><RatingStars /></BooksRatings>
                <ButtonOrder onClick={onClickAdd}>{config.buttons.btnOrderText}</ButtonOrder>
            </BoolksInfo>
        </WrapperBooks>
    );
};

