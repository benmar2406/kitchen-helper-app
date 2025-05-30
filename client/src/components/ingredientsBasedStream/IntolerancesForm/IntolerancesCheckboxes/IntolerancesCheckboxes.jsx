import './IntolerancesCheckboxes.css';

function IntolerancesCheckboxes(props) {

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    props.onSelectedIntolerancesChange(value);
  };
  
  return (
    <fieldset className="IntolerancesCheckboxes">
      <legend>Choose your intolerances</legend>
      <div role='form' className='checkbox'>
        <label className='intolerance-label'>
          <input 
            type="checkbox" 
            className='checkbox-input'
            name="allergen" 
            value="Dairy" 
            onChange={handleCheckboxChange}
            checked={props.selectedIntolerances.includes("Dairy")}
          /> Dairy
        </label>
      </div>
      <div className='checkbox'>
        <label className='intolerance-label'>
          <input 
            type="checkbox" 
            className='checkbox-input'
            name="allergen" 
            value="Egg" 
            onChange={handleCheckboxChange}
            checked={props.selectedIntolerances.includes("Egg")}
          /> Egg
        </label>
      </div>
      <div className='checkbox'>
        <label className='intolerance-label'>
          <input 
            type="checkbox" 
            className='checkbox-input'
            name="allergen" 
            value="Gluten" 
            onChange={handleCheckboxChange}
            checked={props.selectedIntolerances.includes("Gluten")}
          /> Gluten
        </label>
      </div>
      <div className='checkbox'>
        <label className='intolerance-label'>
          <input 
            type="checkbox" 
            className='checkbox-input'
            name="allergen" 
            value="Grain" 
            onChange={handleCheckboxChange}
            checked={props.selectedIntolerances.includes("Grain")}
          /> Grain
        </label>
      </div>
      <div className='checkbox'>
        <label className='intolerance-label'>
          <input 
            type="checkbox" 
            className='checkbox-input'
            name="allergen" 
            value="Peanut"
            onChange={handleCheckboxChange}
            checked={props.selectedIntolerances.includes("Peanut")} 
          /> Peanut
        </label>
      </div>
      <div className='checkbox'>
        <label className='intolerance-label'>
          <input 
            type="checkbox"
            className='checkbox-input'
            name="allergen" 
            value="Seafood" 
            onChange={handleCheckboxChange}
            checked={props.selectedIntolerances.includes("Seafood")}
          /> Seafood
        </label>
      </div>
      <div className='checkbox'>
        <label className='intolerance-label'>
          <input 
            type="checkbox"
            className='checkbox-input' 
            name="allergen" 
            value="Soy"
            onChange={handleCheckboxChange}
            checked={props.selectedIntolerances.includes("Soy")}
          /> Soy
        </label>
      </div>
      <div className='checkbox'>
        <label className='intolerance-label'>
          <input 
            type="checkbox"
            className='checkbox-input' 
            name="allergen" 
            value="TreeNut" 
            onChange={handleCheckboxChange}
            checked={props.selectedIntolerances.includes("TreeNut")}
          /> Tree Nut
        </label>
      </div>
      <div className='checkbox'>
        <label className='intolerance-label'>
          <input 
            type="checkbox"
            className='checkbox-input'
            name="allergen" 
            value="Wheat"
            onChange={handleCheckboxChange}
            checked={props.selectedIntolerances.includes("Wheat")}
          /> Wheat
        </label>
      </div>
    </fieldset>
  );
}

export default IntolerancesCheckboxes;
