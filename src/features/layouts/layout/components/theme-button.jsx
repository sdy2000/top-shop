import { useDispatch, useSelector } from "react-redux";
import { chengTheme } from "@/context/features";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const ThemeButton = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((store) => store.theme);

  return (
    <button
      className="flex justify-center items-center text-2xl"
      onClick={() => dispatch(chengTheme())}
    >
      {theme === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
    </button>
  );
};
export default ThemeButton;
