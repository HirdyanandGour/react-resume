import Typography from "@mui/material/Typography";
import Box  from "@mui/material/Box";

export default function CurrentPosition(){
	return(<>
		<Box sx={{borderTop: '2px dotted #000'}}>
			<Typography varient="h3">
				Current Position:
			</Typography>
			<Typography varient="h6">
				Current working as a freelancer, getting project from some company.
			</Typography>
		</Box>
	</>);
}
