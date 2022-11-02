import React, {useState} from "react";

const Form = props => {
    //like in the follow along, we can use this to make the inputs clear after user submits info -- in submitForm-- https://codesandbox.io/s/form-management-soln-forked-b4d4v1?file=/src/components/NoteForm.js
   const [info, setInfo] = useState({
    name:"",
    email:"",
    role:""
   })

   const handleChanges = event => {
    //type into input box for the console.log to show
    console.log("event:", event.target.value);
    //object destructuring\/
    const {name, email, role, value}=event.target;
    //see if adding email, role are correct + value
    setInfo({ ...info, [name]: value, [email]:value, [role]:value });
  };

    // put on form so it doesn't fire http request, which will refresh page
    const submitForm = event => {
        event.preventDefault();
        //creates new member -- prop from App comp. and clears 
        props.addNewMember(info);
        setInfo({
            name: "", email: "", role:""});
      };
      //shows info i typed into inputs
      //   console.log(info);
   
    return (
    <form onSubmit={submitForm}>
        <div className="name">
        <label htmlFor="name">Name</label>
            <input
                id="name"
                onChange={handleChanges}
                type="text"
                placeholder="Enter Name"
                value={info.name}
                name="name" />
        </div>

        <div className="email">
        <label htmlFor="email">Email</label>
            <input
                id="email"
                onChange={handleChanges}
                type="text"
                placeholder="Enter Email"
                value={info.email}
                name="email" />
        </div>

        <div className="role">
        {/* make this a dropdown - watch short vid */}
        <label htmlFor="role">Role</label> 
            <input
                id="role"
                onChange={handleChanges}
                // fix this \/
                type="text" 
                placeholder="Select Role"
                value={info.role}
                name="role" />
        </div>
        {/* button \/ */}
        <button type="submit">Become a Member!</button>
    </form>
   )
}

export default Form;