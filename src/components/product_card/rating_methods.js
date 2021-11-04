import {ImStarEmpty, ImStarFull, ImStarHalf} from "react-icons/im";

const getStarCounts = (rating) => {
    const i = 5;
    let j = i - rating;
    let full;
    let half=0;
    let empty=0;
    if(Math.floor(j) === j){
        full = rating;
    }
    else {
        j = rating-(rating%1);
        full = j;
        half =  1;
    }
    if((full + half) < 5){
        empty = 5-(full + half);
    }
    return {full,half,empty};
}

export const getStars = (rating) => {
    let counts = getStarCounts(rating);
    let {full,half,empty} = counts;
    let stars = [];
    while(full > 0){
        stars.push(ImStarFull);
        full--;
    }
    if(half > 0){
        stars.push(ImStarHalf)
    }
    while(empty > 0){
        stars.push(ImStarEmpty);
        empty--;
    }
    return stars;
}