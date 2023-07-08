import styles from "./CharacterStyle.css"

const Character = (props) => {
    const { id, name, status, species, gender, image } = props;
    return (
        <div className="wrapper">
            <h2>{id}. {name}, {status}, {species}, {gender}</h2>
            <img src={image} alt="picture" className="picture"/>
        </div>
    )
}

export default Character;