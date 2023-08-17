const baseURL = 'https://rickandmortyapi.com/api'

const episodes = '/episode';
const characters = '/character';

const urls = {
    episodes,
    characters: {
        byIds: (iDs) => `${characters}/${iDs}`
    }
}

export {
    baseURL,
    urls
}