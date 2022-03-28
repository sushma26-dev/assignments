const baseurl="https://jsonplaceholder.typicode.com/users";
export const getUsers=()=>
{
    //make api call json.placeholder & set users 
   return fetch(baseurl,{
        "method":"GET",
        "headers":{
            "content-type":"application/json"
        }
    });
}

export const getUsersById=(id)=>
{
    //make api call json.placeholder & set users 
   return fetch(baseurl+"/"+id,{
        "method":"GET",
        "headers":{
            "content-type":"application/json"
        }
    });
}

export const insertUsers=(newUserObj)=>
{
    return fetch(baseurl, {
        method: 'POST',
        body: JSON.stringify(newUserObj),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
}