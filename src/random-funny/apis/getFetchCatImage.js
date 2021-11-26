export const getFetchCatImage = async() => {
    const url = `https://api.thecatapi.com/v1/images/search`;
    const response = await fetch( url );
    const [ data ] = await response.json();
    // const image = data.map( img => {
    //     return ({
    //         url: img.url,
    //     })
    // })
    return data;
}
