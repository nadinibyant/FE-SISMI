export default async function ListDisposisiKalab (){
    const token = localStorage.getItem('tokenKalab')

    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    }

    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/listDisposisiKalab`, requestOptions)
        const results = await response.json()
        return results
    } catch (error) {
        console.log("Fetch error:", error);
        throw error;
    }
}