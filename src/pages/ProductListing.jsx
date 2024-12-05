import { useState, useEffect } from "react";
import '../styles/productlist.css'
import Product from '../components/Product'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from "axios";


function ProductListing(){

  
  const [products, setProducts] = useState([])
  
  
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(res=>{
      setProducts(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  }, [])
  


  return(
    <>
      <Container>
        <h1>Product Listing</h1>
        <br />
        <div className ="product-list">
          <Row>
            {products.map((product, index)=>{
              return(
                <Col xs = {12} sm = {6} md ={4} lg = {3} xxl = {3} key ={index}>
                  <Product productData = {product}/>
                </Col>
              )
            })}
          </Row>
        </div>
      </Container>
    </>
  )
}

export default ProductListing