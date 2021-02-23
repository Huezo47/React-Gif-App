
export const getGifs = async(categoria)=> {
         
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=or9x1i0KKZ9S8LwjfAJTWZ6VMHZ2aNnq`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(d => {
        return {
            id: d.id,
            title: d.title,
            url: d.images.downsized_medium.url
        }
    })

    return gifs
};