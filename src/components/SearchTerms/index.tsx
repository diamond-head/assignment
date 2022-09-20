import { Grid } from "@mui/material"
import { Wrapper, List, HeadListItem, ListItem } from "./search-terms.styled";
import { useNavigate } from "react-router-dom";
import { Term } from "../../interfaces"

interface SearchedTermsProps {
	terms: Term[];
}

const SearchedTerms = ({ terms }: SearchedTermsProps) => {
	const navigate = useNavigate()

	const handleRedirectSearch = (username: string) => {
		if (!username) {
			return
		}

		navigate(`/?username=${username}`)
	}

  return (
		<Wrapper>
			<List>
				<Grid container>
					<HeadListItem>
						<Grid item xs={6}>Timestamp</Grid>
						<Grid item xs={6}>Username</Grid>
					</HeadListItem>
				</Grid>
				<Grid container>
					{terms.map((term: Term) => (
						<ListItem onClick={() => handleRedirectSearch(term.username)} key={term.timeStamp}>
							<Grid item xs={6}>{new Date(term.timeStamp).toUTCString()}</Grid>
							<Grid item xs={6}>{term.username}</Grid>
						</ListItem>
					))}
				</Grid>
			</List>
		</Wrapper>
	)
}

export default SearchedTerms;