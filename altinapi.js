// AltinAPI JavaScript/Node SDK — https://altinapi.hasfiyat.com
export class AltinAPI {
  constructor(apiKey, base = "https://altinapi.hasfiyat.com") {
    this.apiKey = apiKey; this.base = base;
  }
  async prices(source) {
    const url = new URL(this.base + "/api/prices");
    if (source) url.searchParams.set("source", source);
    const res = await fetch(url, { headers: { Authorization: `Bearer ${this.apiKey}` } });
    if (!res.ok) throw new Error("AltinAPI " + res.status);
    return res.json();
  }
}
