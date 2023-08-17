
const Character = ({character}) => {
    const {name, species, image} = character;
    return (
        <div style={{backgroundColor: 'cadetblue', display: 'flex', alignItems: 'center', flexDirection: 'column', padding:'10px'}}>
           <p>Name: {name}</p>
           <p>Species: {species}</p>
            <img src={image} alt={name} style={{width: '200px', height: '200px'}}/>
        </div>
    );
};

export {Character};