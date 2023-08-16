# Moonpig Technical Assessment

## Welcome

You are an Engineer at Moonpig. Your team looks after the Gallery pages where customers can browse, search and filter through different cards for any particular occasion. See our [Birthday Cards](https://www.moonpig.com/uk/personalised-cards/birthday/all/) as an example.

## Your Task

Your teammate, an Associate Engineer, has just submitted a pull request to add a product quick-view modal. Your task is to review the pull request and identify any areas that cause concern, require change or are generally a code smell. Bear in mind your teammate is expecting your feedback, so please present your findings in a constructive, actionable manner.

The business requirements for the pull request are outlined in [REQUIREMENTS.md](REQUIREMENTS.md).

### How to Answer

Ordinarily we would use GitHub to review pull requests. For the purposes of this assessment, please modify [PULLREQUEST.md](PULLREQUEST.md) adding your feedback with reference to the particular file name and line number, i.e:

[Gallery.tsx](/src/components/Gallery/Gallery.tsx#L127)

```typescript
const PM: FC<{ card: Card; onClose: () => void }> = ({ card, onClose }) => {
```

> This is a poorly named component. It is unclear what `PM` means in this context. Perhaps `ProductModal` is clearer.

## Disclaimer

This should be treated as production code, but understand that this is only for assessment purposes. For the purposes of simplicity, the card product data is retrieved from the local server inside `cardsService.ts`. You can treat `cardsService` as a black box: this is simulating a real service call and doesn't form part of the code on which you need to comment.

## How to Run

To start the local development server, install the relevant node modules with the command `yarn`. You can then run your local development server with the command `yarn dev`. Relevant tests can be run with `yarn test`.
