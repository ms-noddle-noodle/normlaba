import React, {useState, useEffect} from 'react';
const style = {
    border: 'ipx solid black',
    borderRadus:'30px',
    backgroundColor:'rgba (20, 20, 20, 0.8)',
    padding: '10px'
}
const proxyurl = "https://cors-anywhere.herokuapp.com/"; // без proxy url нет доступа
const url = "http://gd.geobytes.com/GetCityDetails";
const fetchInf = async ( infUpdate) => {
    fetch( proxyurl+url )
    .then(response => response.json()) 
    .then (json => {
        infUpdate   ({
            IP: json.geobytesipaddress, 
            country:json.geobytescountry,
            city:json.geobytescity,
            lon:json.geobyteslongitude,
            lat:json.geobyteslatitude,
            timezone:json.geobytestimezone,
        })
   // .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?")) {state.IP}
        console.log(json)
    })

}
const Information = ()=> {
    const [ state, setState ] = useState({
        IP: undefined, 
        country:undefined,
        city:undefined,
        lon:undefined,
        lat:undefined,
        timezone:undefined,
    })
    useEffect(() => {
        fetchInf(setState)
    },[])
    return(<div style={style}>
    <h1 > Ваши данные:  </h1> 
    <div> 
        IP: {state.IP}<br />
        Cтрана: {state.country}<br />
        Город: {state.city}<br />
        Долгота:  {state.lon}<br />
        Широта: {state. lat}<br />
        Часовой пояс: {state.timezone}<br />
        </div>
    </div>
    )
} 


export default Information;