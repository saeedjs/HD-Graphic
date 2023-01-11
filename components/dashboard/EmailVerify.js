import { Grid } from "@mui/material";
import Link from "next/link";

const EmailVerify = () => {
  return (
    <div>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item>
          <h2
            style={{
              color: "colors.green",
              textAlign: "center",
            }}
          >
            ایمیل شما تایید شد
          </h2>
        </Grid>
        <Grid item>
          <img
            src="/images/email-clipart-verification-mail-1.png"
            style={{
              width: "300px",
              height: "300px",
            }}
            // email for every reqaust and comming
          />
        </Grid>
        <Grid item>
          <Link
            href={"/dashboard"}
            style={{
              color: "colors.green",
            }}
          >
            برگشت به صفحه پروفایل
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};
export default EmailVerify;
