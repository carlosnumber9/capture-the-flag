import React, { useEffect, useState } from "react";

interface Props {
    flag: string;
}

export const Flag: React.FC<Props> = ({ flag }) => {
    const [flagToUse, setFlagToUse] = useState<string[]>([]);

    useEffect(() => {
        for (const [index, character] of [...flag].entries()) {
            setTimeout(() => setFlagToUse((prev: string[]) => [...prev, character]), index * 500);
        }
    }, [])

    return <ul>
        {flagToUse.map((character: string) => <li key={`flag-${character}`}>{character}</li>)}
    </ul>;
}