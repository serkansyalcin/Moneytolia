const credsHandler = async ({username,password}) => {
    let creds = localStorage.getItem('moneytolia-sample-auth');
    if (creds) creds = JSON.parse(creds);
    return (creds.username === username && creds.password === password);
}

export default credsHandler;
