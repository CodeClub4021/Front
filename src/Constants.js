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