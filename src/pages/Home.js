import Paper from '@mui/material/Paper';
import Header from '../components/Header'
import Footer from '../components/Footer'
import CurrentPosition from '../components/CurrentPosition'
import PrirorExp from '../components/PrirorExp';
import CertificationEducation from '../components/CertificationEducation';
import Skills from '../components/Skills';
export default function Home(){
	return(
		<Paper sx={{ margin: '5ch 5ch', padding: '2ch 5ch' }}>
			<Header />
			<CurrentPosition />
			<Skills />
			<PrirorExp />
			<CertificationEducation />
			<Footer/>		
		</Paper>

	);
}
