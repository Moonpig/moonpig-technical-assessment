# Moonpig Technical Assessment

## Welcome

You are an Engineer at Moonpig. Your team looks after the Gallery pages where customers can browse, search and filter through different cards for any particular occasion. See our [Birthday Cards](https://www.moonpig.com/uk/personalised-cards/birthday/all/) as an example.

## Your Task

Your teammate, an Associate Engineer, has just submitted a pull request to add a product quick-view modal. Your task is to review the pull request and identify any areas that cause concern, require change or are generally a code smell. Bear in mind your teammate is expecting your feedback, so please present your findings in a constructive, actionable manner.

The business requirements for the pull request are outlined in [REQUIREMENTS.md](REQUIREMENTS.md).

### How to Answer

Ordinarily we would use GitHub to review pull requests. For the purposes of this assessment, please modify [PULLREQUEST.md](PULLREQUEST.md) adding your feedback with reference to the particular file name and line number, i.e:

[Gallery.tsx](/src/components/Gallery.tsx#L127)

```typescript
const PM: FC<{ card: Card; onClose: () => void }> = ({ card, onClose }) => {
```

> This is a poorly named component. It is unclear what `PM` means in this context. Perhaps `ProductModal` is clearer.

## Disclaimer

This should be treated as production code, but understand that this is only for assessment purposes. Feel free to provide explanations as part of your feedback where you would change things in a real production system.

## How to Run

To avoid CORS restrictions, web requests are going via a Node proxy. Please visit https://cors-anywhere.herokuapp.com/ and request access before launching.

Visit https://github.com/moonpig-spike/moonpig-spike-tech-test-frontend-web/blob/main/public/cards/data.json and click `Raw` to view the raw card data file. Copy the `token` from the end of the URL and save it as an environment variable with the name `REACT_APP_GITHUB_TOKEN`.

To start the local development server, install the relevant node modules with the command `npm install`. You can then run it with `npm start`. Relevant tests can be run with `npm test`.
