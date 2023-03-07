import CreditCard from "../assets/logo-icons/credit-card-1.png";
import Wallet from "../assets/logo-icons/wallet-1.svg";
import Travel from "../assets/logo-icons/travel.png";
import Transaction from "../assets/logo-icons/transaction-2.png";
import Mortgage from "../assets/logo-icons/mortgage.png";
import Speedometer from "../assets/logo-icons/speedometer.png";
import { useState } from "react";

const SERVICE = { FINANCIAL: "Financial", MIGRATION: "Migration" };

const ProductsDropdown = () => {
  const [service, setService] = useState(SERVICE.FINANCIAL);
  return (
    <div className="relative">
      <div className="absolute left-[48%] top-4 bg-[#F6F8FF] w-4 h-4 rotate-45 rounded-sm"></div>
      <div className="bg-[#F6F8FF] lg:w-[700px] min-h-[45vh] absolute top-[20px] left-0 rounded-lg p-[10px] flex flex-col lg:flex-row gap-2">
        {/* <!----> */}
        {/* Left Side Card */}

        <div className="rounded-lg w-[55%] flex flex-col gap-1">
          <div
            className={`${
              service === SERVICE.FINANCIAL ? "bg-white" : ""
            } p-5 relative rounded-md`}
            onClick={() => setService(SERVICE.FINANCIAL)}
          >
            <h1 className="font-fontSemi text-base text-[#060E42]">
              Financial Services
            </h1>
            <p className="font-fontLight text-xs text-[#16216B]">
              Millions of people moving to new countries use Vesti for accessing
              financial services like bank accounts, debit and credit cards.
            </p>
            <div
              className={
                service === SERVICE.FINANCIAL ? `visible` : "invisible"
              }
            >
              <div className="absolute left-[100%] top-[44%] bg-[#F6F8FF] w-4 h-4 rotate-45 rounded-sm"></div>
              <div className="absolute left-[97%] top-[44%] bg-[#fff] w-4 h-4 rotate-45 rounded-sm"></div>
            </div>
          </div>
          <div
            className={`${
              service === SERVICE.MIGRATION ? "bg-white" : ""
            } p-5 relative`}
            onClick={() => setService(SERVICE.MIGRATION)}
          >
            <h1 className="font-fontSemi text-base text-[#060E42]">
              Migration Services
            </h1>
            <p className="font-fontLight text-xs text-[#16216B]">
              Millions of people moving to new countries use Vesti for accessing
              financial services like bank accounts, debit and credit cards.
            </p>
            <div
              className={
                service === SERVICE.MIGRATION ? `visible` : "invisible"
              }
            >
              <div className="absolute left-[100%] top-[44%] bg-[#F6F8FF] w-4 h-4 rotate-45 rounded-sm"></div>
              <div className="absolute left-[97%] top-[44%] bg-[#fff] w-4 h-4 rotate-45 rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* Right Side Card */}

        <div className="bg-white rounded-lg w-[65%] p-6">
          {service === SERVICE.FINANCIAL ? (
            <div className="flex flex-col gap-8">
              <div className="flex gap-4 opacity-50 hover:opacity-100">
                <div className="">
                  <img className="" src={CreditCard} alt="creditcard" />
                </div>
                <div>
                  <h1 className="text-[#16216B] font-fontReg text-base pb-1">
                    Vesti Cards
                  </h1>
                  <p className="text-[#303D94] font-fontLight text-xs">
                    The latest industry news, updates and info
                  </p>
                </div>
              </div>
              <div className="flex gap-4 opacity-50 hover:opacity-100">
                <div className="">
                  <img className="" src={Wallet} alt="wallet" />
                </div>
                <div>
                  <h1 className="text-[#16216B] font-fontReg text-base pb-1">
                    Vesti Wallets
                  </h1>
                  <p className="text-[#303D94] font-fontLight text-xs">
                    Learn how our customers are making big changes.
                  </p>
                </div>
              </div>
            </div>
          ) : null}

          {/* Section 2  */}

          {service === SERVICE.MIGRATION ? (
            <div className="flex flex-col gap-8">
              <div className="flex gap-4 opacity-50 hover:opacity-100">
                <div className="">
                  <img className="" src={Travel} alt="travel-icon" />
                </div>
                <div>
                  <h1 className="text-[#16216B] font-fontReg text-base pb-1">
                    Migration Pathways
                  </h1>
                  <p className="text-[#303D94] font-fontLight text-xs">
                    The latest industry news, updates and info
                  </p>
                </div>
              </div>
              <div className="flex gap-4 opacity-50 hover:opacity-100">
                <div className="">
                  <img className="" src={Transaction} alt="transaction-icon" />
                </div>
                <div>
                  <h1 className="text-[#16216B] font-fontReg text-base pb-1">
                    Migration Fees
                  </h1>
                  <p className="text-[#303D94] font-fontLight text-xs">
                    Learn how our customers are making big changes.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 opacity-50 hover:opacity-100">
                <div className="">
                  <img className="" src={Mortgage} alt="mortgage-icon" />
                </div>
                <div>
                  <h1 className="text-[#16216B] font-fontReg text-base pb-1">
                    Migration Loans
                  </h1>
                  <p className="text-[#303D94] font-fontLight text-xs">
                    The latest industry news, updates and info
                  </p>
                </div>
              </div>
              <div className="flex gap-4 opacity-50 hover:opacity-100">
                <div className="">
                  <img className="" src={Speedometer} alt="speedometer-icon" />
                </div>
                <div>
                  <h1 className="text-[#16216B] font-fontReg text-base pb-1">
                    Credit score
                  </h1>
                  <p className="text-[#303D94] font-fontLight text-xs">
                    Learn how our customers are making big changes.
                  </p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProductsDropdown;
