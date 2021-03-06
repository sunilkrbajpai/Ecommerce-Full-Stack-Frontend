import { API } from "../configure";

export const signUp=(user)=>{
    // console.log(name,email,password)
    return fetch(`${API}/signup`,{
        method:"POST",
        headers:{
            Accept:'application/json',
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log(err)
    })
}