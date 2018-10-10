import * as http from "http"
import * as https from "https"

export const get = (url: string): Promise<http.IncomingMessage> =>
    new Promise((resolve, reject) => https.get(url, resolve).on("error", error => reject(error)))

export const getBody = async (url: string): Promise<string> => {
    const message = await get(url)
    return new Promise<string>((resolve, reject) => {
        let body = ""
        message.on("data", chunk => body += chunk)
        message.on("end", () => resolve(body))
        message.on("error", reject)
    })
}
