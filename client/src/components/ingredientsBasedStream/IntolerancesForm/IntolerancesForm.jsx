import React, { useContext } from 'react';
import { FormContext } from '../../../context/FormContext';
import './IntolerancesForm.css';
import IntolerancesCheckboxes from './IntolerancesCheckboxes/IntolerancesCheckboxes'; 


function IntolerancesForm() {
  
  const { selectedIntolerances, setSelectedIntolerances } = useContext(FormContext)
  const { intoleranceExisting, setIntoleranceExisting } = useContext(FormContext)



   //pass to Inolerances form to update intolerances choice
   const handleIntolerancesDecision = (choice) => {
      setIntoleranceExisting(choice);
      choice === false && setSelectedIntolerances([]);
  }; 

    //update selected intolerances array 
    const handleSelectedIntolerancesChange = (intolerance) => {
      setSelectedIntolerances((prevSelectedIntolerances) => {
        if (prevSelectedIntolerances.includes(intolerance)) {
          const updatedSelectedIntolerances = prevSelectedIntolerances.filter(item => item !== intolerance);
          return updatedSelectedIntolerances
        } else {
          const updatedSelectedIntolerances = [...prevSelectedIntolerances, intolerance];
          return updatedSelectedIntolerances
        }
      });
    };

  return (
    <div className="intolerances-form">
      <fieldset>
        <legend>Intolerances</legend>
        <label htmlFor="intolerances-decision">Do you have any intolerances?</label><br />
        <button
          type="button"
          className={`toggleButton ${intoleranceExisting === true ? 'active' : ''}`}
          onClick={() => handleIntolerancesDecision(true)}
          aria-pressed={intoleranceExisting === false}
        >
          Yes
        </button>
        
        <button
          type="button"
          className={`toggleButton ${intoleranceExisting === false ? 'active' : ''}`}
          onClick={() => handleIntolerancesDecision(false)}
          aria-pressed={intoleranceExisting === false}
        >
          No
        </button>

        {intoleranceExisting === true && (
          <IntolerancesCheckboxes
            intoleranceExisting={intoleranceExisting}
            selectedIntolerances={selectedIntolerances}
            onIntolerancesDecisionChange={handleIntolerancesDecision}
            onSelectedIntolerancesChange={handleSelectedIntolerancesChange}
          />
        )}
      </fieldset>
    </div>
  );
}

export default IntolerancesForm;

