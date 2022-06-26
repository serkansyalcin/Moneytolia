const credsHandler = async ({username,password}) => {
    let creds = localStorage.getItem('moneytolia-sample-auth');
    if (creds) creds = JSON.parse(creds);
    if (creds.username === username && creds.password === password) {
        await localStorage.setItem('moneytolia-sample-auth-isAuthenticed', 'true');
        return true;
    } else {
        return false;
    }
}
export default credsHandler;

export const isAuthenticated = async() => {
    await createSchema()
    const isAuthenticated = localStorage.getItem('moneytolia-sample-auth-isAuthenticed');
    return isAuthenticated === 'true';
}

const createSchema = async() => {
    const data = localStorage.getItem('moneytolia-sample-auth');
    if (!data) {
        await localStorage.setItem('moneytolia-sample-auth', JSON.stringify({
            username: "delta",
            password: "password"
        }));
    }
    return true;
}
