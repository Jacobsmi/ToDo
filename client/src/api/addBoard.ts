const addBoard = async (name: string) => {
    const res = await fetch("http://localhost:5000/boards", {
        method: "POST", 
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            name: name
        })
    })
    const resJSON = await res.json();
    return resJSON;
}

export default addBoard;