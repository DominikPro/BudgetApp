import React, { useState } from "react";
import { Link } from "react-router-dom";
//========================================================================
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Container, Toolbar, Typography, IconButton, Box, Menu, MenuItem, Button } from "@mui/material";
import Divider from "@material-ui/core/Divider";
import { textAlign } from "@mui/system";
//========================================================================
const pages = [
	{ name: "Podusmowanie", link: "/" },
	{ name: "Dochody", link: "/Incom" },
	{ name: "Wydatki", link: "/Expens" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const Navigation = () => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	return (
		<>
			<AppBar position="static">
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Typography variant="h5" noWrap component="div" sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
							Twój Budżet
						</Typography>

						<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
							<IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: "block", md: "none" },
								}}>
								{pages.map((page) => (
									<div key={page.name}>
										<Button
											variant="outlined"
											component={Link}
											{...({ to: page.link } as any)}
											onClick={handleCloseNavMenu}
											sx={{ m: 1, color: "primary", display: "block", textAlign: "center" }}>
											{page.name}
										</Button>
										<Divider />
									</div>
								))}
							</Menu>
						</Box>
						<Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
							Twój Budżet
						</Typography>
						<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
							{pages.map((page) => (
								<Button component={Link} {...({ to: page.link } as any)} key={page.name} onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
									{page.name}
								</Button>
							))}
						</Box>

						<Box sx={{ flexGrow: 0 }}>
							<Menu
								sx={{ mt: "45px" }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}>
								{settings.map((setting) => (
									<MenuItem key={setting} onClick={handleCloseUserMenu}>
										<Typography textAlign="center">{setting}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</>
	);
};

export default Navigation;
