import { Box, Typography } from "@mui/material";

export default function PrirorExp(){
	const companyDetail= [
		{ "companyHead" : "Work in Qrarks Infotech : Full Stack Developer", "info" : "Work in organization as Full stack Developer as Javascript Developer and Laravel Developer."},
		{ "companyHead" : "Work in Konstant Technology : Laravel Developer", "info" : "Work in Orgnization as Laravel Developer with Laravel", "projects" : "complete ERP system of CVPL with Laravel "}
	]
	return (<>
		<Box sx={{ borderTop: '2px dotted #000'}}>
			<Typography varient="H3">
				Past Work Experience
			</Typography>
			{
				companyDetail.map( (items) => (
					<div key={items.companyHead}>
						<Typography className="companyHead" vareint="h6">
							{items?.companyHead }
						</Typography>
						<Typography className="info" vareint="h6">
							{items?.info}						
						</Typography>
						<Typography className="info" vareint="h6">
							{items?.projects}						
						</Typography>
					</div>
				))
			}

		</Box>
	</>);
}
