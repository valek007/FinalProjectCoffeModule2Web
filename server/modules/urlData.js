export function getURL(req) {
        const myUrl = new URL(req.url, `http://${req.headers.host}`);

        const pathName = myUrl.pathname
        const params = myUrl.searchParams

        return {
            pathName,
            params
        }
}