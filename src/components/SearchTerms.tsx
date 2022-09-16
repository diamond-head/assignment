import { List, ListItem } from "@mui/material"
import { Term } from "../common/interfaces"

interface SearchedTermsProps {
	terms: Term[];
}

const SearchedTerms = ({terms}: SearchedTermsProps) => {
  return (
		<List>
			{terms.map((term) => (
				<ListItem key={term.timeStamp}>
					{term.value} - {term.timeStamp}
				</ListItem>
			))}
		</List>
	)
}

export default SearchedTerms;