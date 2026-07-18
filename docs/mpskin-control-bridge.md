# MPskin Kontrol Köprüsü — postMessage Protokolü

Bu doküman, matterporttr.com ana sayfa Hero'sundaki özel kontrol
çubuğu ile MPskin (my.mpskin.com) içinde çalışan Matterport turu
arasındaki `window.postMessage` protokolünü tanımlar.

- **Web sitesi tarafı:** `src/components/home/HeroExperience.tsx`
  içinde uygulanmıştır (gönderici + dinleyici).
- **MPskin tarafı:** Karşılayıcı JavaScript, MPskin **Extend HTML/JS**
  alanına eklenecektir (aşağıdaki "MPskin Tarafı" bölümü).

Tur URL'si ve origin tek merkezden yönetilir:
`src/config/matterport.ts`

```
featuredTourUrl: https://my.mpskin.com/tr/tour/ay6ce725kd
origin:          https://my.mpskin.com
iframe src:      https://my.mpskin.com/tr/tour/ay6ce725kd?play=1
```

> **ÖNEMLİ:** MPskin native controls must be disabled in the MPskin
> URL-Desk/Codes settings. Cross-origin iframe UI cannot be styled
> from this application. Web sitesi iframe içindeki arayüzü CSS ile
> gizlemez, kırpmaz veya üzerini kapatmaz.

---

## 1. Web sitesinden GÖNDERİLEN komutlar

Tüm komutlar aşağıdaki zarf ile, **yalnızca**
`https://my.mpskin.com` targetOrigin'ine gönderilir (asla `*`):

```json
{
  "source": "matterport-tr-website",
  "type": "MPSKIN_COMMAND",
  "action": "<ACTION>"
}
```

| Action               | Tetikleyen buton | Beklenen davranış                    |
| -------------------- | ---------------- | ------------------------------------ |
| `TOUR_PLAY`          | Play             | Turu başlat / oynat                  |
| `MODE_INSIDE`        | 3D Gezinme       | Inside moduna geç                    |
| `MODE_DOLLHOUSE`     | Dollhouse        | Dollhouse moduna geç                 |
| `MODE_FLOORPLAN`     | Kat Planı        | Floor Plan moduna geç                |
| `MEASUREMENT_TOGGLE` | Ölçüm            | Ölçüm modunu aç/kapat                |

Tam ekran bu protokole DAHİL DEĞİLDİR: web sitesi kendi Hero
container'ı üzerinde tarayıcı Fullscreen API'sini kullanır.

## 2. MPskin'den BEKLENEN mesajlar

Web sitesi yalnızca şu koşullarda mesajı işler:

- `event.origin === "https://my.mpskin.com"`
- `event.source === iframe.contentWindow`
- `event.data` bir object ve `data.source === "mpskin-matterport-bridge"`

### 2.1 `MPSKIN_READY`

Köprü kurulduğunda **bir kez** gönderilmelidir. Bu mesaj gelene kadar
web sitesindeki Inside / Dollhouse / Floor Plan / Ölçüm butonları
devre dışıdır.

```json
{ "source": "mpskin-matterport-bridge", "type": "MPSKIN_READY" }
```

### 2.2 `MPSKIN_STATE`

Görünüm modu veya ölçüm durumu her değiştiğinde gönderilmelidir
(READY sonrasında ilk durum için de önerilir):

```json
{
  "source": "mpskin-matterport-bridge",
  "type": "MPSKIN_STATE",
  "mode": "INSIDE" | "DOLLHOUSE" | "FLOORPLAN",
  "measurementActive": true | false
}
```

Web sitesi bu mesajla aktif butonu senkronize eder. Ölçüm aktifken
son görünüm modu bilgisi korunur.

### 2.3 `MPSKIN_ERROR` (opsiyonel)

```json
{
  "source": "mpskin-matterport-bridge",
  "type": "MPSKIN_ERROR",
  "code": "<kısa-hata-kodu>"
}
```

Web sitesi bilinmeyen mesajları sessizce yok sayar.

## 3. Matterport SDK karşılıkları (MPskin tarafında)

| Komut / Durum        | Matterport SDK çağrısı                          |
| -------------------- | ----------------------------------------------- |
| `MODE_INSIDE`        | `mpSdk.Mode.moveTo(mpSdk.Mode.Mode.INSIDE)`     |
| `MODE_DOLLHOUSE`     | `mpSdk.Mode.moveTo(mpSdk.Mode.Mode.DOLLHOUSE)`  |
| `MODE_FLOORPLAN`     | `mpSdk.Mode.moveTo(mpSdk.Mode.Mode.FLOORPLAN)`  |
| `MEASUREMENT_TOGGLE` | `mpSdk.Measurements.toggleMode(...)`            |
| Mode state           | `mpSdk.Mode.current.subscribe(...)`             |
| Measurement state    | `mpSdk.Measurements.mode.subscribe(...)`        |

Karşılayıcı taraf, gelen mesajlarda `event.origin` değerini web
sitesinin origin'iyle (`https://matterporttr.com` ve geliştirme için
`http://localhost:3000`) doğrulamalı ve yanıtlarını yalnızca bu
origin'lere göndermelidir.

> **NOT:** Receiver code must be installed in MPskin Extend HTML/JS or
> implemented through the supported MPskin API. The exact MPskin SDK
> initialization hook must be confirmed inside the active skin
> environment. (Bu depoda MPskin içinde `mpSdk` nesnesinin nasıl elde
> edildiğine dair varsayımsal kod bilinçli olarak YAZILMAMIŞTIR.)

## 4. Güvenlik özeti

- `postMessage` gönderiminde targetOrigin daima `https://my.mpskin.com`.
- Gelen mesajlarda origin + source + shape doğrulaması yapılır.
- Bilinmeyen `type`/`action` değerleri çalıştırılmaz.
- Mesaj içeriği hiçbir zaman DOM'a HTML olarak yazılmaz, `eval`
  kullanılmaz, mesajdan gelen URL'ler açılmaz.
- Cross-origin iframe DOM'una (contentDocument, querySelector, CSS)
  erişilmez.
