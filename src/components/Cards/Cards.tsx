import React from "react";
import { styled } from "styled-components";
import Card from "../Card/Card";

export function Cards() {
	return (
		<CardsContainer>
			<Card />
		</CardsContainer>
	);
}

const CardsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
`;
