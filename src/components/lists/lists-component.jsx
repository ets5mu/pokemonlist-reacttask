// class Lists extends React.Component {
//   render() {
//     console.log("lists组件渲染");
//     const { pokemonsLists } = this.props;
//     return (
//       <div className="pokemon-container">
//         {pokemonsLists.map((pokemon) => {
//           return (
//             <div className="pokemon-card" key={pokemon.url}>
//               <span className="pokemon-id">#{pokemon.id}</span>
//               <h3>{pokemon.name}</h3>
//               <img
//                 src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
//                 alt={pokemon.name}
//               />
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

const Lists = ({ pokemonsLists }) => {
  return (
    <div className="pokemon-container">
      {pokemonsLists.map((pokemon) => {
        return (
          <div className="pokemon-card" key={pokemon.url}>
            <span className="pokemon-id">#{pokemon.id}</span>
            <h3>{pokemon.name}</h3>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
            />
          </div>
        );
      })}
    </div>
  );
};
