import CharactersList from '../Components/CharactersList';
import { characters } from '../Table';

function Soulmates() {
    return (<>
        <div>Page Soulmates</div>

        <CharactersList
            characters={characters}
        />
    </>);
}

export default Soulmates;
