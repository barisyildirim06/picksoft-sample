import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import NumberFormat from 'react-number-format';



function DetailProductPage(props) {
  const [Suspense, setSuspense] = useState(0)
  const [Product, setProduct] = useState([])

  useEffect(() => {
    const productId = props.match.params.productId
    Axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
      .then(response => {
        setProduct(response.data[0])
        setSuspense(1)
      })

  }, [])

  return (
    <div>
      {!Suspense ? <div className="spaceHero"></div> : <div className="spaceHero">
        <div className="container img-full companyDetail">
          <img src={`../${Product.imageshorizontal}`} />
          <h1>{Product.companyname}</h1>
          <h2 >{"Minimum Spend Value of Company :"} <NumberFormat value={Product.minimumspend} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h2>
          <h2 >{"Maximum Spend Value of Company :"} <NumberFormat value={Product.maximumspend} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h2>
          <h4 >{Product.description}</h4>
        </div>
      </div>}
    </div>


  )
}

export default DetailProductPage;
