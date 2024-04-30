import { useState ,useEffect } from "react";

const Xlogin =()=>{
   const [UserName , setUserName] = useState('')
   const [Password , setPassword] = useState('')
   const [error , setError] = useState('')
   const [isSubmitted , setIssubmitted] = useState(false)
   

   const handleSubmit=(e)=>{
    e.preventDefault();
    if(UserName==="user" && Password==="password"){
        setError("")
        setIssubmitted(true)
    }else{
        // setIssubmitted(false)
        setError("Invalid username or password");
    }
   }
    return(
    <div>
     <h1>Login Page</h1>
      {isSubmitted?(
        <div>
           <p> Welcome,{UserName}</p>
            </div>
      ):(
        <form onSubmit={handleSubmit}>
       {error &&<p>{error}</p>}
       <div>
        <label htmlFor="username"> Username </label>
            <input type="text" id="userName" placeholder="username" onChange={(e)=>setUserName(e.target.value)} required/>
       </div>
       <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} required/>
       </div>
       <div>
        <button>Submit</button>
       </div>
        </form>
      )}
    </div>
    )
}

export default Xlogin