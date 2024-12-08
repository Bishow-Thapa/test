import { Row, Col, Statistic, Card } from "antd";
import InfoCard from "@features/dashboard/components/InfoCard";

const InfoCardContainer = () => {
  return (
    <Row gutter={26}>
      <Col xs={24} sm={12} md={6}>
        <InfoCard loading={false} title="Hello" amount="$" borderRadius="6px" />
      </Col>
      <Col xs={24} sm={12} md={6}>
        <InfoCard
          loading={false}
          title="Indian"
          amount="^"
          tooltip="This is tooltip"
        />
      </Col>
      <Col xs={24} sm={12} md={6}>
        {/* Col 3 */}
        <Card bordered={false}>
          <Statistic
            title="Active"
            value={11.28}
            precision={2}
            valueStyle={{
              color: "#3f8600",
            }}
            // prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={6}>
        {/* Col 4 */}
        <Statistic title="Active Users" value={112893} />
      </Col>
    </Row>
  );
};

export default InfoCardContainer;
