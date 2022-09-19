import {
	List as MuiList,
	ListItem as MuiListItem,
	Grid
} from "@mui/material"
import styled from '@emotion/styled'
import { useNavigate } from "react-router-dom";
import { Term } from "../common/interfaces"

interface SearchedTermsProps {
	terms: Term[];
}

const List = styled(MuiList)({
	display: 'flex',
	flexDirection: 'column',
	gap: 8
})

const Wrapper = styled.div`
	margin-top: 8px;
  border: 1px solid #d0d7de;
	padding: 16px;
`

const HeadListItem = styled(MuiListItem)({
	padding: 8,
	background: '#57606a',
	color: '#fff'
})

const ListItem = styled(MuiListItem)({
	borderBottom: '1px solid #d0d7de',
	padding: 8,
	cursor: 'pointer'
})


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