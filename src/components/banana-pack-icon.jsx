import { useState } from 'react';
import Image from "next/image";

export default function BananaPackIcon() {
    const [isBananaPackVisible, setBananaPackVisible] = useState(false);

    const handleMouseEnter = () => {
        setBananaPackVisible(true);
    };

    const handleMouseLeave = () => {
        setBananaPackVisible(false);
    };

    return (
        <div
            className={"absolute bottom-2 right-2"}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Image
                src="/icons/banana-pack.png"
                alt={"banana pack"}
                width={50}
                height={50}
                className={`transition-opacity duration-500 ${isBananaPackVisible ? 'opacity-100' : 'opacity-0'}`}
            />
        </div>
    );
}