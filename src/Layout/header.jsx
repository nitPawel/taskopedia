import logo from "../images/react.png";

const MainHeader = () => {
	return (
		<div className="pt-2 py-1 pl-2 bg-dark">
			<img src={logo} style={{height: "35px", verticalAlign: "top"}} alt='logo'></img>
			<span className="h2 pt-4 text-white-50"> React Course - TaskOPedia</span>
		</div>
	);
};
const subHeaderStyle = {
	color: "blueviolet",
	backgroundColor: "lightgray",
};

const SubHeader = () => {
	return <h3 style={subHeaderStyle} className="text-center">To będzie wspaniały kurs</h3>;
};

const Header = () => {
	return (
		<div>
			<MainHeader />
			<SubHeader />
		</div>
	);
};

export default Header;
