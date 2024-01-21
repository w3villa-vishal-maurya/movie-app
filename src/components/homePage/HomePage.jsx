import React from "react";
import Header from "./header/Header";
import JumboTron from "./jumbotron/JumboTron"

import Footer from "./footer/Footer";
import './homePage.scss'

const HomePage = () => {
	return (
		<div>
			<Header />
			<JumboTron />
			<Footer />
		</div>
	);
};

export default HomePage;
