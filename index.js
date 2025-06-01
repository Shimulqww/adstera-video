export default {
  async fetch(request) {
    const country = request.cf?.country || "default";

    const geoAds = {
      US: [
        "https://www.profitableratecpm.com/kf3qprjcu?key=f4646d0b196b3e6ba057b2f620d35491",
        "https://www.profitableratecpm.com/j04ei85dtx?key=c77b132a71e2b86a6f2e40140f5790c8",
        "https://www.profitableratecpm.com/khfhbjjr?key=8f6a2c9025532f3798bca037c9f902d3"
      ],
      GB: [
        "https://www.profitableratecpm.com/kgwkw0njd?key=c11b8830a028cc574bde2494d5956ae9",
        "https://www.profitableratecpm.com/tdr37rh1?key=10e9067c95c5663bdb687088fccd0522",
        "https://www.profitableratecpm.com/bgwi6i4ipy?key=d9ac19dc36a6ee0f9c892b2854ee9d2f"
      ],
      MZ: [
        "https://www.profitableratecpm.com/wdvk7bbga?key=c95a371cb2ab6d366a405451f9ca7e7b",
        "https://www.profitableratecpm.com/katmrgyd?key=823822718d29c4f59470ee65e2e00378",
        "https://www.profitableratecpm.com/ygpu3cers0?key=561221d80e20a7d4231f2513fbbee06e"
      ],
      default: [
        "https://www.profitableratecpm.com/yiz66v847?key=395c8e2b8c70e34f0f7b37bf9dd005d4",
        "https://www.profitableratecpm.com/kixcddqy?key=58dffefd81444669a11b2e92dc2343b7",
        "https://www.profitableratecpm.com/u4i1yq64?key=42d086a08caedd4e6874ebd095d6d930"
      ]
    };

    const redirectLinks = [
      "https://www.profitableratecpm.com/rxvsyw1625?key=ab0125f4a626e7f1b062882968c352ee",
      "https://www.profitableratecpm.com/f9m79cm6?key=79a149ef6aab089aec946c6e85ca1c0a"
    ];

    const ads = geoAds[country] || geoAds.default;
    const adLink = ads[Math.floor(Math.random() * ads.length)];
    const redirectLink = redirectLinks[Math.floor(Math.random() * redirectLinks.length)];

    return new Response(`
      <!DOCTYPE html>
      <html>
      <head><title>Redirecting...</title></head>
      <body>
        <script>
          const popup = window.open("${adLink}", "_blank");
          if (popup) popup.blur();
          setTimeout(() => {
            window.location.href = "${redirectLink}";
          }, 100);
        </script>
        <p>Redirecting...</p>
      </body>
      </html>
    `, {
      headers: { "Content-Type": "text/html" }
    });
  }
}
