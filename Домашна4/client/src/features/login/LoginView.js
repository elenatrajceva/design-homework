import React, { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import { Paper, Container, Grid, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "../../utils/use_auth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory, useLocation } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    marginTop: "14em",
  },
  paper: {
    padding: "2em",
  },
}));
const schema = yup.object().shape({
  username: yup.string().trim().required(),
  password: yup.string().trim().required(),
  email: yup.string().email().trim(),
  confPassword: yup.string().trim(),
});

const LoginView = () => {
  const auth = useAuth();
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();
  const [isRegister, setIsRegister] = useState(false);
  let { from } = location.state || { from: { pathname: "/" } };
  console.log(from);
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // console.log(data);
    auth.signin(data.username, data.password,()=>{
      history.replace(from);
      history.push("/main");
    });
    // console.log(errors);
  };
  return (
    <Container className={classes.container} maxWidth="xs">
      <Paper className={classes.paper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            {isRegister ? (
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      inputRef={register}
                      label="Username"
                      name="username"
                      size="medium"
                      error={errors.username ? true : false}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      inputRef={register}
                      label="Email"
                      name="email"
                      error={errors.email ? true : false}
                      size="medium"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      inputRef={register}
                      label="Password"
                      name="password"
                      size="medium"
                      error={errors.password ? true : false}
                      type="password"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      inputRef={register}
                      label="Confirm password"
                      name="confPassword"
                      error={errors.confPassword ? true : false}
                      size="medium"
                      type="password"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      inputRef={register}
                      label="Username"
                      name="username"
                      error={errors.username ? true : false}
                      size="medium"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      inputRef={register}
                      label="Password"
                      name="password"
                      error={errors.password ? true : false}
                      size="medium"
                      type="password"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Grid>
            )}
            <Grid item xs={12}>
              <Button
                color="secondary"
                fullWidth
                type="submit"
                variant="contained"
              >
                {isRegister ? "isRegister" : "Log in"}
              </Button>
            </Grid>
            <Grid item xs={12}>
              {isRegister ? null : (
                <Button
                  color="secondary"
                  fullWidth
                  variant="contained"
                  onClick={() => {
                    setIsRegister(true);
                  }}
                >
                  isRegister
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};
export default LoginView;
