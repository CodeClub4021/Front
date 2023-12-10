import {useLocation} from "react-router-dom";
import Navbar from "../../components/navbar/navbar.jsx";
import {GYM_MOCKS} from "../../Constants.js";
import HomeCardsGroup from "../../components/homeCardsQroup/homeCardsGroup.jsx";

const Search = () => {
    const {state} = useLocation();

    console.log(state);

    const {city, rate, gymName} = state;
    const matchedGyms = GYM_MOCKS.filter(gym => {
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
    return(
        <div className="h-full bg-gray-700">
            <Navbar isLogin={false} />
            <HomeCardsGroup data={matchedGyms} subTitle={"Found Results"}/>
        </div>
    )
}

export default Search;