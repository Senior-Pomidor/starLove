import CharactersList from "../Components/CharactersList";
import { characters } from '../Table';

function Favourites() {
    // выбираем только избранные
    const favorites = characters.filter(item => item.favorite)

    return (<>
        <div>Page Favourites</div>

        <CharactersList
            characters={favorites}
        />
    </>);
}

export default Favourites;
