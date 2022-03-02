import notifee from '@notifee/react-native';
let lastId = 0;

async function onDisplayNotification(title, body, data) {
	lastId++;

	const channelId = await notifee.createChannel({
		id: 'default',
		name: 'Notification Channel',
	});

	await notifee.displayNotification({
		id: lastId + ' notif',
		title: title,
		body: body,
		data: data ?? { key: 'key' },
		android: {
			channelId,
		},
	});
}

export default onDisplayNotification;
