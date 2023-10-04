# Moonpig Technical Assessment

## Scenario

You are part of a team which has created a basic gallery view to display a list of greeting cards. This is committed to the master branch. Your teammate, an Associate Engineer, has just submitted a pull request to view the product details of a selected greeting card in a modal.

The requirements and acceptance criteria for this feature are outlined in [REQUIREMENTS.md](REQUIREMENTS.md).

## Your Task

Your task is to review the pull request. Your teammate is looking forward to receiving your feedback, so please identify and present any areas that cause concern or could be improved.

The pull request can be found here: [Pull Request](https://github.com/Moonpig/moonpig-technical-assessment/pull/2)

### How to Answer

Ordinarily we would use GitHub to review pull requests. For the purposes of this assessment, please modify [PULLREQUEST.md](PULLREQUEST.md) to add your feedback with reference to the particular file name and line number.

## Assessment

This should be treated as production code, but understand that this is only for assessment purposes. For simplicity, card product data is retrieved from the local development server inside `src/services/cardsService.ts`. You'll need to be aware of the behaviour in `cardsService.ts`, but as it's simulating an external service it doesn't form part of the code you need to review.

## Criteria

We will assess your submission based on the points raised in your feedback, along with how it is presented.

## How to Run

- Install package dependenies with `yarn`.
- Start the local development server with `yarn dev`. This will be available on http://localhost:3000/.
- Unit tests can be run with `yarn test`.
- Lint checks can be run with `yarn lint`.

Good luck!
