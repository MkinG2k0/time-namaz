export const getGeo = async (city: string) => {
	const regex = /window\.APP_INITIALIZATION_STATE=\[[^\]]+\]/
	const data = await fetch(`https://www.google.ru/maps/place/${city}/`).then((value) => value.text())
	const match = data.match(regex)
	if (match) {
		const [any, lng, lat] = JSON.parse(match[0].replace('window.APP_INITIALIZATION_STATE=[[', '')) as [
			number,
			number,
			number,
		]
		return [lat, lng]
	}
	return [-1, -1]
}
