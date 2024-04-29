import React from "react";
import { styled } from "styled-components";
import { Cards } from "./Cards/Cards";

export function App() {
	return (
		<Container>
			<Cards />
		</Container>
	);
}

const Container = styled.div`
	margin-top: 10rem;
	max-width: 1240px;
	width: 100%;
	padding: 0 65px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
