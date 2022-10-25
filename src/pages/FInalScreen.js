import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAmountChange, handleScoreChange } from "../redux/action";

const FInalScreen = () => {
  const dispath = useDispatch();
  const { score } = useSelector((state) => state);
  const navigate = useNavigate()

  const handleBackToSettings = () => {
    dispath(handleScoreChange(0));
    dispath(handleAmountChange(50))
    navigate("/")
  }
  
  return (
    <Box mt={30}>
      <Typography variant="h3" fonrWeight="bold" mb={3}>
        Final score {score}
      </Typography>
      <Button onClick={handleBackToSettings} variant="outlined"> Back to settings </Button>
    </Box>
  );
};

export default FInalScreen;
