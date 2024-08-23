import Starter from "./components/Starter";
import CardForm from "./components/CardForm";
import Success from "./components/Success";
import { useState } from "react";
function App() {
  const [cardInfo, setCardInfo] = useState({
    holderName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });
  const [submited, setSubmited] = useState(false);

  return (
    <>
      <main className="xl:flex ">
        <Starter cardInfo={cardInfo} />
        {submited ? (
          <Success setSubmited={setSubmited} />
        ) : (
          <CardForm
            cardInfo={cardInfo}
            setCardInfo={setCardInfo}
            setSubmited={setSubmited}
          />
        )}
      </main>
    </>
  );
}

export default App;
