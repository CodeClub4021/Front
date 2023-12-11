import {useLocation} from "react-router-dom";
import Navbar from "../../components/navbar/navbar.jsx";
import {GYM_MOCKS} from "../../Constants.js";
import HomeCardsGroup from "../../components/homeCardsQroup/homeCardsGroup.jsx";
import Footer from "../../components/footer/footer.jsx";

const Search = () => {
    const {state} = useLocation();
    let matchedGyms = GYM_MOCKS;
    if (state){
        const {city, rate, gymName} = state;
        matchedGyms = GYM_MOCKS.filter(gym => {
            let result = true;
            if (state.state){
                if (gym.state.replaceAll(" ", "").toLowerCase() !== state.state.replaceAll(" ", "").toLowerCase()){
                    result = false;
                }
            }
            if (city){
                if (gym.city.replaceAll(" ", "").toLowerCase() !== city.replaceAll(" ", "").toLowerCase()){
                    result = false;
                }
            }
            if (rate){
                if (gym.rateNumber < rate){
                    result = false;
                }
            }
            if (gymName){
                if (!gym.name.replaceAll(" ", "").toLowerCase().includes(gymName.replaceAll(" ", "").toLowerCase())){
                    result = false;
                }
            }
            return result;
        });
    }
    return (
        <div className="h-full relative flex flex-col">
            {state?.gymName ?
                <Navbar isLogin={false} searchValue={state.gymName}/>
            :
                <Navbar isLogin={false} searchValue={""}/>
            }
            <main className="grow bg-gray-700">
                {matchedGyms.length ?
                    <HomeCardsGroup data={matchedGyms} subTitle={"Found Results"}/>
                :
                <div className="w-full h-full flex justify-center py-10">
                    <h2 className="capitalize text-3xl text-red-500">
                        no gyms found
                    </h2>
                </div>
                }
            </main>
            <Footer />
        </div>
)
}

export default Search;