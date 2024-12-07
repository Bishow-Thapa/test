import { Card } from "antd";
import CustomDivider from "@shared/components/Divider";

const InfoCard = ({ loading, title, currency, borderRadius }) => {
  return (
    <Card loading={loading} style={{ borderRadius }}>
      <p>{title}</p>
      <p>{currency}</p>
      <CustomDivider margin="12px 0" />
      <span>1,234</span>
    </Card>
  );
};

export default InfoCard;
