const CardAd = (props) => {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className={props.addStyle}>
          {props.leftSide}

          <div className="pr-16 pt-16">
            <img className="" src={props.image} alt="vesti-mastercard" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAd;
