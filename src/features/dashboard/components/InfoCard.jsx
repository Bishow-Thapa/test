import { Card, Typography, Tooltip } from "antd";
import {
  ExclamationCircleOutlined,
  CaretUpOutlined,
  CaretDownFilled,
} from "@ant-design/icons";

import CustomDivider from "@shared/components/Divider";

const { Paragraph, Text } = Typography;

const InfoCard = ({ loading, title, amount, tooltip }) => {
  return (
    <Card className="transaction_card" loading={loading}>
      <Paragraph className="transaction-header">
        <Text type="secondary">{title}</Text>
        <Tooltip placement="topLeft" title={tooltip}>
          <ExclamationCircleOutlined className="db_icon" />
        </Tooltip>
      </Paragraph>

      <Paragraph
        className="db_text dh_main_value transaction-amount"
        style={{ textAlign: "left" }}
      >
        <Text>{amount}</Text>
      </Paragraph>

      <CustomDivider margin="12px 0" />
      <span>1,234</span>
    </Card>
  );
};

export default InfoCard;
