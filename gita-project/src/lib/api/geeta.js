export async function getChapter(num) {
  try {
    const res = await fetch(`/api/chapter/${num}`);
    const data = await res.json();

    console.log("API RAW RESPONSE:", data);

    if (!data.data || data.data.length === 0) return [];

    // Extract HTML "lyrics" and return clean objects
    return data.data.map(item => ({
      shlok_no: item.shlok_no,   // correct
      lyrics: item.lyrics,       // correct
      music: "https://sanskrit.ie/" + item.music,         // correct
      qr: item.qr       
    }));

  } catch (e) {
    console.error("API ERROR:", e);
    return [];
  }
}
