import React, { useEffect, useState } from 'react'
import './Category.scss'
import Product from '../product/Product'
import { useNavigate, useParams } from 'react-router-dom'


function Category() {

    const navigate = useNavigate()
    const params = useParams()
    const [categoryId, setCategoryId] = useState()

    const categoryList = [{
        id: 'comics',
        value: 'Comics'
    }, {
        id: 'gaming',
        value: 'Gaming'
    }, {
        id: 'sports',
        value: 'Sports'
    }]

    useEffect(() => {
        setCategoryId(params.categoryId)
    }, [params])

    function updateCategory(e) {
        navigate(`/category/${e.target.value}`)

    }

    return (
        <div className='category'>
            <div className="container">
                <div className="header">
                    <div className="info">
                        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, enim.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi asperiores iure et cumque dolores libero nulla labore, quasi sint. Laudantium voluptates animi nemo natus illum!</p>
                    </div>
                    <div className="sort-by">
                        <div className="sort-by-container">
                            <h3 className="sort-by-text">Sort By</h3>
                            <select className='select-sort-by' name="sort-by" id="sort-by">
                                <option value="relevance">Relevance</option>
                                <option value="newest-first">Newest First</option>
                                <option value="prict-lth">Price - Low to High</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="filter-box">
                        <div className="category-filter">
                            <h3>Category</h3>
                            {categoryList.map((item) => (
                                <div key={item.id} className="filter-radio">
                                    <input name='category'
                                        type="radio" value={item.id} id={item.id} onChange={updateCategory} checked={item.id === categoryId} />
                                    <label htmlFor={item.id}>{item.value} </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="products-box">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category