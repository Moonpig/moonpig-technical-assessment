import {Box} from "@mui/system";
import {GalleryItem} from "@/components/Gallery/GalleryItem";
import {Card} from "@/services/cards";
import {FC, useMemo} from "react";
import {useLoadCards} from "@/services/useLoadCards";

export const Gallery: FC = () => {
    const cards = useLoadCards()
    const cardListData = useMemo(() => {
        if (cards.state === 'LOADED') {
            return cards.data
        }

        return {
            items: [],
        }
    }, [cards])

    const mapItems = (item: Card) => {
        return (
            <GalleryItem
                key={item.id}
                card={item}
            />
        )
    }

    return (
        <Box pt={2}>
            <h1>
                Moonpig Card Gallery <span>({cardListData.items.length})</span>
            </h1>
            <Box display="flex" flexWrap="wrap" alignContent="flex-start" p="16px">
                {cardListData.items.map(mapItems)}
            </Box>
        </Box>
    )
}