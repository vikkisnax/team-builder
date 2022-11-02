import React from "react";

const AddedMember = props => {
    return (
        <div className="member-list">
         {props.member.map(members => (
            <div className="members" key={members.id}>
              <h2>{members.name}</h2>
              <p>{members.email}</p>
              <p>{members.role}</p>
            </div>
          ))}
        </div>
    );
};

export default AddedMember;