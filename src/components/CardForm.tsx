import { useState } from "react";
import ICardInfo from "../types";
import { InputMask } from "@react-input/mask";

interface ICardFormProps {
  cardInfo: ICardInfo;
  setCardInfo: React.Dispatch<
    React.SetStateAction<{
      holderName: string;
      cardNumber: string;
      expMonth: string;
      expYear: string;
      cvc: string;
    }>
  >;
  setSubmited: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardForm: React.FC<ICardFormProps> = ({
  cardInfo,
  setCardInfo,
  setSubmited,
}) => {
  const [errors, setErrors] = useState({
    holderName: "",
    cardNumber: "",
    expYear: "",
    expMonth: "",
    cvc: "",
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardInfo({
      ...cardInfo,
      [event?.target.name]: event.target.value.toUpperCase(),
    });

    setErrors({
      ...errors,
      [event.target.name]: "",
    });
  };

  const checkErrors = () => {
    let error = false;
    const tmpErrors = {
      holderName: "",
      cardNumber: "",
      expYear: "",
      expMonth: "",
      cvc: "",
    };
    if (!cardInfo.holderName) {
      tmpErrors.holderName = "Can't be blank";

      error = true;
    }
    if (cardInfo.cardNumber.length < 19) {
      tmpErrors.cardNumber = "Must be 16 number long";
      error = true;
    }
    if (!cardInfo.expMonth || !cardInfo.expYear) {
      tmpErrors.expMonth = "Can't be blank";
      tmpErrors.expYear = "Can't be blank";

      error = true;
    }

    if (!cardInfo.cvc) {
      tmpErrors.cvc = "Can't be blank";
      error = true;
    }

    setErrors(tmpErrors);
    return error;
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!checkErrors()) {
      setCardInfo({
        holderName: "",
        cardNumber: "",
        expYear: "",
        expMonth: "",
        cvc: "",
      });
      setSubmited(true);
    }
    console.log(errors);
  };

  return (
    <section className=" flex justify-center  items-center px-[2.4rem] pt-[9rem] xl:pt-[0] xl:px-[0]">
      <form
        className="max-w-[37.5rem]  flex flex-col gap-[1.5rem] xl:gap-[2.6rem] xl:max-w-[38.1rem]  "
        onSubmit={(event) => {
          submit(event);
        }}
      >
        <div>
          <label
            htmlFor="holderName"
            className="text-[1.2rem] text-label-color mb-[0.9rem] font-medium"
          >
            CARDHOLDER NAME
          </label>
          <input
            type="text"
            name="holderName"
            id="holderName"
            placeholder="e.g. Jane Appleseed"
            onChange={(event) => {
              handleInput(event);
            }}
            value={cardInfo.holderName}
            className="text-[1.8rem] w-full py-[1.1rem] px-[1.6rem] border border-[#dfdee0] rounded-[8px] mb-[0.8rem] "
          />
          {errors.holderName ? (
            <span className="text-[1.2rem] font-medium text-[#ff5050] ">
              {errors.holderName}
            </span>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="cardNumber"
            className="text-[1.2rem] text-label-color mb-[0.9rem] font-medium"
          >
            CARD NUMBER
          </label>
          <InputMask
            type="text"
            name="cardNumber"
            id="cardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={(event) => {
              handleInput(event);
            }}
            value={cardInfo.cardNumber}
            className="text-[1.8rem] w-full py-[1.1rem] px-[1.6rem] border border-[#dfdee0]  mb-[0.8rem] rounded-[8px]"
            mask="____ ____ ____ ____"
            replacement={{ _: /[0-9]/ }}
          />
        </div>
        {errors.cardNumber && (
          <span className="text-[1.2rem] font-medium text-[#ff5050]">
            {errors.cardNumber}
          </span>
        )}

        <div className="flex">
          <div className="flex flex-col mr-[1.1rem] xl:mr-[2rem] ">
            <label
              htmlFor="expDate"
              className="text-[1.2rem] text-label-color mb-[0.9rem] font-medium"
            >
              Exp. Date (MM/YY)
            </label>
            <div>
              <InputMask
                type="text"
                name="expMonth"
                id="expDate"
                placeholder="MM"
                onChange={(event) => {
                  handleInput(event);
                }}
                value={cardInfo.expMonth}
                className="mr-[0.8rem] text-[1.8rem] max-w-[7.2rem] py-[1.1rem] pl-[1.6rem] border border-[#dfdee0] rounded-[8px] xl:max-w-[8rem] xl:mr-[1rem]"
                mask="__"
                replacement={{ _: /[0-9]/ }}
              />

              <InputMask
                type="text"
                name="expYear"
                id="expDate"
                placeholder="YY"
                onChange={(event) => {
                  handleInput(event);
                }}
                value={cardInfo.expYear}
                className="text-[1.8rem] max-w-[7.2rem] py-[1.1rem] pl-[1.6rem] border border-[#dfdee0] rounded-[8px] xl:max-w-[8rem]"
                mask="__"
                replacement={{ _: /[0-9]/ }}
              />
            </div>
            {errors.expMonth || errors.expYear ? (
              <span className="text-[1.2rem] font-medium text-[#ff5050] mt-[0.8rem]">
                {errors.expMonth || errors.expYear}
              </span>
            ) : null}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="cvc"
              className="text-[1.2rem] text-label-color mb-[0.9rem] font-medium"
            >
              CVC
            </label>
            <InputMask
              type="text"
              name="cvc"
              id="cvc"
              placeholder="e.g. 123"
              onChange={(event) => {
                handleInput(event);
              }}
              value={cardInfo.cvc}
              className="text-[1.8rem] max-w-[16.4rem] py-[1.1rem] pl-[1.6rem] border border-[#dfdee0] rounded-[8px] xl:max-w-[19.1rem]"
              mask="___"
              replacement={{ _: /[0-9]/ }}
            />
            {errors.cvc ? (
              <span className="text-[1.2rem] font-medium text-[#ff5050] mt-[0.8rem]">
                {errors.cvc}
              </span>
            ) : null}
          </div>
        </div>

        <button
          type="submit"
          className="py-[1.5rem] w-full text-[#fff] text-[1.8rem] font-medium bg-purple-bg rounded-[8px] mt-[0.8rem]"
        >
          Confirm
        </button>
      </form>
    </section>
  );
};

export default CardForm;
