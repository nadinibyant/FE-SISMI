export default async function DataBarangTersedia (){
    const token = localStorage.getItem('tokenMhs')

    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    }

    try {
        const response = await fetch(`/api/dataBarangMhs`, requestOptions);
        const result = await response.json()
        return result
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
      }
}