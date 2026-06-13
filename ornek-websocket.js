// AltinAPI - WebSocket gerçek zamanlı akış
const ws = new WebSocket("wss://api.hasfiyat.com/stream?token=API_KEY");
ws.onmessage = (e) => {
  const tick = JSON.parse(e.data);
  console.log("Canlı fiyat:", tick);
};
