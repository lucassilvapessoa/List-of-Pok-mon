import React from 'react'

function Pokemon({nome}){
    return (
      <div style={{color:"black", textDecoration:"underline", textAlign:"center", padding:"1%",width:"97%",fontSize:"16px",border:"1px solid red",marginBottom:"1%"}}>
        {nome}
      </div>
    )
  }

  export default Pokemon