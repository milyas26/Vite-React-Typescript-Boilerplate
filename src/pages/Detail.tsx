import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { decrement, increment } from "../redux/slices/mainReducer";

const Detail = () => {
  const navigate = useNavigate();
  const { value } = useAppSelector((state) => state.main);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>DETAIL</h2>
      <button onClick={() => navigate("/")}>Back to Home</button>
      <div className="p-4">{value}</div>
      <div className="flex gap-2">
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <Button type="button" variant="contained">Testing</Button>
    </div>
  );
};

export default Detail;
