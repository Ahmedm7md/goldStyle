import { useState } from "react"
import searchIcon from"./search icon.jpg"

const products=[
    "smart suit",
    "black classy suit",
    "golden watch",
    "nike shoes",
    "golden necklace"
]

export const Contact=()=>{

    const [value,setValue]=useState("")

    const filteredProducts=products.filter((product)=>{
        return product.includes(value)
    })

    return(
        <div>           
             <input type="text" id="search-bar" placeholder="search"
             onChange={(event)=>setValue(event.target.value)}
             />
             <button id="search-btn"><img src={searchIcon} alt="search" id="search-icon"/></button>
             <div>
                {filteredProducts.map((product)=>{
                    if(value!==""){
                        return <h3 id="products" key={product}>{product}</h3>
                    }
                })}
             </div>
        </div>
    )
}