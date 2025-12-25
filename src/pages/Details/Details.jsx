import { useParams } from "react-router-dom";
import "./Details.css";
import TestStats from "../../component/TestStats/TestStats";

const Details = () => {
  const { classId } = useParams();

  return (
    <div>
      <TestStats classId={classId} />
    </div>
  );
};

export default Details;
