import {useLocation} from "react-router-dom";
import Navbar from "../../components/navbar/navbar.jsx";
const Search = () => {
    const {state} = useLocation();
    let flag = true;
    let matchedGyms;
    try {
        const {city, rate, gymName} = state;
        matchedGyms = GYM_MOCKS.filter(gym => {
            let result = true;
            if (state)
                if (gym.state.replaceAll(" ", "").toLowerCase() !== state.state.replaceAll(" ", "").toLowerCase())
                    result = false;
            if (city)
                if (gym.city.replaceAll(" ", "").toLowerCase() !== city.replaceAll(" ", "").toLowerCase())
                    result = false;
            if (rate)
                if (gym.rateNumber < rate)
                    result = false;
            if (gymName)
                if (gym.name.replaceAll(" ", "").toLowerCase() === gymName.replaceAll(" ", "").toLowerCase())
                    result = false;
            return result;
        });
    } catch {
        flag = false;
    }
    return (
        <>
            {flag
                ?
                <div className="h-full bg-gray-700">
                    <Navbar isLogin={false}/>
                    <HomeCardsGroup data={matchedGyms} subTitle={"Found Results"}/>
                </div>
                :
                <div>
                    <span className="accent-red-700 capitalize">you do not have access</span>
                </div>
            }
        </>
)
}
import {GYM_MOCKS} from "../../Constants.js";

import HomeCardsGroup from "../../components/homeCardsQroup/homeCardsGroup.jsx";

export default Search;