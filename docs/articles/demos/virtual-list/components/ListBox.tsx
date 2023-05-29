import React from 'react';

interface IListBoxProps {
  style?: React.CSSProperties
}

const ListBox: React.FC<IListBoxProps> = (props) => {
  return (
    <div className="list-box" style={props.style}>
      {props.children}
    </div>
  )
};

export default ListBox
