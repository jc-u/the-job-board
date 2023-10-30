import Header from "./components/Header";
import Jobs from "./components/Job";
import Footer from "./components/Footer";
import "./index.css";
import "./App.css";

function App() {
	return (
		<>
			<Header />
			<div className="container">
				<Jobs
					className="item red"
					title="Full Time Sales Associate - Sydney Boutique"
					contracttype="CDI"
					country="Australie"
					city="Sydney"
				/>
				<Jobs
					className="item green"
					title="Agent de Sécurité - Pantin"
					contracttype="CDI"
					country="France"
					city="Pantin"
				/>
				<Jobs
					className="item yellow"
					title="Responsable d'Atelier (H/F)"
					contracttype="CDD"
					country="France"
					city="Pantin"
				/>
				<Jobs
					className="item blue"
					title="Chef de Projets"
					contracttype="CDD"
					country="France"
					city="Paris"
				/>
				<Jobs
					className="item pink"
					title="Développeur React.js"
					contracttype="CDI"
					country="France"
					city="Paris"
				/>
				<Jobs
					className="item red"
					title="Sales Associate Stockholm"
					contracttype="CDI"
					country="Suède"
					city="Stockholm"
				/>
				<Jobs
					className="item green"
					title="Vendeur/se - Crans Montana"
					contracttype="CDI"
					country="Suisse"
					city="Crans Montana"
				/>
				<Jobs
					className="item yellow"
					title="CRM & Data Quality Analyst"
					contracttype="CDI"
					country="USA"
					city="new York"
				/>
				<Jobs
					className="item blue"
					title="Infirmier"
					contracttype="CDI"
					country="France"
					city="Pantin"
				/>
			</div>
			<Footer />
		</>
	);
}

export default App;
