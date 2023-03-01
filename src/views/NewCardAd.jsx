import CardAds from "../components/CardAds";
import PhoneNot from "../assets/images/phone-notif.png";

const NewCardAd = () => {
  return (
    <>
      <div className="container mx-auto py-12">
        <CardAds
          title="AVAILABLE TO REQUEST"
          mainDesc="You are in control with the Vesti Virtual Dollar Card"
          details="You can rest easy knowing that only you have access to your card information. To ensure that you have total control over them, we use high-level encryption services."
          learnMore
          image={PhoneNot}
          link="#"
        />
      </div>
    </>
  );
};

export default NewCardAd;
