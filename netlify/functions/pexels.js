export async function handler(event) {
  const id = event.queryStringParameters.id;
  try {
    const res = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
      headers: {
        Authorization: process.env.PEXELS_KEY,
      },
    });
    const data = await res.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch image" }),
    };
  }
}
