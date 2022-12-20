import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { SvgIcon } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";

const pages = ["About", "Projects", "Blog", "Contact"];
const socials = ["Twitter", "Github", "LinkedIn"];
const socialIcons = [TwitterIcon, GitHubIcon, LinkedInIcon];
const socialLinks = [
	"https://www.twitter.com/PumpingLlama",
	"https://www.github.com/mcb2284",
	"https://www.linkedin.com/in/michael-c-bollinger/",
];

function NavBar() {
	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="absolute" color="transparent" elevation={0}>
			<Container maxWidth="xl" sx={{ bgcolor: "rgba(31, 36, 46, 0.1)" }}>
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "#DDDDDD",
							textDecoration: "none",
						}}
					>
						{" "}
						MB{" "}
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon sx={{ color: "white" }} />
						</IconButton>

						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
							keepMounted
							transformOrigin={{ vertical: "top", horizontal: "left" }}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem
									key={page}
									href={"#" + page}
									onClick={handleCloseNavMenu}
								>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{pages.map((page) => (
							<Button
								key={page}
								href={"#" + page}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: "white", display: "block" }}
							>
								{page}
							</Button>
						))}
					</Box>
					<Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenUserMenu}
							color="inherit"
						>
							<GroupIcon sx={{ color: "white" }} />
						</IconButton>

						<Menu
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
							keepMounted
							transformOrigin={{ vertical: "top", horizontal: "left" }}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
							sx={{ display: { xs: "block", md: "none" } }}
						>
							{socials.map((setting) => (
								<Link
									href={socialLinks[socials.indexOf(setting)]}
									key={setting}
									underline="none"
									variant="body1"
									rel="noopener"
									target="_blank"
									sx={{ color: "#444444" }}
								>
									<MenuItem key={setting} onClick={handleCloseUserMenu}>
										<SvgIcon
											component={socialIcons[socials.indexOf(setting)]}
										/>
									</MenuItem>
								</Link>
							))}
						</Menu>
					</Box>
					<Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
						{socials.map((setting) => (
							<Link
								href={socialLinks[socials.indexOf(setting)]}
								key={setting}
								underline="none"
								variant="body1"
								rel="noopener"
								target="_blank"
								sx={{ color: "white" }}
							>
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<SvgIcon component={socialIcons[socials.indexOf(setting)]} />
								</MenuItem>
							</Link>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default NavBar;