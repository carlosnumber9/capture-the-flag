import { getHTML } from "./fetch";

const getCharacterFromDOMNode = (node: HTMLElement): string | null | undefined => node.querySelector('div')?.querySelector('span')?.querySelector('i')?.getAttribute('value');

const getFlagURLFromDocument = (document: Document | undefined): string => {
    if (!document) return '';
    const codes: HTMLElement[] = Array.from(document.querySelectorAll('code'));
    const characters: (string | null | undefined)[] = codes.map((node: HTMLElement) => getCharacterFromDOMNode(node));
    return characters.filter((character: (string | null | undefined)) => typeof character === 'string').join('');
};

export const getFlagURL = async (): Promise<string> => {
    const challengeHTML: string | undefined = await getHTML('https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge');
    if (challengeHTML) {
        const parser: DOMParser = new DOMParser();
        const document: Document = parser.parseFromString(challengeHTML, "text/html");
        return getFlagURLFromDocument(document);
    }
    else return '';
}

export const getFlag = async (): Promise<string | undefined> => {
    const flagURL: string = await getFlagURL();
    return await getHTML(flagURL);
}