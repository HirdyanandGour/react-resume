import Paper from '@mui/material/Paper';
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Home(){
	return(
		<Paper sx={{ margin: '5ch 5ch', paddingY: 'auto 10ch' }}>
			<Header />
			<Footer/>		
		</Paper>

	);
}
