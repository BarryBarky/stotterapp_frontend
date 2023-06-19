getAllInfo = async () => {
    console.log(process.env)
    const response = await fetch(`${process.env.REACT_APP_DASHBOARD_URL}/api/info`);
    return await response.json();
}

export default getAllInfo;