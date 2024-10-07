import React from 'react';
import './IntolerancesForm.css';
import IntolerancesCheckboxes from './IntolerancesCheckboxes/IntolerancesCheckboxes'; 

function IntolerancesForm(props) {
  return (
    <div className="intolerances-form">
      <fieldset>
        <legend>Intolerances</legend>
        <label htmlFor="intolerances-decision">Do you have any intolerances?</label><br />
        <button
          type="button"
          className={`toggleButton ${props.intoleranceExisting === true ? 'active' : ''}`}
          onClick={() => props.onIntolerancesDecisionChange(true)}
          aria-pressed={props.intoleranceExisting === false}
        >
          Yes
        </button>
        
        <button
          type="button"
          className={`toggleButton ${props.intoleranceExisting === false ? 'active' : ''}`}
          onClick={() => props.onIntolerancesDecisionChange(false)}
          aria-pressed={props.intoleranceExisting === false}
        >
          No
        </button>

        {props.intoleranceExisting === true && (
          <IntolerancesCheckboxes
            intoleranceExisting={props.intoleranceExisting}
            selectedIntolerances={props.selectedIntolerances}
            onIntolerancesChange={props.onIntolerancesChange}
            onSelectedIntolerancesChange={props.onSelectedIntolerancesChange}
          />
        )}
      </fieldset>
    </div>
  );
}

export default IntolerancesForm;

