import Image from "next/image";
import Link from "next/link";


const NotFound = () => {
    return (
        <>
            <div className="flex justify-center items-center">
                <Image
                    src={'/not-found.png'}
                    width={500}
                    height={500}
                    alt="not found"
                    className=""
                />
            </div>
            <div className="flex justify-center items-center mt-4">
                <Link href='/' className="px-4 py-1 text-xs text-white rounded-xs bg-button">
                    Go Home
                </Link>
            </div>
        </>
    );
};

export default NotFound;