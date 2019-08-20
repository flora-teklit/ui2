import React from "react";
import download from "./download.png";
import Capture from "./Capture.PNG";
import "./App.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import { Link } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import HomeIcon from '@material-ui/core/SvgIcon';

import FormLabel from '@material-ui/core/FormLabel';

function App() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className="container">
      <Grid container spacing={12}>
        <Grid item className="leftside">
          <Grid item xs={12} className="leftside1">
            side
          </Grid>
          <Grid item xs={12} className="leftside2" >
          <img src={Capture} className="barcode" />
            </Grid>
          <Grid item xs={12} className="leftside3" />
        </Grid>
        <Grid xs={10} className="content">
          <Grid item xs={12} className="ctop">
            <Link href={App.js}>Home</Link>/<Link href={App.js}>Visits</Link>/
            <Link href={App.js}>patient</Link>
            <Grid container xs={12}>
              <Grid xs={4}>
                <img src={download} className="barcode" />
              </Grid>
              <Grid container xs={8}>
                <Grid xs={4}>
                  Gender
                  <br />
                  female
                </Grid>
                <Grid xs={4}>
                  Phone
                  <br />
                  09765
                </Grid>
                <Grid xs={4}>
                  Name
                  <br />
                  Amanuel Abrha
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className="cbottom">
            <Grid item xs={12} spacing={4} className="tab">
              <Paper>
                <Tabs value={2} indicatorColor="primary" textColor="primary">
                  <Tab label="DIALOG" />
                  <Tab label="PHY EXAM" />
                  <Tab label="ALLERGY" />
                  <Tab label="LABORATORY" />
                  <Tab label="DIAGNOSIS" />
                </Tabs>
              </Paper>
            </Grid>
            <Grid container xs={12} className="tab" >
              <Grid xs={2}>
                <form>
                  <FormControl required>
                    <InputLabel htmlFor="age-native-required">
                      PHY exam
                    </InputLabel>
                    <Select
                      native
                      value={1}
                      name="age"
                      inputProps={{
                        id: "age-native-required"
                      }}
                    >
                      <option value="" />
                      <option value={10}>phy exam 1</option>
                      <option value={20}>phy exam 2</option>
                      <option value={30}>phy exam 3</option>
                    </Select>
                  </FormControl>
                </form>
              </Grid>

              <Grid xs={2}>
                <form>
                  <FormControl required>
                    <InputLabel htmlFor="age-native-required">
                      Synptom
                    </InputLabel>
                    <Select
                      native
                      value={1}
                      name="age"
                      inputProps={{
                        id: "age-native-required"
                      }}
                    >
                      <option value="" />
                      <option value={10}>Symptom 1</option>
                      <option value={20}>Synptom 2</option>
                      <option value={30}>Synptom 3</option>
                    </Select>
                  </FormControl>
                </form>
              </Grid>
              <Grid>
                <Link
                  variant="outlined"
                  color="primary"
                  onClick={handleClickOpen}
                >
                  Vital Signs
                </Link>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">Vital signs</DialogTitle>
                  <DialogContent>
                    <TextField
                     id="standard-multiline-static"
                     label="Multiline"
                     multiline
                     rows="6"
                     defaultValue="Default Value"
                    
                     margin="normal"
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                      Save
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>
            </Grid>
            <Grid container>
              <Grid xs={6}>
            <FormControl component="fieldset">
      <FormLabel component="legend">labelPlacement</FormLabel>
      <FormGroup aria-label="position" name="position" row>
        
        <FormControlLabel
          value="Acutely sick looking"
          control={<Checkbox color="primary" />}
          label="Acutely sick looking"
          labelPlacement="start"
        />
         </FormGroup>

         <FormGroup aria-label="position" name="position" row>
        
        <FormControlLabel
          value="Acutely sick looking"
          control={<Checkbox color="primary" />}
          label="Acutely sick looking"
          labelPlacement="start"
        />
         </FormGroup>
    </FormControl>
</Grid>
<Grid xs={6}>

  
</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
