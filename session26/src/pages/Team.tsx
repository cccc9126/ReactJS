import { useParams } from "react-router-dom";

function Team() {
  const { teamId } = useParams();
  return <div>Chi tiết của team có ID: {teamId}</div>;
}
export default Team;
