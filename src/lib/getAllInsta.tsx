export default async function getAllInsta() {
    
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,username,timestamp&access_token=${process.env.IG_Token}`;
    const res = await fetch(url)

    if (!res.ok) throw new Error('failed to fetch data')

    const feed = await res.json();
    return feed.data;
   
}
