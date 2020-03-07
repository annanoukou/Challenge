import React from 'react';

export const FormErrors = ({formErrors}) =>
    
  <div className='formErrors row'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <p key={i} style={{ margin:"0px 10px 0px 0px", fontWeight:"600"}}>{fieldName} {formErrors[fieldName]}.</p>
        )        
      } else {
        return '';
      }
    })}
  </div>