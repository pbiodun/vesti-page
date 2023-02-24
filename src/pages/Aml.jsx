import VestiDocs from "../components/VestiDocs";
import DownloadApp from "../views/DownloadApp";

const Aml = () => {
  return (
    <div>
      <VestiDocs
        title="ANTI-MONEY LAUNDERING"
        date="Last Updated: Sept 25, 2022"
        link1="TERMS OF SERVICE"
        link2="PRIVACY POLICY"
        link3="AML"
        path1="/tos"
        path2="/privacy-policy"
        path3="/aml"
        mainBody={
          <div className="text-justify text-[#14290A]">
            <p className="">
              It is the Policy of Vesti Technology Solutions Inc (Vesti) to
              actively prohibits and prevents money laundering and the funding
              of terrorist or criminal activities. Money laundering is generally
              defined as the concealment of the origins of illegally obtained
              money, typically by means of transfers involving foreign banks or
              legitimate businesses. Vesti’s AML policy conforms with the tenets
              of the rules enacted by the U.S Department of Treasury, Financial
              Crimes Enforcement Network, 31 CFR part 103, Section 120.140c,
              under the Bank Secrecy Act (BSA) and its implementing regulations.
            </p>
            <p className="py-10">
              Considering the risks associated with carrying out our business,
              our AML policies, practices, and internal controls are designed to
              ensure compliance with all applicable BSA regulations and FINRA
              rules and will be reviewed and updated on a regular basis to
              ensure appropriate policies, practices and internal controls are
              in place to account for both changes in regulations and changes in
              our business.
            </p>
            <p>
              In the same vein, we have appointed an AML Compliance Officer who
              will be responsible to lead our AML Committee, ensure that the AML
              program is executed in a manner that is efficient, and train
              employees in the program and related processes.
            </p>
            <p className="py-10">
              The AML Compliance Person will also ensure that the firm keeps and
              maintains all the required AML records and will ensure that
              Suspicious Activity Reports (SARs) are filed with the Financial
              Crimes Enforcement Network (FinCEN) when appropriate.
            </p>
            <p>
              The AML Compliance Person is vested with full responsibility and
              authority to enforce the firm’s AML program. The AML compliance
              officer will also ensure that all employees serve as money
              laundering watchdogs and whistle blowers, with the responsibility
              of exposing all activities that may appear suspicious.
            </p>
            <p className="py-10">
              For more information about Vesti’s AML program and related
              processes, please contact{" "}
              <span className="text-[#67A948]">aml-compliance@wevesti.com</span>
            </p>
          </div>
        }
      />
      <DownloadApp />
    </div>
  );
};

export default Aml;
