import { Cafe } from "@/types/cafe";
import cafes from "@/data/cafes.json";

export function getCafeBySlug(slug: string): Cafe | undefined {
    return cafes.find((cafe)=> cafe.slug === slug);
}