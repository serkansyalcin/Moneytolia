const bootstrapper = async() => {
    const data = localStorage.getItem('moneytolia-sample-auth');
    if (!data) {
        await localStorage.setItem('moneytolia-sample-auth', JSON.stringify({
            username: "delta",
            password: "aVeryStrongPassword"
        }));
    }
    return true;
}

export default bootstrapper;
