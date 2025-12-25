import "./Cards.css";
import { Button } from "antd";
import { useDataStore } from "@/store";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Cards = () => {
  const selectedClasses = useDataStore((state) => state.selectedClasses);
  const icon = <SearchOutlined style={{ fontSize: 30, color: "#cccccc" }} />;

  return (
    <>
      <div className="cards-info">共匹配到{selectedClasses.length}个结果</div>
      <div className="cards-container">
        {selectedClasses.map((c, i) => (
          <Link to={`/class/${c}`} key={i}>
            <Button className="button" icon={icon}>
              {c}
            </Button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Cards;
