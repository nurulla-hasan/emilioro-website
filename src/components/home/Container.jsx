import React from 'react';

const Container = ({children}) => {
    return (
        <div className='xl:w-8/11 lg:w-10/12 px-5 my-10 mx-auto'>
            {children}
        </div>
    );
};

export default Container;