import React, { useState, useEffect } from "react";

export const settingContext = React.createContext();

function settingsContext(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [elementsPerPage, setElementsPerPage] = useState(2);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showCompleted, setShowCompleted] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [detectStorge, setDetectStorge] = useState(0);

  function holdValues(e) {
    e.preventDefault();
    const obj = {
      elementsPerPage: e.target.pageNumber.value,
      showCompleted: e.target.incomplete.value,
    };
    localStorage.setItem("settings", JSON.stringify(obj));
    setDetectStorge(detectStorge + 1);
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    let localData = localStorage.getItem("settings");
    if (localData) {
      let settings = JSON.parse(localData);
      setElementsPerPage(Number(settings.elementsPerPage));
      if (settings.showCompleted === "true") {
        setShowCompleted(true);
      }
      if (settings.showCompleted === "false") {
        setShowCompleted(false);
      }
    }
  }, [detectStorge]);

  const state = {
    elementsPerPage,
    showCompleted,
    detectStorge,
    setShowCompleted,
    setElementsPerPage,
    holdValues,
  };

  return (
    <settingContext.Provider value={state}>
      {props.children}
    </settingContext.Provider>
  );
}

export default settingsContext;