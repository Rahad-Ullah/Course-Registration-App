import PropTypes from 'prop-types'

const CartItem = ({product}) => {
    const { title} = product

    
    return (
        <div>
            <h3>{title}</h3>
        </div>
    );
};

CartItem.propTypes = {
    product: PropTypes.object
}

export default CartItem;