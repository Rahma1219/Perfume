import './Image.css'
import Perfumeimg from '../../../public/assets/images/image-product-desktop.jpg'
import Perfumeimg1 from '../../../public/assets/images/image-product-mobile.jpg'
import Data from '../Data/Data'
function Image(){
    return( 
      <div className='card'>
        <div id="image">
      <img id="img" src={Perfumeimg} alt="" />
      <img src={Perfumeimg1} id='img2'></img>
    </div>
    <div>
      <Data></Data>
    </div>

      </div>
    

    )
}
export default Image