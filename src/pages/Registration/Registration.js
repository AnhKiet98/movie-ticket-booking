import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux';
import { dangKiApiAction } from '../../redux/Action/QuanLyDangKyAction'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
export default function Registration() {
  let stateLogin = false;
  let history = useHistory();
  let dispatch = useDispatch();
  const [userRegistration, setUserRegistration] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "",
    maLoaiNguoiDung: "",
    hoTen: ""
  })
  console.log(userRegistration);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserRegistration({
      ...userRegistration,
      [name]: value
    })
  }

  const login = (e) => {
    e.preventDefault();
    dispatch(dangKiApiAction(userRegistration, history, stateLogin));
  }
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
        </Typography>
          <ValidatorForm className={classes.form} noValidate onSubmit={login}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="hoTen"
                  variant="outlined"
                  required
                  fullWidth
                  id="hoTen"
                  label="Tên Người Dùng"
                  autoFocus
                  onChange={handleChange}
                  value={userRegistration.hoTen}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="=userName"
                  label="Tài Khoản"
                  name="taiKhoan"
                  autoComplete="userName"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextValidator
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  value={userRegistration.email}
                  autoComplete="email"
                  validators={['required', 'isEmail']}
                  errorMessages={['This field is required', 'Email is not valid']}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="soDt"
                  label="Số Điện Thoại"
                  name="soDt"
                  autoComplete="soDt"
                  value={userRegistration.soDt}

                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="matKhau"
                  label="Mật Khẩu"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
          </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <NavLink to="/login" variant="body2">
                  Already have an account? Sign in
              </NavLink>
              </Grid>
            </Grid>
          </ValidatorForm>
        </div>
      </Container>
    </div>
  )
}

