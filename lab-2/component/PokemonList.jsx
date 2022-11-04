const PokemonList = ({ pokemons }) => {
    const list = pokemons.map((pokemon) => <Pokemon pokemon={pokemon} />);
    return <div className="pokemon-list">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                    {list}
                </div>
            </div>
        </div>
    </div>
};

PokemonList.propTypes = {
    pokemons: PropTypes.arrayOf(PokemonType),
};