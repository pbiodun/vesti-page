import AddIcon from "../assets/logo-icons/vuesax/linear/add.svg";
import DashIcon from "../assets/logo-icons/vuesax/linear/minus.svg";
import { FAQS } from "../constant/FaqFile";
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

const FaqContent = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <div className="">
      <div className="container w-[90%] mx-auto">
        <div className="pt-24">
          {FAQS.map((faq) => (
            <Fragment>
              <Accordion
                key={faq.index}
                open={open === faq.index}
                icon={
                  <Icon id={faq.index} open={open} animate={customAnimation} />
                }
                className="bg-[#F6F7FF] rounded-md px-3 py-6 mb-7"
              >
                <AccordionHeader
                  className="text-[#14290A] !border-b-0 text-lg py-0"
                  onClick={() => handleOpen(faq.index)}
                >
                  <p>
                    <span className="text-[#B6BBC9]">{faq.number}</span>{" "}
                    {faq.title}
                  </p>
                </AccordionHeader>
                <AccordionBody className="text-[#8B8C8C] font-fontLight text-sm px-7 py-2 text-left">
                  {faq.body}
                </AccordionBody>
              </Accordion>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqContent;
