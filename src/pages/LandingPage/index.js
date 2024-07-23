import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import DropMenu from "./components/DropMenu";

const LandingPage = () => {
  const [selectedToggle, setSelectedToggle] = useState("Pipeline");
  return (
    <Box>
      <Grid container spacing={2} p={4}>
        <Grid item xs={3.6}>
          <Typography variant="h4">Deals</Typography>
        </Grid>
        <Grid item xs={8.4}>
          <Grid container>
            <Grid item xs={2.5}>
              <Button
                disabled={selectedToggle === "Table"}
                onClick={() => setSelectedToggle("Table")}
                variant="contained"
                size="medium"
                color="primary"
              >
                Table
              </Button>
              <Button
                variant="contained"
                size="medium"
                color="primary"
                disabled={selectedToggle === "Pipeline"}
                onClick={() => setSelectedToggle("Pipeline")}
              >
                Pipeline
              </Button>
            </Grid>
            <Grid xs={6}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid container item xs={3.5} justifyContent="space-evenly">
              <DropMenu />
              <Button variant="contained" size="medium" color="secondary">
                Pipeline
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box px={4}>
        <Divider sx={{ borderColor: "black" }} />
      </Box>
      <Grid container spacing={2} p={4}>
        <Grid item xs={3.6}>
          <InputLabel id="pipeliny" sx={{ mb: 2 }}>
            Pipeline
          </InputLabel>

          <FormControl id="pipeliney" fullWidth sx={{ mb: 1 }}>
            <InputLabel id="pipeline">Pipeline</InputLabel>
            <Select labelId="pipeline" id="pipe" label="Pipeline" value={10}>
              <MenuItem value={10}>Sales</MenuItem>
              <MenuItem value={20}>Profit</MenuItem>
              <MenuItem value={30}>Loss</MenuItem>
            </Select>
          </FormControl>

          <InputLabel id="Viewy" sx={{ mb: 2 }}>
            View
          </InputLabel>

          <FormControl fullWidth id="Viewy" sx={{ mb: 2 }}>
            <InputLabel id="Views">View</InputLabel>
            <Select labelId="Views" id="view" value={10} label="View">
              <MenuItem value={10}>All Deals</MenuItem>
              <MenuItem value={20}>Selected</MenuItem>
              <MenuItem value={30}>Not Selected</MenuItem>
            </Select>
          </FormControl>
          <Divider my={2} />
          <Typography variant="body2" color="GrayText">
            84 Deals
          </Typography>
          <Button variant="contained" size="medium" sx={{ mt: 2 }}>
            Add Filter
          </Button>
        </Grid>
        <Grid item xs={8.4} bgcolor="#F2F7FC"></Grid>
      </Grid>
    </Box>
  );
};

export default LandingPage;
