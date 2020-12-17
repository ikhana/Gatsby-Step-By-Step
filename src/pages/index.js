import React,{useState, useEffect} from 'react';


export default function  ()  {
    const [data, SetData] = useState('');


    useEffect(()=>{
      (async()=>{
        const response = await fetch('.netlify/functions/hello');
        const dataTemp = await response.json();
        SetData(dataTemp);
      })();
    },[])
    return (
        <div>
            Hello WOrld
            <div>{data.message}</div>
        </div>
    );
    
}


