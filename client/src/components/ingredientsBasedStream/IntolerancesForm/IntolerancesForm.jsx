import React from 'react';
import './IntolerancesForm.css';
import IntolerancesCheckboxes from './IntolerancesCheckboxes/IntolerancesCheckboxes'; 

function IntolerancesForm(props) {

  return (
    <div className="intolerances-form">
      <label>Intolerances?</label><br />
      <button
        className={`toggleButton ${props.intoleranceExisting === true ? 'active' : ''}`}
        onClick={() => props.onIntolerancesDecisionChange(true)}
      >
        Yes
      </button>
      
      <button
        className={`toggleButton ${props.intoleranceExisting === false ? 'active' : ''}`}
        onClick={() => props.onIntolerancesDecisionChange(false)}
      >
        No
      </button>
      {props.intoleranceExisting === true && <IntolerancesCheckboxes intoleranceExisting={props.intoleranceExisting} selectedIntolerances={props.selectedIntolerances} onIntolerancesChange={props.onIntolerancesChange} onSelectedIntolerancesChange = {props.onSelectedIntolerancesChange} />}
    </div>
  );
}

export default IntolerancesForm;
