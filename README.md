# README

This application helps manage ADN sequences and detect with them mutant
substrings. A human sample is a mutant when there are more than one mutant
pattern found.

The repo follows as much of the Rails conventions as possible, so should be
pretty straightforward to run.

## TODO

- Make clear which sequence is mutant on the view.
- Implement "mutate" (edit) page.
- Add images.
- Implement dark mode.
- Add some notice about the added sequence.

## Design decisions

The application is made with a focus on keeping it simple (KISS principle), the
ADN model (that should be named DNA instead), is doing most of the hard work,
and is the most tested part of the app.

The front-end is implemented with React and Tailwind. I'm using React here
because it was a requirement, but I don't think it is great choice. I've added
tailwind to make it easier to revert that on a hypothetical future.

I've also generated the scaffolds for ADN to ease the development.

Routes are written in a way that make React Router happy and having everything
on the same application makes it easy for a small group (or a solo developer)
to work on this.

The git-flow is following the idea of the [github-flow][] of keeping it simple.

  [github-flow]: https://githubflow.github.io/
