
import { Col, Row } from "react-bootstrap";

type TGridList<T> = {
  records: T[];
  renderItem: (item: T) => React.ReactNode
}
 type HasId = {id?:number}

function GridList <T extends HasId >({ records, renderItem }: TGridList<T>) {
  const categoriesList = records.length > 0 ? records.map((record) => (
    <Col key={record.id} xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
      {renderItem(record)}
    </Col>
  )) : null
  return (
    <Row>
      {categoriesList}
    </Row>
  )
}

export default GridList