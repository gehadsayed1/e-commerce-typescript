import useCart from "@hooks/useCart";
import { Heading } from "@components/common";
import CartItemList from "@components/ecommerce/cartItemList/CartItemList";
import CartSubtotalPrice from "@components/ecommerce/cartSubtotalPrice/CartSubtotalPrice";
import { Loading, LottieHandler } from "@components/feedback";

const Cart = () => {
const {loading , error , products , changeQuantityHandler , removeItemHandler} = useCart();

  return (
    <>
      <Heading title="Your Cart"/>
      <Loading status={loading} error={error} type="cart">
        {products.length ? (
          <>
            <CartItemList
              products={products}
              changeQuantityHandler={changeQuantityHandler}
              removeItemHandler={removeItemHandler}
            />
            <CartSubtotalPrice products={products} />
          </>
        ) : (
          <LottieHandler message="your cart is empty" type="empty"/>
        )}
      </Loading>
    </>
  );
};

export default Cart;