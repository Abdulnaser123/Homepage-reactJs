import "./styles.css"
import ExploreContainer from "./ExploreContainer";
/*
import ExploreContainer from 
*/
import BTN from "./button";

const Explore = ()=>{
    return(
        <div className="ExploreTopModule">
            <h1 className="ExploreTitle">Explore</h1>
            <ExploreContainer/>
            <BTN />
        </div>
    );
};

export default Explore; 