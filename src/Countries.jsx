import React, { useEffect, useState } from 'react'

function Card({img,imgAlt,name}){
    return <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        width:"200px",
        height:"200px",
        border:"1px solid",
        borderRadius:"8px",
        textAlign:"center",
        margin:"10px",
        padding:"10px"
    }}>
        <img src={img} alt={imgAlt} style={{width:"100px", height:"100px"}}/>
        <h3>{name}</h3>
    </div>
}
const url="https://xcountries-backend.azurewebsites.net/all";
function Countries() {

    const[country,setCountry]=useState([]);

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await fetch(url);
                const jsonRes=await response.json();
                console.log({jsonRes});
                setCountry(jsonRes);
            }
            catch(error){
                console.error("Error fetching data:",error);
            }
           

        }
        fetchData();
    },[])
  return (
    <div style={{display:"flex",
        flexWrap:"wrap"
    }}>
        {country.map((countries)=>(<Card key={countries.name} img={countries.flag} imgAlt={countries.abbr} name={countries.name}/>))}
    </div>
  )
}

export default Countries