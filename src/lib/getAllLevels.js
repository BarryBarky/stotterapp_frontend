const getAllLevels = async () => {
    console.log(process.env)
    const response = await fetch(`${process.env.REACT_APP_DASHBOARD_URL}/api/levels`);
    return await response.json();
}

export default getAllLevels;