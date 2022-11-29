import Image from "next/image"

export const Cover = ({ children, background }) => {
    return (
        <div className="h-screen text-white bg-slate-800 relative min-h-[400px] flex justify-center items-center">
            <Image
                alt="Cover" 
                src={background}
                layout="fill" 
                objectFit="cover"
                className="mix-blend-soft-light" 
            />
            {children}
        </div>
    );
};