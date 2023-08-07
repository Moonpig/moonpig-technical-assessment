import {
    createContext,
    FC,
    PropsWithChildren,
    useContext,
    useMemo,
} from 'react'
import { getCardList, GetCardsList } from './cards'

export type Services = {
    cardsList: GetCardsList
}

const serviceContext = createContext<Services>({
    cardsList: getCardList,
})

export const ServiceProvider: FC<
    PropsWithChildren<{ services?: Services }>
    > = ({ children, services }) => {
    const value = useMemo<Services>(
        () => services ?? { cardsList: getCardList },
        [services],
    )

    return (
        <serviceContext.Provider value={value}>{children}</serviceContext.Provider>
    )
}

export const useServices = () => useContext(serviceContext)
