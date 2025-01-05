const getHTML = async () => {
    try {
        const response = await fetch("https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const html = await response.text();
        const parser: DOMParser = new DOMParser();
        return parser.parseFromString(html, "text/html");
    } catch (error) {
        console.error("Error al cargar el documento:", error);
    }
}

const getCharacterFromDOMNode = (node: HTMLElement): string | null | undefined => node.querySelector('div')?.querySelector('span')?.querySelector('i')?.getAttribute('value');

const getFlagURL = (document: Document | undefined): string => {
    if(!document) return '';
    const codes: HTMLElement[] = Array.from(document.querySelectorAll('code'));
    const characters: (string | null | undefined)[] = codes.map((node: HTMLElement) => getCharacterFromDOMNode(node));
    return characters.filter((character: (string | null | undefined)) => typeof character === 'string').join('');
};

export const showURL = async () => {
    const document: Document | undefined = await getHTML();
    console.debug(getFlagURL(document));
}