

const Container = ({children}) => {
    return (
        <div className='px-5 md:px-0 mx-auto my-5 max-w-7xl'>
            {children}
        </div>
    );
};

export default Container;