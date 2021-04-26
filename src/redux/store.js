//Сделать проверку данных Montage на входе, не должен быть раньше Tunneling

let store = {
    state : {
        rings : [
            {id : 1, segment : 227, tunneling : [20, 3, 1], montage : [20, 3, 2], pumping: 15},
            {id : 2, segment : 234, tunneling : [21, 3, 2], montage : [21, 3, 2],  pumping: 13},
            {id : 3, segment : 241, tunneling : [22, 3, 1], montage : [22, 3, 1],  pumping: 14},
            {id : 4, segment : 241, tunneling : [23, 3, 2], montage : [23, 3, 2],  pumping: 14},
        ]
    },
    getState(){
        return this.state;
    },
    getDates(){
        let rings = this.state.rings;
        let uniqueDates = [
            [0, 0, 0]
        ];

        const includeArr = (arr, value) => {
            for(let i = 0; i < arr.length; i++){
                if(arr[i][0] == value[0] && arr[i][1] == value[1] && arr[i][2] == value[2]){
                    return true;
                }
            }
        }

        for(let i = 0; i < rings.length; i++){
            let newDate = rings[i].tunneling;
            for(let k = 0; k < uniqueDates.length; k++){
                if(!includeArr(uniqueDates, newDate)){
                    uniqueDates.push(newDate);
                }
            }
            newDate = rings[i].montage;
            for(let k = 0; k < uniqueDates.length; k++){
                if(!includeArr(uniqueDates, newDate)){
                    uniqueDates.push(newDate);
                }
            }
 
        }
        uniqueDates.shift();
        return uniqueDates;
    }
}

export default store;

export let getRingsByDate = (uniqueDate) => {
    let rings = store.state.rings;
    let ringsByDate = [];
    for(let i = 0; i < rings.length; i++){
        if(
            (rings[i].tunneling[0] == uniqueDate[0] && rings[i].tunneling[1] == uniqueDate[1] && rings[i].tunneling[2] == uniqueDate[2]) ||
            (rings[i].montage[0] == uniqueDate[0] && rings[i].montage[1] == uniqueDate[1] && rings[i].montage[2] == uniqueDate[2])
            ){
                ringsByDate.push(rings[i]);
        }
    }
    return ringsByDate;
}
export let getAllDates = () => {
    let allDates = [];
    for(let i = 19; i <= 31; i++){
        allDates.push([i, 3, 1]);
        allDates.push([i, 3, 2]);
    }
    for(let i = 0; i <= 30; i++){
        allDates.push([i, 4, 1]);
        allDates.push([i, 4, 2]);
    }
    return allDates;
}
