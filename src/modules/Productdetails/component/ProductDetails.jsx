import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import coriander from '../../../Assests/Images/coriander1.jpg'
import Asafoetida from '../../../Assests/Images/Asafoetida.jpg'
import FENUGREEK from '../../../Assests/Images/Fenugreek.jpg'
import FENNEL from '../../../Assests/Images/fennel1.jpg'
import MUSTARD from '../../../Assests/Images/mustard.jpg'

const ProductDetails = () => {
  const loaction = useLocation()
  const category = loaction?.search.split("=")[1]
  console.log(category);
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  const list = [
    {
      category_name: "Asafoetida",
      category_desc: "Asafoetida is the dried latex (gum oleoresin) exuded from the living underground rhizome or tap root of several species of Ferula (three of which grow in India), which is a perennial herb (1 to 1.5 mtr. High).",
      image: Asafoetida
    },
    {
      category_name: "CORIENDER",
      category_desc: "Coriander is an important spice crop having a prime position in flavouring food. The plant is a thin stemmed, small, bushy herb, 25 to 50 cm in height with many branches and umbels. Leaves are alternate, compound. The whole plant has a pleasant aroma. Inflorescence is a compound umbel comprises 5 smaller umbels. Fruit is globular, 3 to 4 mm diameter, when pressed break into two locules each having one seed. Fruit has delicate fragrance; seeds are pale white to light brown in colour.",
      image: coriander
    },
    {
      category_name: "FENUGREEK",
      category_desc: "Fenugreek seed is the ripe fruit of an annual herb. This robust herb has light green leaves, is 30-60 cm tall and produces slender, beaked pods, 10-15 cm long, each pod contains 10-20 small hard yellowish brown seeds, which are smooth and oblong, about 3mm long, each grooved across one corner, giving them a hooked appearance",
      image: FENUGREEK
    },
    {
      category_name: "MUSTARD",
      category_desc: "Mustard is an annual herb cultivated as oil seed crop or as vegetable or as fodder, of which, 3 species are known for its condiment value. They are pale yellow or white mustard (Brassica hirta), brown mustard (Brassica juncea) and black mustard (Brassica nigra). The leaves of the plant are alternate, long, bristly branched, petiolate, hairy on both sides. Flowers are small, yellow with 4petals, cruciform. Seeds are 1.5-3mm.",
      image: MUSTARD
    },
    {
      category_name: "FENNEL",
      category_desc: "It is a biennial, aromatic, stout, glabrous, 1.5 to 1.8 mtr high. The ripe fruit (seed) is small, oblong, cylindrical, 6.8mm long, straight or slightly curved, greenish yellow, deeply furrowed, 5 ridged and having agreeable aroma.",
      image: FENNEL
    },
  ]
  return (
    list?.map((l) => {
      if (l?.category_name == category) {
        return (
          <div className='productDetail'>
            <div className='image-container'>
              <img src={l?.image} alt="coriander" />
            </div>
            <div className="product-details">
              <h1>{l?.category_name}</h1>
              <p className='ellips'>
                {l?.category_desc}
              </p>
            </div>
          </div>
        )
      }
    })

  )
}

export default ProductDetails
