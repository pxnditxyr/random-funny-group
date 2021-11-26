
export const getFetchDogImage = async() => {
    const url = `https://random.dog/woof.json`;
    const response = await fetch( url );
    const { url:file } = await response.json();
    return file;
}
