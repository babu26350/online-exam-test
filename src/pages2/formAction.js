import { useState } from "react";

const student=[]
function MyForm() {
  const [name, setName] = useState("");
  const [fatherName, setFathername] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState(student);

  const handleSubmit = (event) => {
    event.preventDefault();
    student.push({"name":name,"father'sName":fatherName,"age":age,"email":email})
    setData(student)
    alert(data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>Enter your father's name:
        <input 
          type="text" 
          value={fatherName}
          onChange={(e) => setFathername(e.target.value)}
        />
      </label>
      
      <label>Enter your Age:
        <input 
          type="text" 
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      

      <label>Enter your email:
        <input 
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <input type="submit" />
    </form>
   )
}
export default MyForm;