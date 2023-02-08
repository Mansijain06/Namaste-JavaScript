import { UilAngleDown } from "@iconscout/react-unicons";
import { UilAngleUp } from "@iconscout/react-unicons";
import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border-solid border-2 rounded-md drop-shadow-sm w-8/12 m-auto mb-8">
      <p
        className="flex justify-between p-4 font-bold"
        onClick={() => setIsVisible()}
      >
        <span>{title}</span>
        {!isVisible ? <UilAngleDown /> : <UilAngleUp />}
      </p>
      {isVisible && <p className="p-4">{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("cuisines");
  return (
    <>
      <Section
        isVisible={visibleSection === "cuisines"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "cuisines" ? "" : "cuisines")
        }
        title="Popular cuisines near me"
        description="Bakery food near meBeverages food near meBiryani food near meBurger food near meCafe food near meChinese food near meCoffee food near meDesserts food near meIce Cream food near meMithai food near meMomos food near meMughlai food near meNorth Indian food near mePizza food near meSandwich food near meShake food near meSichuan food near meSouth Indian food near meStreet food near meTea food near me"
      />
      <Section
        isVisible={visibleSection === "restaurant"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "restaurant" ? "" : "restaurant")
        }
        title="Popular restaurant types near me"
        description="Bakeries near meBars near meBeverage Shops near meBhojanalya near meCafés near meCasual Dining near meClubs near meCocktail Bars near meDessert Parlors near meDhabas near meFine Dining near meFood Courts near meFood Trucks near meKiosks near meLounges near mePaan Shop near mePubs near meQuick Bites near meSweet Shops near me"
      />
      <Section
        isVisible={visibleSection === "toprestaurant"}
        setIsVisible={() =>
          setVisibleSection(
            visibleSection === "toprestaurant" ? "" : "toprestaurant"
          )
        }
        title="Top Restaurant Chainse"
        description="Domino's KFCMc Donald's Pizza Hut WOW! Momo"
      />
    </>
  );
};

export default Instamart;
