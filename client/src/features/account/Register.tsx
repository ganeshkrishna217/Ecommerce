import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import agent from "../../app/api/agent";
import { toast } from "react-toastify";

// function Copyright(props: any) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// TODO remove, this demo shouldn't need to reset the theme.

export default function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors, isValid },
  } = useForm({ mode: "onTouched" });

  function handleApiErrors(errors: any) {
    console.log(errors);
    errors.forEach((error: string) => {
      if (error.includes("Password")) setError("password", { message: error });
      if (error.includes("Username")) setError("username", { message: error });
      if (error.includes("Email")) setError("email", { message: error });
    });
  }
  return (
    <Container
      component={Paper}
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
      }}
    >
      <Avatar sx={{ m: 1, backgroundColor: "#00897b" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Register
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit((data) =>
          agent.Account.register(data)
            .then(() => {
              toast.success("Registartion Successful - you can now login");
              navigate("/login");
            })
            .catch((err) => handleApiErrors(err))
        )}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          label="Username"
          autoFocus
          {...register("username", { required: "Usrname is required" })}
          error={!!errors.username}
          helperText={errors?.username?.message as string}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\w+[\w-.]*@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/,
              message: "Not a valid email address",
            },
          })}
          error={!!errors.email}
          helperText={errors?.email?.message as string}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          {...register("password", { required: "Password is required" })}
          error={!!errors.password}
          helperText={errors?.password?.message as string}
        />
        <LoadingButton
          loading={isSubmitting}
          disabled={!isValid}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, backgroundColor: "#00897b" }}
        >
          Register
        </LoadingButton>
        <Grid container>
          <Grid item>
            <Link to="/login">{"Already have an account ? Sign In"}</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
