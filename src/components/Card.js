import React from "react";

export default function Card(props) {
  return (
    <div className="bg-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
      <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none" style={{paddingTop:"20px"}}>
       
        <div className="mt-2 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6" >
        {props.pokemons.map((pokemon) => (
            <div key={pokemon.name} className="group relative"  style={{border:'2px solid grey',marginBottom:'20px',borderRadius:"10px"}}>
              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1" style={{display:"flex",alignItems:'center',justifyContent:'center'}}>
              <a href={`https://www.pokemon.com/us/pokedex/${pokemon.name}`} target="_blank" rel="noreferrer">
                <img 
                  alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
                  className="lg:h-60 lg:w-60 md:h-60 md:w-60 object-center object-cover sm:h-60 sm:w-60"
                />
                </a>
              </div>
              <h3 className="mt-6 text-lg text-gray-500" style={{textAlign:"center"}}>
              <a href={`https://www.pokemon.com/us/pokedex/${pokemon.name}`} target="_blank" rel="noreferrer">
                  {pokemon.name[0].toUpperCase()+pokemon.name.slice(1)}
               
               </a>
              </h3>
           
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
}


