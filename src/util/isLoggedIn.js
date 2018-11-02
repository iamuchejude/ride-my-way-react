import jwtDecode from 'jwt-decode';

const isLoggedIn = () => {
    const { token } = localStorage;
    let decoded;

    try {
        decoded = jwtDecode(token);
    } catch (error) {
        return false;
    }
}

export default isLoggedIn;
