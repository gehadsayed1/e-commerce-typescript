import { Container} from "react-bootstrap";
import { Product } from "@components/ecommerce";
import Loading from "@components/feedback/loading/Loading";
import { GridList } from "@components/common";
import { useAppDispatch , useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { actGetProductsByCatPrefix, productsCleanUp } from "@store/products/productsSlice";
import { useParams } from "react-router-dom";
const Products = () => {
  const dispatch = useAppDispatch();
  const params = useParams()
  const { records, loading, error } = useAppSelector(
    (state) => state.products
  );


  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));
    return () => {
      dispatch(productsCleanUp())
    }
  },[dispatch ,params]);


 
  return (
    <Container>
     <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItem={(item) => <Product {...item} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;