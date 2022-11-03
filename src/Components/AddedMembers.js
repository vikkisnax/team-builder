import React from "react";

const AddedMember = props => {
 
  const fontColor = {color: "#BED3F3"};

    return (
        <div className="member-list">
         {props.members.map(member => (
            <div className="members" key={member.id}>
              <h2 style={fontColor}>{member.name}</h2>
              <p>{member.email}</p>
              <p>{member.role}</p>
              {/* stretch */} 
              <button 
                onClick={() => props.setMemberToEdit(member)} type="edit">Edit</button>
            </div>
          ))}
        
        </div>
    );
};

export default AddedMember;