import Box from "@mui/material/Box";
function Home() {
  return (
    <Box
      sx={{ display: "flex", backgroundColor: "white" }}
      className="rounded-5 p-3"
    >
      <Box sx={{ flexGrow: 1, p: 2 }} className="p-0">
        {" "}
        <div className="border border-2 rounded-5 p-3  mb-3 vh-100">
          Dashboard
        </div>
      </Box>
    </Box>
  );
}

export default Home;
