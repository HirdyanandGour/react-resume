import { Paper, Typography } from "@mui/material";

export default function Skills(){
	const skillSet = [
		{ "id" : "1", "type" : "Backend", "skill" : "Laravel", "profieciecy" : "Advance"},
		{ "id" : "2", "type" : "Backend", "skill" : "Node Js", "profieciecy" : "Advance"},
		{ "id" : "3", "type" : "Backend", "skill" : "Go Lang", "profieciecy" : "Advance"},		
		{ "id" : "4", "type" : "FrontEnd", "skill" : "ReactJs", "profieciecy" : "Advance"},
		{ "id" : "5", "type" : "FrontEnd", "skill" : "NextJs", "profieciecy" : "Advance"},
		{ "id" : "6", "type" : "Database", "skill" : "MySql", "profieciecy" : "Advance"},
		{ "id" : "7", "type" : "Database", "skill" : "MongoDB", "profieciecy" : "Advance"},

	];
	return(
		<>
			<Paper sx={{ borderTop: "2px dotted #000"}}>
				<Typography vareint="h3">
					Skills : Expertize level
				</Typography>
				{
					skillSet.map( (items) => (
						<div key={items.id}>
							<Typography vareint="h6">
								{items.skill} { items.type}
							</Typography>
							<Typography vareint="h6">
								{items.profieciecy}
							</Typography>
						</div>
					))
				}
			</Paper>
		</>
	);
}
