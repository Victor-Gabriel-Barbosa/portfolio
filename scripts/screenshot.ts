import { chromium } from "playwright"
import fs from "node:fs"

async function main() {
  const browser = await chromium.launch()

  const page = await browser.newPage({
    viewport: {
      width: 1440,
      height: 900,
    },
    deviceScaleFactor: 1,
  })

  await page.goto("http://localhost:3000", {
    waitUntil: "networkidle",
  })

  await page.evaluate(async () => {
    await new Promise<void>((resolve) => {
      let totalHeight = 0

      const distance = 500
      const timer = setInterval(() => {
        window.scrollBy(0, distance)

        totalHeight += distance

        if (totalHeight >= document.body.scrollHeight) {
          clearInterval(timer)
          resolve()
        }
      }, 200)
    })
  })

  await page.evaluate(() => {
    window.scrollTo(0, 0)
  })

  await page.waitForTimeout(1500)

  fs.mkdirSync("screenshots", { recursive: true })

  await page.screenshot({
    path: "screenshots/home.png",
    fullPage: true,
  })

  await browser.close()

  console.log("Screenshot criada com sucesso!")
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})