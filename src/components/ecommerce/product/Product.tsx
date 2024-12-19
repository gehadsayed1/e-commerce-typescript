import { TProduct } from "@customTypes/product";
import { Button , Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/CartSlice";
import { useEffect, useState ,memo} from "react";


const { product, productImg ,maximumNotice} = styles;

const Product  = memo(({ id, title, img, price ,max , quantity}: TProduct) => {
  const dispatch = useAppDispatch();
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const currentRenamedQuantity = max - (quantity ?? 0);
  const quantityReachedToMax = currentRenamedQuantity <= 0;
console.log(img);

  useEffect(() => {
    if (!isBtnDisabled) {
      return;
    }
    setIsBtnDisabled(true);
    const debounce = setTimeout(() => {
      setIsBtnDisabled(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [isBtnDisabled]);

  const addToCartHandler = () => {
    dispatch(addToCart(id));
    setIsBtnDisabled(true);
  };
  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <h3>{price}EGP</h3>
      <p className={maximumNotice}>{quantityReachedToMax ? "You reached the limit" :`can you add ${currentRenamedQuantity} items`}</p>

      <Button
        variant="info"
        style={{ color: "white" }}
        onClick={addToCartHandler}
        disabled={isBtnDisabled || quantityReachedToMax}
      >
        {isBtnDisabled ? <Spinner animation="border" size="sm" /> : "Add to cart"} 
      </Button>
    </div>
  );
});

export default Product;
