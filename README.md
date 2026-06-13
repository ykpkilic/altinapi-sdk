# AltinAPI — Türkiye Altın & Döviz Kuru API'si (SDK & OpenAPI)

[![Website](https://img.shields.io/badge/site-altinapi.hasfiyat.com-C8962B)](https://altinapi.hasfiyat.com)
[![Docs](https://img.shields.io/badge/docs-API-blue)](https://altinapi.hasfiyat.com/docs)
[![RapidAPI](https://img.shields.io/badge/RapidAPI-Hasfiyat%20Gold%20%26%20Currency-009688)](https://rapidapi.com/klyakup/api/hasfiyat-gold-currency)

**AltinAPI**, Türkiye piyasasına özel **canlı altın ve döviz** verisi sunan REST + WebSocket API'sidir.
Gram altın, has altın, çeyrek/yarım/tam, cumhuriyet, ata, gümüş ve USD/EUR/GBP kurlarını
milisaniye gecikmeyle sağlar. Kapalıçarşı/sarrafiye fiyatları ve **çoklu kaynak seçimi**
(Harem Altın, Hakan Altın, Nadir Döviz, Agora, Anlık, Mayda Gold, Metal Altın, Sağlamoğlu, Fikri Şahin, MyAkche) destekler.

> AltinAPI is a Turkey-focused **live gold & currency** REST + WebSocket API by [Hasfiyat](https://hasfiyat.com).

## Hızlı Başlangıç / Quick Start

### REST
```bash
curl -H "Authorization: Bearer API_KEY" https://altinapi.hasfiyat.com/api/prices
```

### Python
```python
from altinapi import AltinAPI
client = AltinAPI("API_KEY")
print(client.prices())
```

### Node.js
```js
import { AltinAPI } from "./altinapi.js";
const client = new AltinAPI("API_KEY");
console.log(await client.prices());
```

### WebSocket (gerçek zamanlı)
```js
const ws = new WebSocket("wss://api.hasfiyat.com/stream?token=API_KEY");
ws.onmessage = (e) => console.log(JSON.parse(e.data));
```

## Kaynaklar / Resources
- Web: https://altinapi.hasfiyat.com
- Dokümantasyon: https://altinapi.hasfiyat.com/docs
- Kod örnekleri: https://altinapi.hasfiyat.com/kod-ornekleri
- Entegrasyonlar (Ticimax/ikas/WooCommerce/Trendyol): https://altinapi.hasfiyat.com/entegrasyonlar
- RapidAPI: https://rapidapi.com/klyakup/api/hasfiyat-gold-currency

## Lisans / License
MIT — örnek SDK ve OpenAPI spec'i serbestçe kullanabilirsiniz.
