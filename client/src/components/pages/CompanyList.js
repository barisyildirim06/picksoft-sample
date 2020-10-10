import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import RenderCompanies from '../utils/RenderCompanies'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'




function CompanyList() {

    const [Products, setProducts] = useState([])
    const isBigEnough = useMediaQuery({
        query: '(min-width: 780px)'
    })

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        Axios.post('/api/product/getProducts')
            .then(response => {
                if (response.data.success) {
                    setProducts(response.data.products)
                } else {
                    alert('Failed to fectch product datas')
                }
            })
    }


    return (
            <div className="spaceHero">
                <div className="container">
                    {isBigEnough ?
                        <div>
                            <div className="featured2 img-full">
                                <RenderCompanies
                                    Products={Products}
                                />
                            </div>
                        </div> :
                        <div>
                            <div className="featured img-full">
                                <RenderCompanies
                                    Products={Products}
                                />
                            </div>
                        </div>}
                        <br/>
                        <div className="banner2">
                            <h1>PickSoft</h1>
                            <div />
                            <Link to="/uploadcompany"><p style={{color:"white"}}>Click Here to Upload New Company!</p></Link>
                        </div>
                </div>
            </div>
    )

}

export default CompanyList
