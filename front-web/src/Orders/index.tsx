import './style.css';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { useEffect, useState } from 'react';
import { Product, OrderLocationData } from './types';
import { fetchProducts } from '../api';
import OrdersLocation from './OrdersLocation';


function Orders() {

	const [products, setProducts] = useState<Product[]>([]);
	const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

	useEffect( () => {
		fetchProducts()
			.then(response => setProducts(response.data))
			.catch(error => console.log(error))
	
	}, []); 	
	
	return (
		<div>
			<StepsHeader />
			<ProductsList products={products}/>
			<OrdersLocation onChangeLocation={location => setOrderLocation(location)} />
		</div>
	)
}

export default Orders;
