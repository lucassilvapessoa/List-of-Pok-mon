    import {useState,useEffect} from 'react';
    import React from 'react'
    import ReactDOM from 'react-dom';
    import  Header from './Components/Header'
    import './style.css';
    import {Button} from '@material-ui/core'
    import axios from 'axios'
    import Pokemon from './Components/Pokemon'
      
    function Container (){
    const [list,setList] = useState([])
    const [render,setRender] = useState(false)
    const [url,setUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const[proxPag,setProxpag] = useState("")
    const [prevPag,setPrev] = useState(null)

    useEffect(()=>{
     async function Search(){
       let response = await axios.get(url)
       console.log(response)
       setList([...response.data.results])
       setPrev(response.data.previous)
       setProxpag(response.data.next)
     }
     Search()
    },[url])

    useEffect(()=>{
       setRender(true)
    },[list])

      return (
        <div style={{width:"50%",margin:"0 auto"}}>
        <div style={{width:"50%",margin:"0 auto",position:"relative",marginTop:"3%"}}>
      {render ? <> {list.map(x=> <Pokemon key={x.url} nome={x.name}></Pokemon>)} </> : <h2>Carregando</h2>}
         <Button onClick={()=> {
           if(prevPag!=null){
             setUrl(prevPag)
           }
         }} variant="contained" color="secondary" >Anterior</Button>
         <Button onClick={()=> {
           if(proxPag!=null){
             setUrl(proxPag)
           }
         }} style={{position:"absolute",right:"0px"}}variant="contained" color="primary">Proximo</Button>    
        </div>
        </div>
      )
    }
    ReactDOM.render(
      <React.StrictMode>       
        <Header></Header>
        <Container/>                                                                                                                                                                                                                                                                         
      </React.StrictMode>,
      document.getElementById('root')
    );

