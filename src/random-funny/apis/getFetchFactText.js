

export const getFetchFactText = async() => {
    const url = `https://uselessfacts.jsph.pl/random.json?language=en`;
    const response = await fetch( url );
    const { text } = await response.json();
    return text;
}
