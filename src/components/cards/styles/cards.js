import styled from 'styled-components/macro'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding: 2rem 0;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-between;
	}
`