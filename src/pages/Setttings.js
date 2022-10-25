import { Box } from "@mui/system";
import { Button, CircularProgress, Typography } from "@mui/material";
import SelectField from "../components/SelectField";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";

const Setttings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });

  const  navigate = useNavigate()

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  const Difficulty = [
    {id:'easy',name:"Easy"},
    {id:'medium',name:"Medium"},
    {id:'hard',name:"Hard"}
  ]
  const Type = [
    {id:"multiple",name:"Multyple Choise"},
    {id:"boolean",name:"True/False"}
  ]

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Some Went Wrong!
      </Typography>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/questions")
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Quiz App</h1>
      <SelectField options={response.trivia_categories} label="Category" />
      <SelectField options={Difficulty}  label="Difficulty" />
      <SelectField options={Type} label="Type" />
      <TextFieldComp />
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit">
          Get Started
        </Button>
      </Box>
    </form>
  );
};

export default Setttings;
