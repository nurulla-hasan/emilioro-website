import React from 'react';

const Container = ({children}) => {
    return (
        <div className='px-5 mx-auto my-5 xl:w-8/9'>
            {children}
        </div>
    );
};

export default Container;