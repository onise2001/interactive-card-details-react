interface ISuccessProps {
  setSubmited: React.Dispatch<React.SetStateAction<boolean>>;
}

const Success: React.FC<ISuccessProps> = ({ setSubmited }) => {
  return (
    <section className=" flex flex-col items-center mt-[9rem] px-[2.4rem] xl:pt-[27.5rem] xl:p-[0] xl:w-[38.1rem]">
      <img src="./images/icon-complete.svg" alt="" />
      <h2 className="text-[2.8rem] font-medium tracking-[3.42px] text-[#21092f] mt-[3.5rem]">
        THANK YOU!
      </h2>
      <p className="text-[1.8rem] font-medium text-center text-[#8f8694] mt-[1.6rem]">
        We’ve added your card details
      </p>
      <button
        className="text-[1.8rem] text-[#fff] font-medium w-full py-[1.5rem] bg-purple-bg rounded-[8px] mt-[4.8rem] hover:cursor-pointer"
        onClick={() => setSubmited(false)}
      >
        Continue
      </button>
    </section>
  );
};

export default Success;
