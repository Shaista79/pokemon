import React, { useEffect, useState } from 'react';
import { SearchBox } from './components/SearchBox';
import Card from './components/Card';
import './App.css';
import Spinner from './components/Spinner';

export default function App() {
  const [pokemons,setPokeMon]=useState([]);
  const [search,setSearch]=useState('');
  const [loading,setLoading]=useState(true)


  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
    .then(response => response.json())
    .then((name) => {
      setLoading(false)
      setPokeMon(name.results)
    
    })
   
   

  },[])
  const handleChange=(e) => {
    setSearch(e.target.value);
  };

  const fileteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));
  return (
    
     <>
    
       
       <SearchBox
          placeholder='Search Pokemon' 
          handleChange= {handleChange}

        />
         {loading && <Spinner/>}
        {!loading && <Card pokemons={fileteredPokemons}></Card>}
     </>
  )
}





/*import React, {Component} from 'react';
import { CardList } from './components/Card-list';
import { SearchBox } from './components/SearchBox';
import './App.css';

class App extends Component{
  constructor(){
    super();
  this.state = {
      pokemons: [],
      search:''
    };
  }


  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
    .then(response => response.json())
    .then(name => this.setState({pokemons:name.results}));
  }

  handleChange=(e) => {
    this.setState({search: e.target.value});
  };

  render(){
    const {pokemons, search } = this.state;
    const fileteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));

    return(
      <div className="App">
        <h4><a href="https://www.linkedin.com/in/surojit-manna" target="_blank" noreferrer>Author</a></h4>
        <h1>Pokemon Database</h1>
        <SearchBox
          placeholder='Search Pokemon' 
          handleChange= {this.handleChange}
        />
        <CardList pokemons={fileteredPokemons}></CardList>

      </div>
    );
  }
}

export default App;*/