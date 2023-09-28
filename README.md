# Moonpig Technical Assessment

## Scenario

You are part of a team which has created a basic gallery view to display a list of greeting cards. This is committed to the master branch. Your teammate, an Associate Engineer, has just submitted a pull request to view the product details of a selected greeting card in a modal.

## Your Task

Your task is to review the pull request and identify any areas that cause concern, require change or are generally a code smell. Your teammate is expecting your feedback, so please present your findings in a constructive, actionable manner.

The business requirements for the pull request are outlined in [REQUIREMENTS.md](REQUIREMENTS.md).

### How to Answer

Ordinarily we would use GitHub to review pull requests. For the purposes of this assessment, please modify [PULLREQUEST.md](PULLREQUEST.md) to add your feedback with reference to the particular file name and line number.

## Assessment

This should be treated as production code, but understand that this is only for assessment purposes. For simplicity, card product data is retrieved from the local development server inside `src/services/cardsService.ts`. You should be aware of the behaviour of `cardsService` but as it's simulating a real service it doesn't form part of the code you need to review.

## Criteria

We will assess your submission based on the issues you comment on, as well how your feedback is presented.

## How to Run

- Install package dependenies with `yarn`.
- Start the local development server with `yarn dev`. This will be available on http://localhost:3000/.
- Unit tests can be run with `yarn test`.
