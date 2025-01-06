export const getHTML = async (url: string): Promise<string | undefined> => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.text();
    } catch (error) {
        console.error("Error al cargar el documento:", error);
    }
}