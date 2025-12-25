import { useNavigate } from "react-router-dom";
import { Card, Tag, Space, Typography, FloatButton, Button } from "antd";
import { useDataStore } from "@/store";
import {
  RollbackOutlined,
  HomeOutlined,
  ClockCircleOutlined,
  UserOutlined,
  NumberOutlined,
  VerticalAlignTopOutlined,
  AppstoreOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import "./TestStats.css";

const { Text, Title } = Typography;

const TestStats = ({ classId }) => {
  const data = useDataStore((state) => state.data);
  const navigate = useNavigate();

  const filteredData = data.filter((item) => item.classId === classId);

  return (
    <div className="page-wrapper">
      <Button
        onClick={() => navigate(-1)}
        icon={<RollbackOutlined />}
        size="large"
        className="back-button"
        type="primary" // 改为实色按钮，更易识别
        danger
      >
        返回
      </Button>
      <div className="stats-container">
        {filteredData.map((item, i) => {
          const {
            courseName,
            campus,
            examTime,
            classroom,
            courseCode,
            teacher,
            studentCount,
          } = item;
          return (
            <Card
              key={i}
              className="stats-item"
              hoverable
              title={
                <Space>
                  <Tag color="volcano">{campus}</Tag>
                  <Text strong>{classId}</Text>
                </Space>
              }
            >
              <div className="card-content">
                <Title level={5} className="course-title">
                  🧸 {courseName}
                </Title>
                <div className="info-list">
                  <div className="info-row">
                    <HomeOutlined /> <Text type="secondary">教室:</Text>
                    <Text strong>{classroom}</Text>
                  </div>
                  <div className="info-row">
                    <ClockCircleOutlined /> <Text type="secondary">时间:</Text>
                    <Text>{examTime}</Text>
                  </div>
                  <div className="info-row">
                    <TeamOutlined /> <Text type="secondary">人数:</Text>
                    <Text>{studentCount}</Text>
                  </div>
                  <div className="info-row">
                    <UserOutlined /> <Text type="secondary">老师:</Text>
                    <Text>{teacher}</Text>
                  </div>
                  <div className="info-row">
                    <NumberOutlined /> <Text type="secondary">代码:</Text>
                    <Text code>{courseCode}</Text>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{ right: 24, bottom: 24 }}
        icon={<AppstoreOutlined />}
      >
        <FloatButton.BackTop
          icon={<VerticalAlignTopOutlined />}
          tooltip="回到顶部"
          visibilityHeight={400}
        />
        <FloatButton
          icon={<RollbackOutlined />}
          tooltip="返回上一页"
          onClick={() => navigate(-1)}
        />
      </FloatButton.Group>
    </div>
  );
};

export default TestStats;
