function FormInput({type,label}) {
  // function captialize(label){
  //   label.substr(0,1).toUpperCase()
  //   return label;
  // }

  // const label = captialize(type);

  return (
    <div className="form-control">
          <input type={type} required autoComplete="off" autoSave="off" />
          <label>{label}</label>
        </div>
  )
}

export default FormInput