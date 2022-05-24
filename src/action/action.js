export const addToCart=(num)=>{
    return{
        type:'INCREMENT',
        payload:num
    }
}

export const removeToCart=(numb)=>{
    return{
        type:'DECREMENT',
        payload:numb
    }
}