import React from 'react';
import Image from "next/image";
import Black from '@logo/Logo_black.svg';

function Logo(props) {
    return (
        <Image className="flex"
            src= {Black}
            alt="Logo"
            width={54}
            height={79}
            priority="true"
            quality={75}
        />
    );
}

export default Logo;
