import { useState } from "react"


export const FormEvents = () => {
    const [name, setname] = useState()
    const [password, setpassword] = useState()
    const [country, setcountry] = useState()
    const [remember, setremember] = useState("false")
    const [date, setdate] = useState()


    const sendToDatabase= (e)=>{
      e.preventDefault(); // submitin doğal halini engelledik
      alert(`
        name: ${name}
        password: ${password}
        contry: ${country}
        date: ${date}
        `)

        setname("")
        setpassword("")
        setdate("")
        setcountry("")
        setremember("")
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
      Name: <span className="text-danger">{name}</span> 
    </label>
    <input
    //onchange input değeri her eğiştiğindde tetiklenir
      onChange={(e)=>setname(e.target.value)}
      type="text"
      className="form-control"
      id="name"
      value={name}
      // required in çalisması için submit butonu gerekir
      required
      
    />
    
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">
      Password: <span className="text-danger">{password}</span>
    </label>
    <input
      onChange={(e)=>setpassword(e.target.value)}
      type="password"
      className="form-control"
      id="password"
      value={password}
      required
    />
  </div>
  <div className="mb-3">
    <label htmlFor="date" className="form-label">
      Date: <span className="text-danger">{date}</span>
    </label>
    <input
      onChange={(e)=>setdate(e.target.value)}
      type="datetime-local"
      className="form-control"
      id="date"
      value={date}
      required
    />
  </div>
  <div className="mb-3">
    <label htmlFor="country" className="form-label">
      Country: <span className="text-danger">{country}</span>
    </label>
    <select 
    onChange={(e)=>setcountry(e.target.value)}
    id="country" className="form-select" 
    aria-label="Default select example" >
  <option selected="">COUNTRİES</option>
  <option value="Türkiye">TÜRKİYE</option>
  <option value="Almanya">GERMANY</option>
  <option value="Amerika">USA</option>
</select>

  </div>
  <div className="mb-3 form-check">
    <input 
    onChange={(e)=>setremember(e.target.checked)}
    type="checkbox" className="form-check-input" 
    id="remember" checked={remember}/>
    <label className="form-check-label" htmlFor="remember">
      Remember me: <span className="text-danger">{remember.toString()}</span>
    </label>
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

    </div>
  )
}
