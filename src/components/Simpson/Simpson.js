import style from "./SimpsonStyle.css"

const Simpson = (props) => {
    const { name, surname, age, gender, image} = props;
    return (
        <div className="wrapper">
            <h2>{name} {surname}, {age}, {gender}</h2>
            <img className="picture" src={image} alt="picture"/>
        </div>
    )
}

export default Simpson;