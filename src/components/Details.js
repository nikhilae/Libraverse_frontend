import { useLocation } from "react-router-dom";

function Details() {
  const a = useLocation();
  console.log(a);
  return (
    <div>
      hello
      {a.state}
    </div>
  );
}
export default Details;
