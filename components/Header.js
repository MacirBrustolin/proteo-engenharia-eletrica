import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      {/* <h1 className={headerStyles.title}>
            Seja Bem Vindo a PROTEO Engenharia Elétrica
      </h1>
      <p className={headerStyles.description}>Vamos descobrir o que podemos contruir juntos!</p> */}
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src="https://placeimg.com/800/200" className="w-full" />
        </div> 
        <div id="item2" className="carousel-item w-full">
          <img src="https://placeimg.com/800/200" className="w-full" />
        </div> 
        <div id="item3" className="carousel-item w-full">
          <img src="https://placeimg.com/800/200" className="w-full" />
        </div> 
        <div id="item4" className="carousel-item w-full">
          <img src="https://placeimg.com/800/200" className="w-full" />
        </div>
      </div> 
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">1</a> 
        <a href="#item2" className="btn btn-xs">2</a> 
        <a href="#item3" className="btn btn-xs">3</a> 
        <a href="#item4" className="btn btn-xs">4</a>
      </div>
    </div>
  )
}

export default Header