import {
	List as MuiList,
	ListItem as MuiListItem
} from "@mui/material"
import styled from '@emotion/styled'

export const List = styled(MuiList)({
	display: 'flex',
	flexDirection: 'column',
	gap: 8
})

export const Wrapper = styled.div`
	margin-top: 8px;
  border: 1px solid #d0d7de;
	padding: 16px;
`

export const HeadListItem = styled(MuiListItem)({
	padding: 8,
	background: '#57606a',
	color: '#fff'
})

export const ListItem = styled(MuiListItem)({
	borderBottom: '1px solid #d0d7de',
	padding: 8,
	cursor: 'pointer'
})
