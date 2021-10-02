import { ProfileCard,Post, Header } from "../../components";
import { IPost } from "../../interfaces";

const Feed = () => {
	//test with mock data
	const postList: IPost[] = [
		{
			id: 1,
			username: "themoon",
			caption: "This is awesome",
			userProfile: "https://randomuser.me/api/portraits/thumb/women/71.jpg",
			imgUrl:
				"https://images.unsplash.com/photo-1632948415553-c765f1ace7f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1886&q=80",
			likesQuantity: 887,
			commentUsername: "fairlyhaggard",
			comment: "boring",
			timeStamp: "1 hour ago",
		},
		{
			id: 2,
			username: "ocean_lover",
			caption: "Deep dive",
			userProfile: "https://randomuser.me/api/portraits/thumb/women/71.jpg",
			imgUrl:
				"https://images.unsplash.com/photo-1433995070845-72a203325d5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80",
			likesQuantity: 234,
			commentUsername: "mmgray",
			comment: "I’m not sure I like the vibe going on ",
			timeStamp: "2 hour ago",
		},
		{
			id: 3,
			username: "techie",
			caption: "ocean wave",
			userProfile: "https://randomuser.me/api/portraits/thumb/women/71.jpg",
			imgUrl:
				"https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
			likesQuantity: 23,
			commentUsername: "itzakgoldberg",
			comment: "When you try to look good",
			timeStamp: "15 minute ago",
		},
		{
			id: 4,
			username: "techInsider",
			caption: "used technologies",
			userProfile: "https://randomuser.me/api/portraits/thumb/women/71.jpg",
			imgUrl:
				"https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80",
			likesQuantity: 135,
			commentUsername: "leooteles",
			comment: "Not great",
			timeStamp: "4 hour ago",
		},
		{
			id: 5,
			username: "frontend",
			caption: "Textbox css",
			userProfile: "https://randomuser.me/api/portraits/thumb/women/71.jpg",
			imgUrl:
				"https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1964&q=80",
			likesQuantity: 100,
			commentUsername: "sumtimesfunnumbersguy",
			comment: "Powerful Pic",
			timeStamp: "3 hour ago",
		},
		{
			id: 6,
			username: "ui_gradient",
			caption: "expectation vs reality",
			userProfile: "https://randomuser.me/api/portraits/thumb/women/71.jpg",
			imgUrl:
				"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80",
			likesQuantity: 55,
			commentUsername: "look4joshua",
			comment: "reality sucks",
			timeStamp: "9 hour ago",
		},
	];

	return (
		<>
		 <Header/>
		<main className="feed__container">
			<div className="post__list">
				{postList.map((post) => (
					<Post {...post} key={post.id} />
				))}
			</div>
			<div className="info__section">
				<div className="info__list">
				<ProfileCard />
					</div>
			</div>
		</main>
		</>
	);
};

export default Feed;