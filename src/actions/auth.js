import coockie from 'js-cookie'
import axios from 'axios';
import Config from '../config/config';




export const signin= (password, next,nextError) =>{
    axios(Config.getServerPath()+'admin/signin',{
        method: 'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
        },
        data:{password:password}
  
    })
    .then(response=>{
        console.log(response)
        if(response.data.error)
        {
            nextError();

        }
        else{
            authenticate(response.data,next)
        }
    })
    .catch(err=>  nextError()    );
};
export const setCookie=(key, value)=>{
    if(process.browser){
        coockie.set(key,value,{ expires:1})
    }
}
export const removeCookie=()=>{
    if(process.browser){
        coockie.remove('token',{ expires:1})
    }
}
export const getCookie=()=>{
    if(process.browser){
        return coockie.get('token');
    }
}

export const authenticate=(data,next)=>{
    setCookie('token',data.token);
    next();
}
export const isAuth=()=>{
    if(process.browser){
        const coockieChecked= getCookie();
        if(coockieChecked){
                return coockieChecked
            }
            else{
                return false;
            }
        }
    }

   
