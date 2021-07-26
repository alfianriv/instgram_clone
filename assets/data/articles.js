import faker from "faker";

export const me = {
	username: "alfianriv",
	image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
	avatar: "https://instagram.fcgk21-1.fna.fbcdn.net/v/t51.2885-19/s320x320/208984665_1143331106072397_7528278133680057307_n.jpg?_nc_ht=instagram.fcgk21-1.fna.fbcdn.net&_nc_ohc=Dky_mikCuOYAX_4mv4w&edm=ABfd0MgBAAAA&ccb=7-4&oh=9317d3ef9a79006e734d55e16e0bea7f&oe=60FEB071&_nc_sid=7bff83",
};

export const posts = () => {
	const items = [];

	for (let i = 0; i <= 10; i++) {
		items.push({
			caption: faker.lorem.sentence(),
			image: faker.image.image(),
			user: {
				username: faker.internet.userName(),
				avatar: faker.image.avatar(),
			},
			like: Math.floor(Math.random() * 11),
			comment: Math.floor(Math.random() * 11),
		});
	}

	return items;
};

export const stories = () => {
	const items = [];

	for (let i = 0; i <= 5; i++) {
		items.push({
			username: faker.internet.userName(),
			avatar: faker.image.avatar(),
		});
	}

	return items;
};

export const comments = (total) => {
	const items = [];

	for (let i = 0; i < total; i++) {
		items.push({
			comment: faker.lorem.sentences(),
			user: {
				username: faker.internet.userName(),
				avatar: faker.image.avatar(),
			},
			like: Math.floor(Math.random() * 11),
			reply:  Math.floor(Math.random() * 11),
			created_at: Math.floor(Math.random() * 3) + 1,
		});
	}

	return items;
}
