import './Banner.css'
function Banner (){
    // JSX é a forma que o react trabalha com a parte visual
    // O react entende o que é e adiciona ao DOM, no js vanilla seria o document.createElement
    return(
        //Utilizamos class name porque class é uma palavra reservada do js
        <header className='banner'>
            <img src="/images/banner.png" alt="Main page banner"/>
        </header>
    )
}

export default Banner