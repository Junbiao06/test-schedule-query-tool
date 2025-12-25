import "./SearchInput.css";
import { Input, Tooltip } from "antd";
import { QuestionCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useDataStore } from "@/store";

const SearchInput = () => {
  const [inputVal, setInputVal] = useState("");

  const classSet = useDataStore((state) => state.classSet);
  const setSelectedClasses = useDataStore((state) => state.setSelectedClasses);

  const handleChange = (e) => {
    const newVal = e.target.value;
    setInputVal(newVal);

    if (!newVal.trim()) {
      setSelectedClasses([]);
      return;
    }

    const matches = [...classSet].filter((c) => c.includes(newVal));

    setSelectedClasses(matches);
  };

  const prefix = <SearchOutlined style={{ fontSize: 18, color: "#cccccc" }} />;

  const suffix = (
    <Tooltip title="点击跳转教务官网查询">
      <QuestionCircleOutlined
        style={{ fontSize: 18, color: "red" }}
        onClick={(e) => {
          e.stopPropagation(); // 阻止冒泡，移动端可能弹出键盘
          window.open(
            "https://jwc.njupt.edu.cn/2025/1224/c1594a295266/page.htm"
          );
        }}
      />
    </Tooltip>
  );
  return (
    <Input
      placeholder="请输入班级信息："
      value={inputVal}
      onChange={handleChange}
      prefix={prefix}
      suffix={suffix}
      size="large"
      maxLength={/^\d/.test(inputVal) ? 6 : 7}
      className="input-container"
    ></Input>
  );
};

export default SearchInput;
