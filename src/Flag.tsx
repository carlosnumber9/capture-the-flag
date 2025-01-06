import React, { useEffect, useState } from "react";

interface Props {
    flag: string;
}

export const Flag: React.FC<Props> = ({ flag }) => {
    const [flagToUse, setFlagToUse] = useState('');

    useEffect(() => {
        for (const [index, character] of [...flag].entries()) {
            setTimeout(() => setFlagToUse((prev: string) => prev + character), index * 500);
        }
    }, [])

    return <h1>{flagToUse}</h1>;
}