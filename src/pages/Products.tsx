import { Container } from "react-bootstrap";
import { Product } from "@components/ecommerce";
import Loading from "@components/feedback/loading/Loading";
import { GridList, Heading } from "@components/common";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "@store/products/productsSlice";
import { useParams } from "react-router-dom";
const Products = () => {
  const dispatch = useAppDispatch();

  const params = useParams();
  const { records, loading, error } = useAppSelector((state) => state.products);

  const cartItems = useAppSelector((state) => state.cart.items);

  const productsFullInfo = records.map((el) => ({
    ...el,
    quantity: cartItems[el.id] || 0,
  }));

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  return (
    <Container>
       <Heading><span className="text-capitalize">{params.prefix}</span> Products</Heading>
      <Loading status={loading} error={error}>
        <GridList
          records={productsFullInfo}
          renderItem={(item) => <Product {...item} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;
