import { useEffect, useState } from 'react'
import { CardListData } from '../services/cards'
import { useServices } from '../services/serviceProvider'

type CardListLoadingState = {
    state: 'LOADING'
    data: undefined
}

type CardListLoadedState = {
    state: 'LOADED'
    data: CardListData
}

export type CardListState = CardListLoadingState | CardListLoadedState

export const useLoadCards = () => {
    const { cardsList } = useServices()
    console.log(cardsList)

    const [cards, setCards] = useState<CardListState>({
        state: 'LOADING',
        data: undefined,
    })

    useEffect(() => {
        cardsList().then(async data => {
            setCards({
                state: 'LOADED',
                data: data,
            })
        })
    }, [cardsList])

    return cards
}
