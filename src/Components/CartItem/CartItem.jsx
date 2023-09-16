import PropTypes from 'prop-types'

const CartItem = ({product, idx}) => {
    const {title} = product

    
    return (
        <div>
            <h3 className='text-[#1C1B1B99] font-medium'>{idx + 1}. {title}</h3>
        </div>
    );
};

CartItem.propTypes = {
    product: PropTypes.object,
    idx: PropTypes.number,
}

export default CartItem;