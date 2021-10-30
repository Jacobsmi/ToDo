const deleteBoard = async (id: number) => {
    const res = await fetch("http://localhost:5000/boards", {
        method: "DELETE", 
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            id: id
        })
    })
    const resJSON = await res.json();
    return resJSON;
}

export default deleteBoard;