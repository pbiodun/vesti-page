import DashIcon from "../assets/logo-icons/dash-icon.svg";
import AddIcon from "../assets/logo-icons/add-icon.svg";
import { BsArrowUpRight } from "react-icons/bs";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Icon({ id, open }) {
  return id === open ? (
    <img src={DashIcon} alt="minus" className="!w-[50px]" />
  ) : (
    <img src={AddIcon} alt="plus" className="!w-[50px]" />
  );
}

const FaqSection = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <div className="bg-[#060E42] text-[#ffffff]">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-x-44 gap-y-12 py-14">
          <div className="pt-3 col-span-1">
            <h1 className="text-3xl lg:w-[70%] font-fontSemi">
              Some of the things you may want to know
            </h1>
            <div className="text-lg font-fontReg pt-6 flex items-end">
              <div>
                <Link
                  className="hover:underline hover:text-vestigreen flex items-center"
                  to="/faqs"
                >
                  Frequently asked questions
                  <BsArrowUpRight />
                </Link>
              </div>
              {/* &nbsp; so you don’t have to ask them */}
            </div>
          </div>
          <div className="col-span-1">
            <Fragment>
              <Accordion
                open={open === 1}
                icon={<Icon id={1} open={open} animate={customAnimation} />}
              >
                <AccordionHeader
                  className="text-[#ffffff] hover:text-vestigreen fontReg"
                  onClick={() => handleOpen(1)}
                >
                  What can I do with Vesti?
                </AccordionHeader>
                <AccordionBody className="text-[#ffffff] font-fontLight">
                  With Vesti you get the opportunity to be financially stable in
                  life, whether you choose to move abroad
                  (temporarily/permanently) or stay back at home. On Vesti you
                  can pay for difficult Immigration related payments
                  (international Payments) in your local currency, seamlessly.
                </AccordionBody>
              </Accordion>
              <Accordion
                open={open === 2}
                icon={<Icon id={2} open={open} animate={customAnimation} />}
              >
                <AccordionHeader
                  className="text-[#ffffff] hover:text-vestigreen font-fontReg"
                  onClick={() => handleOpen(2)}
                >
                  Is my money secure with Vesti?
                </AccordionHeader>
                <AccordionBody className="text-[#ffffff] font-fontLight">
                  Yes, your money is secured on Vesti because they with
                  integrity and the company is duly registered. Vesti uses bank
                  level security, PIN authentication, and end to end encryption.
                  Even the team at Vesti can’t see your password or PIN.
                </AccordionBody>
              </Accordion>
              <Accordion
                open={open === 3}
                icon={<Icon id={3} open={open} animate={customAnimation} />}
              >
                <AccordionHeader
                  className="text-[#ffffff] hover:text-vestigreen font-fontReg"
                  onClick={() => handleOpen(3)}
                >
                  How do I pay for WES on Vesti?
                </AccordionHeader>
                <AccordionBody className="text-[#ffffff] font-fontLight">
                  All you need to do is deposit money into your Naira or Dollar
                  Wallet. You can deposit into your wallet by using your credit
                  cards or debit cards or through Barter, USSD, Pay Pal and
                  other methods. You can also read a more detailed instruction.
                </AccordionBody>
              </Accordion>
              <Accordion
                open={open === 4}
                icon={<Icon id={4} open={open} animate={customAnimation} />}
              >
                <AccordionHeader
                  className="text-[#ffffff] hover:text-vestigreen font-fontReg text-left"
                  onClick={() => handleOpen(4)}
                >
                  Can I send dollar to someone with Vesti?
                </AccordionHeader>
                <AccordionBody className="text-[#ffffff] font-fontLight">
                  Yes, you can. There are two ways. You can withdraw from your
                  dollar wallet (with appropriate charges ) into your
                  domiciliary account. Also you can send money to the other
                  person’s Vesti Wallet, and they can use on Vesti or outside
                  Vesti (Withdraw to a Dollar account).
                </AccordionBody>
              </Accordion>
            </Fragment>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
