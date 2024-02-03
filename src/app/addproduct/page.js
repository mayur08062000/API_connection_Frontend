   "use client"
import Link from "next/link";
import { useState } from "react";
export default function page() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [color, setColor] = useState("");
    const [category, setCategory] = useState("");


    
    const addProduct=async()=>{
        let result = await fetch ("http://localhost:3000/api/products",{
            method:"POST",
            body:JSON.stringify({name,price,color,category})
        });
              result = await result.json();
        if(result.success){
            alert("new product added")
        }
    }
  return (  
    <div>
        <h1>
            add products
        </h1>
        
        <input type='text' value={name} onChange={(e)=>setName(e.target.value,"")} placeholder='Enter your name' className="input"></input >
        <input type='text' value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter product price' className="input"></input >
        <input type='text' value={color} onChange={(e)=>setColor(e.target.value) } placeholder='Enter your color' className="input"></input >
        <input type='text'value={category} onChange={(e)=>setCategory(e.target.value) } placeholder='Enter your category' className="input"></input >
       <button className="btn" onClick={addProduct} >add product</button>
<Link href="./">home</Link>
    </div>
  )
}
