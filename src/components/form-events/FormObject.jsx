import { useState } from "react"


export const FormObject= () => {
const [info, setinfo] = useState({name:"", password:"",
     country:""})

    const handleInfo =(e)=>setinfo({...info, [e.target.id]: 
        e.target.value})

    const sendToDatabase= (e)=>{
      e.preventDefault(); // submitin doğal halini engelledik
      alert(`
        name: ${info.name}
        password: ${info.password}
        contry: ${info.country}
     
        `)

       
        
  }
    
  return (
    <div className="mt-4 p-3">
        <div className="text-center">
            <h1>*****************</h1>
            <h2>Form-Events</h2>
        </div>
  <form onSubmit={sendToDatabase}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">
      Name: <span className="text-danger">{info.name}</span> 
    </label>
    <input
   
      onChange={handleInfo}
      type="text"
      className="form-control"
      id="name"
      value={info.name}
      // required in çalisması için submit butonu gerekir
      required
      
    />
    
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">
      Password: <span className="text-danger">{info.password}</span>
    </label>
    <input
      onChange={handleInfo}
      type="password"
      className="form-control"
      id="password"
      value={info.password}
      required
    />
  </div>
  
  <div className="mb-3">
    <label htmlFor="country" className="form-label">
      Country: <span className="text-danger">{info.country}</span>
    </label>
    <select 
    onChange={handleInfo}
    id="country" className="form-select" 
    aria-label="Default select example" >
  <option selected="">COUNTRİES</option>
  <option value="Türkiye">TÜRKİYE</option>
  <option value="Almanya">GERMANY</option>
  <option value="Amerika">USA</option>
</select>

  </div>
  
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

    </div>
  )
}
