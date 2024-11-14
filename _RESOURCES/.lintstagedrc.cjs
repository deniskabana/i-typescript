module.exports = {
  // Type check TypeScript files
  'src/**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // Lint & Prettify TS and JS files
  'src/**/*.(ts|tsx|js)': (filenames) => [
    `yarn eslint ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  // Prettify only Markdown and JSON files
  'src/**/*.(md|json)': (filenames) => `yarn prettier --write ${filenames.join(' ')}`,
}
