
import PropTypes from 'prop-types'
import { FiDollarSign } from 'react-icons/fi';
import {  HiOutlineBookOpen } from 'react-icons/hi';

const Course = ({course, handleAddToCart}) => {
    const {title, image, description, price, credit} = course;
    return (
        <div className='space-y-3 p-4 bg-white rounded-lg'>
            <img src={image} alt="" />
            <h2 className='text-lg font-semibold'>{title}</h2>
            <p className='text-[#1C1B1B99]'>{description}</p>
            <div className='flex gap-4'>
                <p className='flex items-center gap-3'>
                    <span className='text-xl'><FiDollarSign /></span>
                    <span className='text-[#1C1B1B99] font-medium'>Price : {price}</span>
                </p>
                <p className='flex gap-3 items-center'>
                    <span className='text-xl'><HiOutlineBookOpen /></span>
                    <span className='text-[#1C1B1B99] font-medium'>Credit : {credit}hr</span>
                </p>
            </div>
        <button onClick={() => handleAddToCart(course, credit, price)} className='p-2 bg-[#2F80ED] text-white text-lg font-semibold w-full rounded-lg hover:bg-[#1c6cd5]'>Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object,
    handleAddToCart: PropTypes.func
}

export default Course;