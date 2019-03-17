export const subreddits = [
    {key: 'alternativeart',label:'Alternativeart'},
    {key: 'pics',label:'Pics'},
    {key: 'gifs',label:'Gifs'},
    {key: 'adviceanimals',label:'Adviceanimals'},
    {key: 'cats',label:'Cats'},
    {key: 'images',label:'Images'},
    {key: 'photoshopbattles',label:'Photoshopbattles'},
    {key: 'hmmm',label:'Hmmm'},
    {key: 'aww',label:'Aww'},
    {key: 'all',label:'All'}
]

export const isValidImage = (url) => {
    if(!url) return false
    const image = url.replace(/^.*[\\\/]/, '')
    const img = image.split('.')
    if(img.length < 2) return false
    return ['jpg','jpeg','png','gif'].indexOf(img[1]) >= 0
}
export const getLargeVersionedImage = (imageUrl) => {
    const image = imageUrl.replace(/^.*[\\\/]/, '')
    const img = image.split('.')
    return imageUrl.replace(img[0],img[0]+"l");
}
