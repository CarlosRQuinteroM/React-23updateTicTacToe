import { useState } from "react";

export default function Player({ name, symbol,isActive }) {
  const [nameValue, setNameValue] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((isEditing) => !isEditing);
  }

  function handleChange(event) {
    console.log(event);
    setNameValue(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{nameValue}</span>;

  if (!isEditing) {
    editablePlayerName = (
      <input type="text" required value={nameValue} onChange={handleChange} />
    );
  }

  return (
    <>
      <li className={isActive ? 'active' : undefined}>
        <span className="player">
          {editablePlayerName}
          <span className="player-simbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>{!isEditing ? "save" : "edit"}</button>
      </li>
    </>
  );
}
