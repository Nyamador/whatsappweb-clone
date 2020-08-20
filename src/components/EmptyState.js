import React from 'react';
import online from '../online.jpg';
import styled from 'styled-components';

const EmptyStateWrapper = styled.div`
	flex-basis: 70%;
	padding-top: 28px;
	padding-bottom: 28px;
	background-color: var(--intro-background);
	cursor: default;
	border-left: 1px solid var(--border-stronger);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	text-align: center;
`;

const EmptyState = () => {
	return (
		<EmptyStateWrapper className="_1kdBg">
			<img src={online} style={{ width: '250px', height: '250px' }} />
			<div
				className="PdaRW"
				style={{ opacity: '1', transform: 'translateY(0px)' }}
			>
				<h1 className="_2dH1A">Keep your phone connected</h1>
				<div className="m7gJ2">
					WhatsApp connects to your phone to sync messages. To reduce
					data usage, connect your phone to Wi-Fi.
				</div>
				<div className="wx6zh">
					<div className="_1X4Oi"></div>
					<div className="_1pNt0">
						<span className="W55U1">
							<span
								data-testid="laptop"
								data-icon="laptop"
								className=""
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 21 18"
									width="21"
									height="18"
								>
									<path
										fill="currentColor"
										d="M10.426 14.235a.767.767 0 0 1-.765-.765c0-.421.344-.765.765-.765s.765.344.765.765-.344.765-.765.765zM4.309 3.529h12.235v8.412H4.309V3.529zm12.235 9.942c.841 0 1.522-.688 1.522-1.529l.008-8.412c0-.842-.689-1.53-1.53-1.53H4.309c-.841 0-1.53.688-1.53 1.529v8.412c0 .841.688 1.529 1.529 1.529H1.25c0 .842.688 1.53 1.529 1.53h15.294c.841 0 1.529-.688 1.529-1.529h-3.058z"
									></path>
								</svg>
							</span>
						</span>
						<div className="_1LQvt">
							WhatsApp is available for Windows.
							<a
								href="https://www.whatsapp.com/download"
								target="_blank"
							>
								Get it here
							</a>
							.
						</div>
					</div>
				</div>
			</div>
		</EmptyStateWrapper>
	);
};

export default EmptyState;
