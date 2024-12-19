import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/CategoriesSlice";
import { Container } from "react-bootstrap";
import { Category } from "@components/ecommerce";
import { useEffect } from "react";
import Loading from "@components/feedback/loading/Loading";
import { GridList, Heading } from "@components/common";

const Categories = () => {
  const despatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (!records.length) {
      despatch(actGetCategories());
    }
  }, [despatch, records]);

  return (
    <Container>
      <Heading>Categories</Heading>
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItem={(item) => <Category {...item} />}
        />
      </Loading>
    </Container>
  );
};

export default Categories;
