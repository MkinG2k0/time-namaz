import { methods } from 'shared/constant/methods'
import { getGeo } from 'shared/lib/get-geo'

import { NextResponse } from 'next/server'
import adhan from 'namaz/Adhan'

export const revalidate = 24 * 60 * 60

export const GET = async (request: Request) => {
	const { searchParams } = new URL(request.url)
	const dateStr = searchParams.get('date')
	const date = dateStr ? new Date(dateStr) : new Date()
	let lat = Number(searchParams.get('lat')) || -1
	let lng = Number(searchParams.get('lng')) || -1
	const next = Boolean(searchParams.get('next') === 'true')
	const method = searchParams.get('method') || 'MuslimWorldLeague'
	const all = Boolean(searchParams.get('all') === 'true')
	const city = searchParams.get('city')

	if (city) {
		const [cityLat, cityLng] = await getGeo(city, revalidate)

		lat = cityLat
		lng = cityLng
	}

	if (lat === 0 || lng === 0) {
		return NextResponse.json({ message: 'Invalid city' })
	}

	if (!date) {
		return NextResponse.json({ message: 'Invalid date' })
	}
	if (!methods.includes(method)) {
		return NextResponse.json({ message: 'Invalid method' })
	}
	if (!(lat && lng)) {
		return NextResponse.json({ message: 'Invalid coordinates' })
	}

	const coordinates = new adhan.Coordinates(lat, lng)
	const params = adhan.CalculationMethod[method]()
	const prayerTimes = new adhan.PrayerTimes(coordinates, date, params)
	const { asr, dhuhr, fajr, isha, maghrib, sunrise } = prayerTimes
	const data = { asr, dhuhr, fajr, isha, maghrib, sunrise }

	if (next) {
		const nextPlayer = prayerTimes.nextPrayer()
		return NextResponse.json({ name: nextPlayer, time: prayerTimes[nextPlayer] })
	}

	if (all) {
		return NextResponse.json(prayerTimes)
	} else {
		return NextResponse.json(data)
	}
}

// http://localhost:3000/api/namaz?lat=42.899415&lng=47.561361
