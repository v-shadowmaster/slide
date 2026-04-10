export type InstagramPostProps = {
    id: string
    media_type: "IMAGE" | "VIDEO" | "CAROSEL_ALBUM"
    timestamp: Date
    caption?: string
}