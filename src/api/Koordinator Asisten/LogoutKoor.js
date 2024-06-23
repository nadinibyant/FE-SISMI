import Swal from "sweetalert2"

export default async function LogoutKoor (){
    const token = localStorage.getItem('tokenAsisten')

    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Bearer ${token}`)

    const requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    }

    try {
        const response = await fetch(`/api/logoutKordas`, requestOptions)
        const results = await response.json()
        if (results.success) {
            localStorage.removeItem('tokenAsisten')
            Swal.fire({
                icon: 'success',
                text: results.message,
                timer: 2000, 
                showConfirmButton: false
            }).then(() => {
                window.location.href = '/loginAsisten';
            });
        } else {
            Swal.fire({
                icon: 'error',
                text: results.message,
            });
        }
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            text: error.message,
        });
    }
}