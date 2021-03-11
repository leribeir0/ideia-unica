async function tempo(request, response) {
    const apiSecret = process.env.MTA_API_SECRET;
    const dynamicDate = new Date();
    //new
    const currentTimeResponse = await fetch(`https://bustime.mta.info/api/where/stops-for-location.json?lat=40.748433&lon=-73.985656&latSpan=0.005&lonSpan=0.005&key=${apiSecret}`);
    const currentTimeResponseJson = await currentTimeResponse.json();
    const currentTime = currentTimeResponseJson.currentTime;

    response.json({
        date: dynamicDate.toGMTString(),
        currentTime: currentTime
    });
}

export default tempo;