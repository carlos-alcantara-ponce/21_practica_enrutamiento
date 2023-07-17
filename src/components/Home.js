import React from 'react';
import { useParams } from "react-router";

const Home = (props) => {

    const { string, fontColor, backgColor } = useParams();

    console.log("string");
    console.log(string);
    console.log("fontColor");
    console.log(fontColor);
    console.log("backgColor");
    console.log(backgColor);


    return (

        (!string)
            ? <p>Welcome</p>
            : (!isNaN(string))
                ? <p>The number is : {string}</p>
                : (fontColor || backgColor)
                    ? <p style={{ color: fontColor, backgroundColor: backgColor }}> The word is : {string}</p>
                    : <p>The word is : {string}</p>
    )

}




export default Home;