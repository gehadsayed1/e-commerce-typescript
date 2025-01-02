import useWishlist from "@hooks/useWishlist";
import { GridList, Heading } from "@components/common";
import { Product } from "@components/ecommerce";
import { TProduct } from "@types";
import {Loading} from "@components/feedback";

const Wishlist = () => {
  const {loading , error , records} = useWishlist();

  return (
    <>
      <Heading title="your Wishlist"/>
      <Loading status={loading} error={error} type="product">
        <GridList<TProduct>
          emptyMessage="your wishlist is empty"
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Wishlist;