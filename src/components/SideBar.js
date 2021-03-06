import React from 'react';
import styled from 'styled-components';
import profilePhoto from '../profilephoto.jpg';
import cov from '../cov.jpg';

const SidebarWrapper = styled.div`
	flex-basis: 30%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

const SidebarHeaderWrapper = styled.div`
	padding: 10px 16px;
	background-color: var(--panel-header-background);
	display: flex;
	flex-direction: row;
`;

const ActionIcon = styled.div`
	padding: 8px;
	border-radius: 50%;
	position: relative;
	flex: none;
	height: 24px;
	transition: background-color 100ms ease 0ms;
	cursor: pointer;
`;

const SearchBarWrapper = styled.div`
	background-color: var(--search-container-background);
	position: relative;
	z-index: 100;
	flex: none;
	box-sizing: border-box;
	height: 49px;
	transition: box-shadow 0.18s ease-out,
		background-color 0.25s ease-out;
`;

const SidebarHeader = () => {
	return (
		<header>
			<SidebarHeaderWrapper>
				<div className="profilephoto-container">
					<div
						style={{
							height: '40px',
							width: ' 40px',
							cursor: 'pointer',
						}}
					>
						<img
							src={profilePhoto}
							alt="Profile"
							className="profilephoto"
						/>
					</div>
				</div>

				<div className="action-center">
					<span style={{ display: 'flex' }}>
						<ActionIcon>
							<div role="button" title="status">
								<svg
									id="df9d3429-f0ef-48b5-b5eb-f9d27b2deba6"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="24"
									height="24"
								>
									<path
										fill="currentColor"
										d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"
									></path>
									<path
										fill="#009588"
										d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
									></path>
								</svg>
							</div>
						</ActionIcon>

						<ActionIcon>
							<div role="button">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="24"
									height="24"
								>
									<path
										fill="currentColor"
										d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"
									></path>
								</svg>
							</div>
						</ActionIcon>
						<ActionIcon>
							<div role="button">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="24"
									height="24"
								>
									<path
										fill="currentColor"
										d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
									></path>
								</svg>
							</div>
						</ActionIcon>
					</span>
				</div>
			</SidebarHeaderWrapper>
		</header>
	);
};

const ChatsContainer = styled.div`
	background-color: var(--background-default);
	position: relative;
	z-index: 1;
	flex-grow: 1;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	height: 1000px;
`;

const ChatTabWrapper = styled.div`
	z-index: 421;
	transition: none 0s ease 0s;
	height: 72px;
	transform: translateY(0px);
	position: absolute;
	width: 100%;
	display: flex;
	flex-direction: row;
`;

const SearchBar = () => {
	return (
		<SearchBarWrapper>
			<div>
				<button className="search-button">
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="24"
							height="24"
						>
							<path
								fill="currentColor"
								d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"
							></path>
						</svg>
					</span>
				</button>

				<div className="input-placeholder">
					Search or start new chat
				</div>
				<label
					style={{
						right: '14px',
						left: '12px',
						paddingRight: '32px',
						paddingLeft: '65px',
						position: 'absolute',
						top: '7px',
						display: 'flex',
						alignItems: 'center',
						boxSizing: 'border-box',
						height: '35px',
						backgroundColor: 'var(--search-input-background)',
						borderRadius: '18px',
					}}
				>
					<div contenteditable="true" />
				</label>
			</div>
		</SearchBarWrapper>
	);
};

const ChatTab = () => {
	return (
		<ChatTabWrapper>
			<div className="chat-tab-photo">
				<img src={cov} alt="Chat" />
			</div>
			<div role="option">
				<div className="chat-tab-details">
					<p>Coventru</p>
					<p>Coventru</p>
				</div>
			</div>
		</ChatTabWrapper>
	);
};

const SideBar = () => {
	return (
		<SidebarWrapper>
			<SidebarHeader />
			<SearchBar />

			<ChatsContainer className="chats-container">
				<div aria-label="Chat list. Press right arrow key on a chat to open chat context menu.">
					<ChatTab />
				</div>
			</ChatsContainer>
		</SidebarWrapper>
	);
};

export default SideBar;
