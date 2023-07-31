import { useDispatch, useSelector } from "react-redux";
import { language } from "../data";
import { onChangeLanguage } from "@/context/features";

const LanguageDropdown = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((store) => store.language);

  return (
    <>
      <a href="#">
        {currentLanguage.language}
        <span className="icon-small">
          <i className="ri-arrow-down-s-line"></i>
        </span>
      </a>
      <ul>
        {language.map((lan, idx) => (
          <li
            className={`${
              lan.symbol === currentLanguage.symbol
                ? "bg-slate-300"
                : " hover:bg-slate-200"
            } duration-200 gap-2 px-2 py-1`}
            key={idx}
            onClick={() => dispatch(onChangeLanguage(lan))}
          >
            <button title={lan.title}>{lan.title}</button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default LanguageDropdown;
