import { useDispatch, useSelector } from "react-redux";
import { currency } from "../data";
import { onChangeCurrency } from "@/context/features";

const CurrencyDropdown = ({}) => {
  const dispatch = useDispatch();
  const currentCurrency = useSelector((store) => store.currency);

  return (
    <>
      <a href="#">
        <div className="flex justify-center items-center gap-2 px-2 py-1">
          <span className="h-4 w-4">
            <img
              src={currentCurrency.currency_image}
              alt={currentCurrency.currency_name}
            />
          </span>
          <span>{currentCurrency.currency}</span>
        </div>
        <span className="icon-small">
          <i className="ri-arrow-down-s-line"></i>
        </span>
      </a>
      <ul>
        {currency.map((cur) => (
          <li
            className={`${
              cur.id === currentCurrency.currency
                ? "bg-slate-300"
                : " hover:bg-slate-200"
            } duration-200`}
            key={cur.id}
            onClick={() => dispatch(onChangeCurrency(cur))}
          >
            <button
              title={cur.currency_name}
              className="flex justify-center items-center gap-2 px-2 py-1"
            >
              <span className="h-4 w-4">
                <img src={cur.image} alt={cur.currency_name} />
              </span>
              <span>{cur.id}</span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default CurrencyDropdown;
