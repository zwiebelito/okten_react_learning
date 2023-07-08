import styles from './Launch.css'
const Launch = (props) => {
    const { launch } = props;
    return (
        <div className={'launch'}>
            <h2>Mission: {launch.mission_name}</h2>
            <h2>Launch year: {launch.launch_year}</h2>
            <img src={launch.links.mission_patch_small} alt={launch.mission_name}/>
        </div>
    )
}

export default Launch;