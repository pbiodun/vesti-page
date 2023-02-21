import DashIcon from "../assets/logo-icons/dash-icon.svg";
import AddIcon from "../assets/logo-icons/add-icon.svg";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

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
        <div className="grid lg:grid-cols-2 gap-x-44 py-14">
          <div className="pt-3 col-span-1">
            <h1 className="text-3xl font-medium lg:w-[70%]">
              Some of the things you may want to know
            </h1>
            <p className="text-lg font-light">
              We answered questions so you don’t have to ask them
            </p>
          </div>
          <div className="col-span-1">
            <Fragment>
              <Accordion
                open={open === 1}
                icon={<Icon id={1} open={open} animate={customAnimation} />}
              >
                <AccordionHeader
                  className="text-[#ffffff]"
                  onClick={() => handleOpen(1)}
                >
                  What is Vesti?
                </AccordionHeader>
                <AccordionBody className="text-[#ffffff]">
                  With Vesti you are given the opportunity to do a short-term
                  investment for relocation and a long
                </AccordionBody>
              </Accordion>
              <Accordion
                open={open === 2}
                icon={<Icon id={2} open={open} animate={customAnimation} />}
              >
                <AccordionHeader
                  className="text-[#ffffff]"
                  onClick={() => handleOpen(2)}
                >
                  What can I do with Vesti?
                </AccordionHeader>
                <AccordionBody className="text-[#ffffff]">
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion
                open={open === 3}
                icon={<Icon id={3} open={open} animate={customAnimation} />}
              >
                <AccordionHeader
                  className="text-[#ffffff]"
                  onClick={() => handleOpen(3)}
                >
                  How do I pay for WES on Vesti?
                </AccordionHeader>
                <AccordionBody className="text-[#ffffff]">
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion
                open={open === 4}
                icon={<Icon id={4} open={open} animate={customAnimation} />}
              >
                <AccordionHeader
                  className="text-[#ffffff]"
                  onClick={() => handleOpen(4)}
                >
                  Does Vesti sell cryptocurrency?
                </AccordionHeader>
                <AccordionBody className="text-[#ffffff]">
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
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
