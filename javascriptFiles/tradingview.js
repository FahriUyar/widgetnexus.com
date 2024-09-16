// tradingview-widget.js

document.addEventListener("DOMContentLoaded", function () {
    const widgetScript = document.createElement("script");
    widgetScript.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    widgetScript.type = "text/javascript";
    widgetScript.async = true;
    widgetScript.innerHTML = JSON.stringify({
        colorTheme: "light",
        dateRange: "12M",
        showChart: true,
        locale: "en",
        largeChartUrl: "",
        isTransparent: false,
        showSymbolLogo: true,
        showFloatingTooltip: false,
        width: "80%",
        height: "500",
        plotLineColorGrowing: "rgba(41, 98, 255, 1)",
        plotLineColorFalling: "rgba(41, 98, 255, 1)",
        gridLineColor: "rgba(240, 243, 250, 0)",
        scaleFontColor: "rgba(19, 23, 34, 1)",
        belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
        belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
        belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
        belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
        symbolActiveColor: "rgba(41, 98, 255, 0.12)",
        tabs: [
            {
                title: "Currency",
                symbols: [
                    { s: "BIST:XAUTRY1!", d: "Gram Altın" },
                    { s: "CAPITALCOM:USDTRY", d: "USD" },
                    { s: "CAPITALCOM:EURTRY", d: "EUR" },
                    { s: "CAPITALCOM:GBPTRY", d: "POUND" },
                    { s: "FX_IDC:JPYTRY", d: "YEN" }
                ]
            },
            {
                title: "Coin",
                symbols: [
                    { s: "BINANCE:BTCUSDT", d: "BITCOIN" },
                    { s: "BINANCE:ETHUSDT", d: "ETHEREUM" },
                    { s: "BINANCE:SOLUSDT", d: "SOLANA" },
                    { s: "CRYPTOCAP:USDT.D", d: "USD DOMINANCE" },
                    { s: "CRYPTOCAP:BTC.D", d: "BTC DOMINANCE" },
                    { s: "CRYPTOCAP:TOTAL", d: "TOTAL MARKET CAP" },
                    { s: "BINANCE:WLDUSDT", d: "WORLD COIN" },
                    { s: "MEXC:WIFUSDT", d: "DOGWIFHAT SOL" },
                    { s: "BINANCE:PEPEUSDT", d: "PEPE" },
                    { s: "MEXC:POPCATUSDT", d: "POPCAT" }

                ]
            },
            {
                title: "Indexes",
                symbols: [
                    { s: "BIST:XU100", d: "BIST100" },
                    { s: "NASDAQ:NDX", d: "NASDAQ" },
                    { s: "SPREADEX:NIKKEI", d: "NIKKEI" }
                ]
            },
            {
                title: "Stocks Bist",
                symbols: [
                    { s: "BIST:THYAO", d: "TÜRK HAVA YOLLARI" },
                    { s: "BIST:TUPRS", d: "TÜPRAŞ" },
                    { s: "BIST:YKBNK", d: "YAPI KREDİ" },
                    { s: "BIST:FROTO", d: "FORD" },
                    { s: "BIST:GARAN", d: "GARANTİ" },
                    { s: "BIST:QNBFB", d: "QNB FİNANSBANK" },
                    { s: "BIST:KCHOL", d: "KOÇ HOLDİNG" }
                ]
            },
            {
                title: "Stocks Nasdaq",
                symbols: [
                    { s: "NASDAQ:AAPL", d: "APPLE" },
                    { s: "NASDAQ:MSFT", d: "MICROSOFT" },
                    { s: "NASDAQ:AMZN", d: "AMAZON" },
                    { s: "NASDAQ:GOOGL", d: "ALPHABET" },
                    { s: "NASDAQ:TSLA", d: "TESLA" },
                    { s: "NASDAQ:NVDA", d: "NVIDIA" },
                    { s: "NASDAQ:INTC", d: "INTEL" },
                    { s: "NASDAQ:META", d: "META" }
                ]
            }
        ]
    });
    document.querySelector(".tradingview-widget-container__widget").appendChild(widgetScript);
});





