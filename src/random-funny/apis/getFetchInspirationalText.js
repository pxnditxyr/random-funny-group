

export const getFetchInspirationalText = async() => {
    const url = `https://meowfacts.herokuapp.com/`;
    const response = await fetch( url );
    const { data } = await response.json();
    return data;
}
