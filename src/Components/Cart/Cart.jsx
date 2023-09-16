import PropTypes from 'prop-types'
import CartItem from "../CartItem/CartItem";


const Cart = ({products, credits, totalPrice}) => {
    return (
        <div className="flex-1 h-full bg-white rounded-lg p-6">
            <h2 className="text-lg font-bold text-[#2F80ED] pb-4 border-b">Credit Hour Remaining {20 - credits} hr</h2>
            <h2 className='text-xl font-bold my-4'>Course Name</h2>
            <div className='pb-6'>
            {
                products.map(product => <CartItem 
                    key={product.id}
                    product={product}
                    ></CartItem>)
            }
            </div>
            <p className='font-medium text-[#1C1B1BCC] py-4 border-t'>Total Credit Hour : {credits}
            </p>
            <p className='font-medium text-[#1C1B1BCC] pt-4 border-t'>Total Price : {totalPrice} USD</p>
        </div>
    );
};

Cart.propTypes = {
    products: PropTypes.array,
    credits: PropTypes.number,
    totalPrice: PropTypes.number,
}


export default Cart;