import React, { useState } from "react";
import FirstTab from "./ModalTabs/FirstTab";
import SecondTab from "./ModalTabs/SecondTab";
import ThirdTab from "./ModalTabs/ThirdTab";
import FourthTab from "./ModalTabs/FourthTab";
import FifthTab from "./ModalTabs/FifthTab";
import FifthTabWithNoUsedBefore from "./ModalTabs/FifthTabWithNoUsedBefore";
import Recomendations from "./ModalTabs/Recomendations";
import FinalStage from "./ModalTabs/FinalStage";

export default function ModalData() {
  const [currentTab, setCurrentTab] = useState(1);

  const [inputs, setInputs] = useState({
    movingFrom: "",
    movingTo: "",
    name: "",
    email: "",
    telephone: "",
    isOurServiceUsed: null,
    recomended: null,
    recomendedName: "",
    bestTimeForContact: "asap",
  });
  const handler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((prev) => ({ ...prev, [name]: value }));
  };
  const handlerWithName = (name, value) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
  };
  const conditionsToShowFifthTab = [
    currentTab == 5 && inputs.isOurServiceUsed == "yes",
    currentTab == 6 && inputs.recomended == "no",
    currentTab == 7 && inputs.recomendedName.length > 0,
  ];
  const conditionToShowFinalTab = [
    currentTab == 8,
    currentTab == 6 && inputs.isOurServiceUsed == "yes",
    currentTab == 7 &&
      inputs.isOurServiceUsed == "no" &&
      inputs.recomended == "no",
  ];

  const isAnyConditionMetForFifthTab = conditionsToShowFifthTab.some(
    (condition) => condition == true
  );
  const isAnyConditionMetForFinalTab = conditionToShowFinalTab.some(
    (condition) => condition == true
  );
  return (
    <div className="p-10 bg-white shadow-xl text-dark rounded-xl">
      <div className="">
        {currentTab == 1 && (
          <FirstTab
            handler={handler}
            handlerWithName={handlerWithName}
            inputs={inputs}
          />
        )}
        {currentTab == 2 && <SecondTab handler={handler} inputs={inputs} />}
        {currentTab == 3 && <ThirdTab handler={handler} inputs={inputs} />}
        {currentTab == 4 && (
          <FourthTab
            handlerWithName={handlerWithName}
            isOurServiceUsed={inputs.isOurServiceUsed}
          />
        )}
        {currentTab == 5 && inputs.isOurServiceUsed == "no" && (
          <FifthTabWithNoUsedBefore
            handlerWithName={handlerWithName}
            recomended={inputs.recomended}
          />
        )}
        {currentTab == 6 && inputs.recomended == "yes" && (
          <Recomendations
            handler={handler}
            recomendedName={inputs.recomendedName}
          />
        )}
        {/* flex-wrap gap-x-10 gap-y-4 */}
        {console.log(currentTab, inputs)}
        {isAnyConditionMetForFifthTab && (
          <FifthTab handler={handler} inputs={inputs} />
        )}
        {isAnyConditionMetForFinalTab && (
          <FinalStage
            handlerWithName={handlerWithName}
            bestTimeForContact={inputs.bestTimeForContact}
          />
        )}
      </div>

      <button
        type="button"
        className="flex items-center px-8 py-2 mt-6 font-semibold text-white uppercase rounded-lg lg:text-lg bg-blue"
        onClick={() => setCurrentTab(currentTab + 1)}
      >
        {isAnyConditionMetForFinalTab ? "Изпрати" : "Следващ"}
      </button>
    </div>
  );
}
