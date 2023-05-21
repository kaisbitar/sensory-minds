import { useState, useEffect } from "react";
import Letters from "./Letters";
// Component for displaying a winning celebration
const Celebration = ({ celebrate }) => {
  const [celebrateClass, setCelebrateClass] = useState("");

  useEffect(() => {
    if (celebrate) {
      setCelebrateClass("celebrate");
      return;
    }
    setCelebrateClass("");
  }, [celebrate]);

  const bingo = "BINGO";
  const letters = [];
  const colors = ["#c49d3f", "#3d753c", "#c9487f", "#2b6cb0", "#5c255c"];
  for (let i = 0; i < bingo.split("").length; i++) {
    letters.push(<Letters key={i} letter={bingo[i]} color={colors[i]} />);
  }

  // Return the component with dynamic class and BINGO text in different colors
  return (
    <div
      className={`${celebrateClass} grid grid-cols-5 gap-1 text-center text-xl`}
    >
      {letters}
    </div>
  );
};

export default Celebration;
