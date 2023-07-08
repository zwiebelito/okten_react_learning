import './App.css';
import Simpson from "./components/Simpson/Simpson";
import Character from "./components/Character/Character";


const App = () => {
    return (
        <div className="App">
            <Simpson
                name={'Bart'}
                surname={'Simpson'}
                age={'12'}
                gender={'male'}
                image={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
            />
            <Simpson
                name={'Homer'}
                surname={'Simpson'}
                age={'46'}
                gender={'male'}
                image={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
            />
            <Simpson
                name={'Marge'}
                surname={'Simpson'}
                age={'43'}
                gender={'female'}
                image={'https://upload.wikimedia.org/wikipedia/uk/0/0b/Marge_Simpson.png'}
            />
            <Simpson
                name={'Lisa'}
                surname={'Simpson'}
                age={'10'}
                gender={'female'}
                image={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}
            />
            <Simpson
                name={'Maggie'}
                surname={'Simpson'}
                age={'1'}
                gender={'female'}
                image={'https://upload.wikimedia.org/wikipedia/uk/9/9d/Maggie_Simpson.png'}
            />

            <div className="characterWrap">
                <Character
                    id={'1'}
                    name={'Hunter'}
                    status={'Dead'}
                    species={'Human'}
                    gender={'Male'}
                    image={'https://rickandmortyapi.com/api/character/avatar/159.jpeg'}
                />

                <Character
                    id={'2'}
                    name={'Colonial Rick'}
                    status={'Dead'}
                    species={'Human'}
                    gender={'Male'}
                    image={'https://rickandmortyapi.com/api/character/avatar/488.jpeg'}
                />

                <Character
                    id={'3'}
                    name={'Evolved Narnian'}
                    status={'Alive'}
                    species={'Humanoid'}
                    gender={'Male'}
                    image={'https://rickandmortyapi.com/api/character/avatar/683.jpeg'}
                />

                <Character
                    id={'4'}
                    name={'Dracula'}
                    status={'Alive'}
                    species={'Mythological Creature'}
                    gender={'Male'}
                    image={'https://rickandmortyapi.com/api/character/avatar/709.jpeg'}
                />

                <Character
                    id={'5'}
                    name={'Kathy Ireland'}
                    status={'Alive'}
                    species={'Human'}
                    gender={'Female'}
                    image={'https://rickandmortyapi.com/api/character/avatar/733.jpeg'}
                />

                <Character
                    id={'6'}
                    name={'Voiceoverian'}
                    status={'Dead'}
                    species={'Alien'}
                    gender={'Male'}
                    image={'https://rickandmortyapi.com/api/character/avatar/775.jpeg'}
                />
            </div>
        </div>
    );
}

export default App;