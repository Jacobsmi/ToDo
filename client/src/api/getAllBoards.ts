const getAllBoards = async () => {
  const res = await fetch("http://localhost:5000/boards", {
    method: "GET",
  });
  const resJSON = await res.json();
  return resJSON;
};

export default getAllBoards;
