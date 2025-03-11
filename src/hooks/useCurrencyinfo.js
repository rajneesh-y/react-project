import { useEffect,useState } from "react"

function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025-02-02/v1/currencies/usd.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
    },[currency])
    return data
}

export default useCurrencyInfo;