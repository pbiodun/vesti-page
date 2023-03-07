import Button from "../components/Button";

const ErrorPage = () => {
  return (
    <div className="container mx-auto py-44 text-center text-headcol">
      <h1 className="text-2xl pb-2 font-fontSemi">
        {" "}
        <span className="text-5xl font-fontBold">Oops!</span> <br /> That page
        does not exist...
      </h1>
      <p className="font-fontReg text-xl pb-3">Why not go back home?</p>
      <Button link="/" CTA="Home" styles="mx-auto p-3" width="30%" />
    </div>
  );
};

export default ErrorPage;
