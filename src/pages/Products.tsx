
import { GridList, Heading } from "@components/common";
import { Product } from "@components/ecommerce";
import useProducts from "@hooks/useProducts";
import { TProduct } from "@types";
import {Loading} from "@components/feedback";

const Products = () => {
const {loading , error , productsFullInfo ,productPrefix} = useProducts()

  return (
    <>
      <Heading title={`${productPrefix?.toUpperCase()} Products`}/>
      <Loading status={loading} error={error} type="product">
        <GridList<TProduct>
          emptyMessage="There are no products"
          records={productsFullInfo}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Products;