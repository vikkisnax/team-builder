import React, {useEffect, useState} from "react";

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
        
        setInfo({
            name: "", email: "", role:""});
        //stretch: On form submit, do an if check to see if the memberToEdit prop is there or not, and run the correct functions in the if and else blocks based on that check.
        // props.editMember(info) bc i want to show info from the editMember function inside App. and I passed in w/e i typed into the input box, so now it'll update the member.
        if (props.memberToEdit){
            return props.editMember(info)
        } else {
            //creates new member -- prop from App comp. and clears 
            props.addNewMember(info);
        }
        };
      //this \/ shows the info that i typed into inputs
      //console.log(info);
   

    //stretch
    useEffect(() =>{
        if (props.memberToEdit) {
            //then return: make input boxes the member info you submitted 
            setInfo(props.memberToEdit)
        }
        //dependency array so it only runs when memberToEdit changes
    }, [props.memberToEdit]);

      
    return (
    <form onSubmit={submitForm}>
        <div className="name">
        <label htmlFor="name">Name </label>
            <input
                id="name"
                onChange={handleChanges}
                type="text"
                placeholder="Enter Name"
                value={info.name}
                name="name" />
        </div>

        <div className="email">
        <label htmlFor="email">Email </label>
            <input
                id="email"
                onChange={handleChanges}
                type="email"
                placeholder="Enter Email"
                value={info.email} 
                name="email" />
        </div>

        <div className="role">
        {/* make this a dropdown - watch short vid */}
        <label htmlFor="role">Role </label> 
            <select
                id="role"
                onChange={handleChanges}
                value={info.role}
                name="role" >
                <option value="">--- Select Role ---</option>
                <option value="Backend Engineer">Backend Engineer</option>
                <option value="Frontend Engineer">Frontend Engineer</option>
                <option value="Designer">Designer</option>
                <option value="Student">Student</option>
                <option value="Other">Other</option>
            </select>
        </div>

        {/* button \/ */}
        <p className="button">
        <button type="submit">Become a Member!</button>
        </p>
    </form>
   )
}

export default Form;