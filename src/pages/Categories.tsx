
import { Container } from "react-bootstrap";
import { Category } from "@components/ecommerce";
import { GridList, Heading } from "@components/common";
import useCategories from "@hooks/useCategories";
import { Loading } from "@components/feedback";

const Categories = () => {
const {loading , error , records} = useCategories()

  return (
    <Container>
      <Heading title="Categories"/>
      <Loading status={loading} error={error} type="category">
        <GridList
          emptyMessage="There are no categories"
          records={records}
          renderItem={(item) => <Category {...item} />}
        />
      </Loading>
    </Container>
  );
};

export default Categories;
