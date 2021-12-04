import styled from "styled-components";

const WeatherLogo = styled.img`
width: 140px;
height: 140px;
margin: 40px auto;
`;

const ChooseCityLabel = styled.span`
color:#49E;
font-size:18px;
font-weight: bold;
margin: 20px auto;
`;

const SearchBox = styled.form`
display:flex;
flex-direction: row;
border: black solid 1px;
border-radius: px;
color:black;
font-size:18px;
font-weight: bold;
margin: 20px auto;
& input{
    padding:10px;
    font-size:15px;
    border:none;
    outline:none;
    font-weight:bold;
}

& button{
    color: grey;
    padding:10px;
    font-size:15px;
    background-color:black;
    border:none;
    outline:none;
    font-weight:bold;
    cursor: pointer;
}

`;

const CityComponent = (props) => {
    const {updateCity, fetchWeather} = props;
    return (
        <>
            <WeatherLogo src="/icon/perfect-day.svg" />
            <ChooseCityLabel>Trouvez la météo de votre ville</ChooseCityLabel>
            <SearchBox onSubmit={fetchWeather}>
                <input   
                    onChange={(e)=>updateCity(e.target.value)}
                    placeholder="Ville" 
                />
                <button type="submit">Rechercher</button>
            </SearchBox>
        </>
    );
};
export default CityComponent;