import React from 'react'
import '../../../Assests/css/product.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import coriander from '../../../Assests/Images/coriander1.jpg'
import FENUGREEK from '../../../Assests/Images/Fenugreek.jpg'
import FENNEL from '../../../Assests/Images/fennel1.jpg'
import MUSTARD from '../../../Assests/Images/mustard.jpg'
import Asafoetida from '../../../Assests/Images/Asafoetida.jpg'
import { Link } from 'react-router-dom'
const ProductCard = () => {
  return (
    <>
    <div className='product-container'>
                <div className="experince-header"><span className="experince-header-set">Our Products</span></div>
                <div className='product-grid'>
                    <figure >
                        <img src={coriander} alt="coriander" />
                        <figcaption>CORIENDER SEEDS
                            <div>
                                <p className='ellips'>
                                Coriander is an important spice crop having a prime position in flavouring food. The plant is a thin stemmed, small, bushy herb, 25 to 50 cm in height with many branches and umbels. Leaves are alternate, compound. The whole plant has a pleasant aroma. Inflorescence is a compound umbel comprises 5 smaller umbels. Fruit is globular, 3 to 4 mm diameter, when pressed break into two locules each having one seed. Fruit has delicate fragrance; seeds are pale white to light brown in colour.
                                </p>
                                <Link to={'/product-details?category=CORIENDER'} className="slider-btn">see more</Link>
                            </div>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src={FENUGREEK} alt="FENUGREEK" />
                        <figcaption>FENUGREEK SEEDS
                            <div>
                                <p className='ellips'>
                                Fenugreek seed is the ripe fruit of an annual herb. This robust herb has light green leaves, is 30-60 cm tall and produces slender, beaked pods, 10-15 cm long, each pod contains 10-20 small hard yellowish brown seeds, which are smooth and oblong, about 3mm long, each grooved across one corner, giving them a hooked appearance
                                </p>
                                <Link to={'/product-details?category=FENUGREEK'} className="slider-btn">see more</Link>
                            </div>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src={FENNEL} alt="FENNEL" />
                        <figcaption>FENNEL SEEDS
                            <div>
                                <p className='ellips'>
                                It is a biennial, aromatic, stout, glabrous, 1.5 to 1.8 mtr high. The ripe fruit (seed) is small, oblong, cylindrical, 6.8mm long, straight or slightly curved, greenish yellow, deeply furrowed, 5 ridged and having agreeable aroma. 
                                </p>
                                <Link to={'/product-details?category=FENNEL'} className="slider-btn">see more</Link>
                            </div>
                        </figcaption>
                    </figure>
                </div>
                <div className='product-grid'>
                    <figure>
                        <img src={MUSTARD} alt="MUSTARD" />
                        <figcaption>MUSTARD SEEDS
                            <div>
                                <p className='ellips'>
                                Mustard is an annual herb cultivated as oil seed crop or as vegetable or as fodder, of which, 3 species are known for its condiment value. They are pale yellow or white mustard (Brassica hirta), brown mustard (Brassica juncea) and black mustard (Brassica nigra). The leaves of the plant are alternate, long, bristly branched, petiolate, hairy on both sides. Flowers are small, yellow with 4petals, cruciform. Seeds are 1.5-3mm.
                                </p>
                                <Link to={'/product-details?category=MUSTARD'} className="slider-btn">see more</Link>
                            </div>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src={Asafoetida} alt="Asafoetida" />
                        <figcaption>Asafoetida (Hing)
                            <div>
                                <p className='ellips'>
                                Asafoetida is the dried latex (gum oleoresin) exuded from the living underground rhizome or tap root of several species of Ferula (three of which grow in India), which is a perennial herb (1 to 1.5 mtr. High).
                                </p>
                                <Link to={'/product-details?category=Asafoetida'} className="slider-btn">see more</Link>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
      </>
  )
}

export default ProductCard
