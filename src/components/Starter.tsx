import ICardInfo from "../types";

interface IStarterProps {
  cardInfo: ICardInfo;
}

const Starter: React.FC<IStarterProps> = ({ cardInfo }) => {
  return (
    <section className="w-full bg-main-mobile-bg  xl:bg-main-desktop-bg bg-no-repeat bg-cover xl:min-h-[90rem]  xl:w-[48.3rem] xl:m-[0] xl:mr-[34.9rem] xl:justify-self-flex-start">
      <div className="w-[37.5rem] mx-auto  h-[24rem] relative xl:w-full ">
        <div className="w-[28.6rem] h-[15.7rem] absolute top-[3.6rem] right-[1.6rem] bg-card-back bg-cover  pt-[7.1rem] pl-[22.9rem] xl:pt-[11.1rem] xl:pl-[35.8rem] xl:w-[44.7rem] xl:h-[24.5rem] xl:top-[46.9rem] xl:left-[25.8rem]">
          <span className="text-[0.9rem] text-[#fff] tracking-[1.2px] font-medium xl:text-[1.4rem] xl:tracking-[2px]">
            {cardInfo.cvc || "000"}
          </span>
        </div>
        <div className="w-[28.6rem] h-[15.7rem] absolute bottom-[-4.26rem] left-[1.7rem]  bg-card-front bg-cover px-[2rem] pt-[1.76rem] pb-[2rem] xl:w-[44.7rem] xl:h-[24.5rem] xl:top-[18.7rem] xl:left-[16.4rem]">
          <img
            src="./images/card-logo.svg"
            alt=""
            className="h-[3rem] mb-[3.7rem] xl:h-[4.7rem] xl:mb-[6.4rem]"
          />
          <span className=" text-[#fff] text-[1.8rem] tracking-[2.2px] font-medium xl:text-[2.8rem] xl:tracking-[3.42px]">
            {cardInfo.cardNumber || "0000 0000 0000 0000"}
          </span>
          <div className="flex justify-between mt-[1.7rem] text-[0.9rem] text-[#fff] tracking-[1.29px] font-medium xl:text-[1.4rem] xl:tracking-[2px] xl:mt-[2.55rem]">
            <span>{cardInfo.holderName || "JANE APPLESEED"}</span>
            <span className="xl:text-[1.4rem] xl:tracking-[2px]">
              {cardInfo.expMonth || "00"}/{cardInfo.expYear || "00"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Starter;
