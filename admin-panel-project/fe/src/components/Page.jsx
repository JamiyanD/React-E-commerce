import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import { Link as RouterLink, useLocation } from "react-router-dom";
export const breadcrumbNameMap = {
  "/user-management": "User Management",
  "/usersList": "Users List",
  "/newUser": "New User",
  "/eCommerce": "eCommerce",
  "/productsList": "Products List",
  "/newProduct": "New Product",
};
function LinkRouter(props) {
  return <Link {...props} component={RouterLink} />;
}

export default function Page() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div style={{ backgroundColor: "#217AFF" }}>
      <Container
        sx={{
          paddingY: "15px",
          color: "white",
        }}
      >
        <Breadcrumbs aria-label="breadcrumb">
          <LinkRouter underline="hover" color="white" to="/">
            <i class="bi bi-house-door me-2"></i>
          </LinkRouter>
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;

            return last ? (
              <Typography color="white" key={to}>
                {breadcrumbNameMap[to]}
              </Typography>
            ) : (
              <LinkRouter underline="hover" color="white" to={to} key={to}>
                {breadcrumbNameMap[to]}
              </LinkRouter>
            );
          })}
        </Breadcrumbs>
      </Container>
    </div>
  );
}
