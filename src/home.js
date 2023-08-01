import shoes from "./goldenshoes.jpg"
export const Home=()=>{
    return(
        <div id="home-home">
            <br></br>
            <br></br>
            <h1 id="heading">YOU ARE<br></br> WHAT<br></br> YOU WEAR</h1>
            <br></br>
            <p>since you are what you wear<br></br>
            we are here to help you realize who you are</p>
            <img src={shoes} id='shoes' alt='cool shoes'/>
            <div id="contacts">
                <p>instagram:</p>
                <p>whatsapp:</p>
            </div>
        </div>
    )
}