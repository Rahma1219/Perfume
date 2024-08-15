import './Data.css'
import carticon from '../../../public/assets/images/icon-cart.svg'

function Data(){
    return(
     <div id="data">
        <p id='title'>PERFUME</p>
        <h1 id='head'>Gabrielle Essence Eau De Parfum</h1>
        <p id='para'>A floral,solar and voluptuous interpretation composed by Olivier Polge,Perfumer-Creator for the House of CHANEL.</p>
    <div id='price'>
        <h1 id='price1'>$149.99</h1>
        <p id='price2'> <s>$169.99</s></p>
    </div>
    <div>
    
    <button id='btn'><img src={carticon} alt="" id='cart' />  Add to Cart</button>
    </div>
  
    
     </div>
    )
}
export default Data
