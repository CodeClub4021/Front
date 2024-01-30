import React, {useEffect, useState} from "react";
import Card from "../card/card.jsx";
import InternalGroup from "./internalGroup.jsx";

const HomeCardsGroup = ({data, subTitle}) => {

    // needs to fetch data using api
    return(
        <InternalGroup data={data} subTitle={subTitle} />
    )
}

export default HomeCardsGroup;