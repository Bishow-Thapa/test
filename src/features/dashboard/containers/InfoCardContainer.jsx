import { Row, Col } from "antd";
import InfoCard from "@features/dashboard/components/InfoCard";

const InfoCardContainer = () => {
  return (
    <Row gutter={26}>
      <Col xs={24} sm={12} md={6}>
        <InfoCard
          loading={false}
          title="Hello"
          currency="$"
          borderRadius="6px"
        />
      </Col>
      <Col xs={24} sm={12} md={6}>
        <InfoCard
          loading={false}
          title="Indian"
          currency="^"
          borderRadius="6px"
        />
      </Col>
      <Col xs={24} sm={12} md={6}>
        Col 3
      </Col>
      <Col xs={24} sm={12} md={6}>
        Col 4
      </Col>
    </Row>
  );
};

export default InfoCardContainer;
