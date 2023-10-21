import { Paper, Typography } from "@mui/material";

export default function CertificationEducation(){
	const edu = [
		{ "id" : "1", "degree" : "Graduation in Information Technology ( BTECH )", "detail": "complete graduation in information technology and learn diffreent technology."},
		{ "id" : "2", "degree" : "certification in design pattern development", "detail": "attends diffrent design pattern learning seminars / webinar."}
];
	return(<>
		<Paper sx={{borderTop: "2px dotted #000"}}>
			<Typography vareint="h3">
				Education & Certification
			</Typography>
			{
				edu.map( (items) => (
					<div key={items.id}>
						<Typography>
							{items.degree}
						</Typography>
						<Typography vareint="h6">
							{items.detail}
						</Typography>
					</div>
				) )
			}
		</Paper>
	</>);
}
