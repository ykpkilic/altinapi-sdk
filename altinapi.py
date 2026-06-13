"""AltinAPI Python SDK — https://altinapi.hasfiyat.com"""
import requests

class AltinAPI:
    BASE = "https://altinapi.hasfiyat.com"
    def __init__(self, api_key: str, base: str = None):
        self.api_key = api_key
        self.base = base or self.BASE
        self.s = requests.Session()
        self.s.headers.update({"Authorization": f"Bearer {api_key}"})

    def prices(self, source: str = None) -> dict:
        """Canlı altın/döviz fiyatları. Opsiyonel kaynak seçimi."""
        params = {"source": source} if source else None
        r = self.s.get(f"{self.base}/api/prices", params=params, timeout=10)
        r.raise_for_status()
        return r.json()

if __name__ == "__main__":
    import os
    print(AltinAPI(os.getenv("ALTINAPI_KEY", "API_KEY")).prices())
