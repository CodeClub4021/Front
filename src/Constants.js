import slider1 from "./assets/images/slider/10.jpeg"
import slider2 from "./assets/images/slider/11.jpg"
import slider3 from "./assets/images/slider/12.jpg"
import cardLogo1 from "./assets/images/cards/11.jpg";
import cardLogo2 from "./assets/images/cards/10.jpg";
import slider4 from "./assets/images/slider/5.jpg";


if (!slider1)
    throw new Error("sliders not found");
if (!slider1)
    throw new Error("sliders not found");
if (!slider1)
    throw new Error("sliders not found");
if (!cardLogo1)
    throw new Error("cardLogo not found");
if (!slider4)
    throw new Error("sliders not found");

export const SLIDERS = [slider1, slider2, slider3, slider4];
export const CARD_LOGO = [cardLogo1, cardLogo2];

export const FILTER_VALUES = {
    states : ["isfahan", "tehran", "yazd"],
    cities: {
        isfahan: ["khomeini Shahr", "Isfahan", "Meymeh"],
        tehran: ["tehran", "rey"],
        yazd: ["yazd", "meybod", "ardakan"]
    },
    rate: [1, 2, 3, 4, 5]
}

export const GYM_MOCKS = [
    {
        imageAddress: CARD_LOGO[1],
        name: "gym1",
        rateNumber: 5,
        state: "isfahan",
        city: "khomeini shahr"
    },
    {
        imageAddress: CARD_LOGO[1],
        name: "gym2",
        rateNumber: 4.5,
        state: "isfahan",
        city: "khomeini shahr"
    },
    {
        imageAddress: CARD_LOGO[1],
        name: "gym3",
        rateNumber: 4,
        state: "isfahan",
        city: "isfahan"
    },
    {
        imageAddress: CARD_LOGO[1],
        name: "gym4",
        rateNumber: 3,
        state: "isfahan",
        city: "meymeh"
    },
    {
        imageAddress: CARD_LOGO[1],
        name: "gym5",
        rateNumber: 3.9,
        state: "tehran",
        city: "tehran"
    },
    {
        imageAddress: CARD_LOGO[1],
        name: "gym6",
        rateNumber: 3.9,
        state: "tehran",
        city: "rey"
    },
    {
        imageAddress: CARD_LOGO[1],
        name: "gym7",
        rateNumber: 3.9,
        state: "yazd",
        city: "yazd"
    },
    {
        imageAddress: CARD_LOGO[1],
        name: "gym8",
        rateNumber: 3.9,
        state: "yazd",
        city: "ardakan"
    },
];

export const COACHES = [
    {
        imageAddress: CARD_LOGO[0],
        name: "coach1",
        rateNumber: 5
    },
    {
        imageAddress: CARD_LOGO[0],
        name: "coach2",
        rateNumber: 4.5
    },
    {
        imageAddress: CARD_LOGO[0],
        name: "coach3",
        rateNumber: 4
    },
    {
        imageAddress: CARD_LOGO[0],
        name: "coach4",
        rateNumber: 3
    },
    {
        imageAddress: CARD_LOGO[0],
        name: "coach5",
        rateNumber: 3.9
    },
    {
        imageAddress: CARD_LOGO[0],
        name: "coach6",
        rateNumber: 3.9
    },
    {
        imageAddress: CARD_LOGO[0],
        name: "coach6",
        rateNumber: 3.9
    },
    {
        imageAddress: CARD_LOGO[0],
        name: "coach7",
        rateNumber: 3.9
    },
]