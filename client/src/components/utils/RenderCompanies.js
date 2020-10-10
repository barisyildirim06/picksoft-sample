import React from 'react'
import { Link } from 'react-router-dom'
import Accordion from './Accordion'
import NumberFormat from 'react-number-format';

function RenderCompanies(props) {
    const Products = props.Products;

    return (Products.map((product) => {

        return <div >
            <Link to={`/product/${product._id}`}><img src={product.imageshorizontal} alt={product.imageshorizontal} /></Link>
            <p className="lifeheader"><Link to={`/product/${product._id}`} style={{ color: 'white' }}>{product.companyname}</Link></p>
            <p >{`Minimum Spend Value of Company :`}</p>
            <NumberFormat value={product.minimumspend} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            <p >{`Maximum Spend Value of Company :`}</p>
            <NumberFormat value={product.maximumspend} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            <Accordion >
                <span className="accordion-text">{product.description}</span>
            </Accordion>
        </div>

    }))

}




export default RenderCompanies;

