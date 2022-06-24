import React, { useState } from "react";

function Data(props) {
  const [item, setItem] = useState(props.item);
  const [check, setCheck] = useState(false);
  const [checked, setChecked] = useState('')
  const [finished, setFinished] = useState('');
  const [hideItem, setHideItem] = useState('');
  const [update, setUpdate] = useState(false);
  const [updateItem, setUpdateItem] = useState(item);
  let edit;
  if(update) {
    edit = (
      <form className="item-value" onSubmit={()=>{handleSubmit()}}>
        <input className="input-update" value={updateItem} onChange={(e)=>{handleChange(e)}} />
        <button type="submit">
          <img className="img-icon" src="./refresh-cw.svg"/>
        </button>
      </form>
    )
  } else {
    edit = (
      <div className="item-value">
        <div className={`${finished}`}>{item}</div>
        <button onClick={()=>{handleEdit()}}>
          <img className="img-icon" src="./edit.svg"/>
        </button>
      </div>
    )
  }
  let checkBtn;
  if(check) {
    checkBtn = (<img className="img-icon" src="./check.svg"/>)
  }
  const handleSubmit = () => {
    setItem(updateItem);
    setUpdate(false);
  }
  const handleChange = (e) => {
    setUpdateItem(e.target.value)
  }
  const handleEdit = () => {
    setUpdate(true);
  }
  const handleCheck = () => {
    if(check) {
      setCheck(false);
      setFinished('');
      setChecked('');
    } else {
      setCheck(true);
      setFinished('finished');
      setChecked('checked');
    }
  }
  const handleDelete = () => {
    setHideItem('hidden');
  }

  return (
    <div className={`item ${hideItem}`}>
      <button className={`btn check-btn ${checked}`} onClick={()=>{handleCheck()}}>{checkBtn}</button>
      <div className="item-value-container">{edit}</div>
      <button className="btn delete" onClick={()=>{handleDelete()}}><img className="img-icon" src="./trash-2.svg"/></button>
    </div>
  )
}

export default Data;