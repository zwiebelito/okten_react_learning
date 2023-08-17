import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {episodeActions} from "../../../redux";
import {charactersActions} from "../../../redux/slices/characterSlice";
import {Character} from "../Character/Character";

const Characters = () => {
    const {characters} = useSelector(store => store.characters);
    const {state: {charactersIds, name}} = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(episodeActions.getTitle(name));
        dispatch(charactersActions.all(charactersIds));
    }, []);
    return (
        <>
            <button style={{backgroundColor: 'cadetblue', color: 'darkslateblue', padding: '5px', margin: '10px'}}
                onClick={() => navigate(-1)}>Main page</button>
            <div style={{display:'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridGap: '10px'}}>
                {characters.map(character => <Character key={character.id} character={character}/>)}
            </div>
        </>
    );
};

export {Characters};