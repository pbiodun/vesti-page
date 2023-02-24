const CardAd = (props) => {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className={props.addStyle}>
          {props.leftSide}

          <div className="pt-16 pr-20">
            <img className="w-full" src={props.image} alt="vesti-mastercard" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAd;
